// config/index.js
// console.log('port >>', process.env.NODE_ENV)
module.exports = {
  port: process.env.PORT || 3000,
  apiPrefix: '/api',
  // database: 'mongodb://localhost:27017/test',
  database: 'mongodb://chenzhihao:123456@159.75.114.169:27017/project', 
  databasePro: 'mongodb://chenzhihao:123456@159.75.114.169:27017/project', 
};
