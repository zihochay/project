// dbhelper/blog.js

const Model = require('../models/blog');

// TODO: 此文件中最好返回 Promise。通过 .exec() 可以返回 Promise。
// 需要注意的是 分页插件本身返回的就是 Promise 因此 Model.paginate 不需要 exec()。
// Model.create 返回的也是 Promise

const populateObj = [
  {
    path: 'categoryObj',
    select: 'name value color',
  },
];

/**
 * 查找全部
 */
exports.findAll = () => Model.find().populate(populateObj).exec();

/**
 * 查找多个 筛选
 */
exports.findSome = (data) => {
  const {
    keyword, title, category, status = true, page = 1, limit = 10, sort = 'readCount',
  } = data;
  const query = {};
  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    sort,
    populate: populateObj,
  };

  if (status !== 'all') {
    query.status = status === true || status === 'true';
  }

  if (title) {
    query.title = { $regex: new RegExp(title, 'i') };
  }

  if (category) {
    query.category = category;
  }

  // 关键字模糊查询 标题 和 content
  if (keyword) {
    const reg = new RegExp(keyword, 'i');
    const fuzzyQueryArray = [{ content: { $regex: reg } }];
    if (!title) {
      fuzzyQueryArray.push({ title: { $regex: reg } });
    }
    query.$or = fuzzyQueryArray;
  }

  return Model.paginate(query, options);
};

// 查找今天新增文章数据
exports.findToday = async () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  // console.log('today >>', today)
  return Model.find({ createdAt: { $gte: today } });
  // console.log('data >>', data)
  // return data
}

// 查询今天文章新增数量和阅读量
exports.findAddRead = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 将时间设置为当天的开始时刻
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // 将时间设置为第二天的开始时刻
  return Model.aggregate([
    {
      $match: {
        createdAt: { $gte: today, $lt: tomorrow }
      }
    },
    {
      $group: {
        _id: null,
        newArticles: { $sum: 1},
        totalViews: { $sum: '$readCount' }
      }
    },
  ])
}

/**
 * 查找单个 详情
 */
exports.findById = (id) => Model.findById(id).populate(populateObj).exec();

/**
 * 新增
 */
exports.add = (data) => Model.create(data);

/**
 * 更新
 */
exports.update = (data) => {
  const { id, ...restData } = data;
  return Model.findOneAndUpdate({ _id: id }, {
    ...restData,
  }, {
    new: true, // 返回修改后的数据
  }).exec();
};

// 更新阅读次数
exports.addOneRead = (id) => {
  return Model.findByIdAndUpdate(id, { $inc: { readCount: 1 } })
}

/**
 * 删除
 */
exports.delete = (id) => Model.findByIdAndDelete(id).exec();

// 查询统计数据
exports.getData = () => {
  return Model.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        articleCount: { $sum: 1 },
        readCount: { $sum: "$readCount" }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);
}

// 查询每个文章分类数据
exports.getCateBlog = () => {
  return Model.aggregate([
    {
      $group: {
        _id: "$category",
        articleCount: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "categories",    // category 表的名称
        localField: "_id",
        foreignField: "_id",
        as: "category"
      }
    },
    {
      $project: {
        _id: 0,
        category: {
          $mergeObjects: [
            { $arrayElemAt: ["$category", 0] },
            { articleCount: "$articleCount" }
          ]
        }
      }
    },
    {
      $replaceRoot: {
        newRoot: "$category"
      }
    }
  ]);
}