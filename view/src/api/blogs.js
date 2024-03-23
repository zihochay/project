import request from '@/utils/request.js'

export function addBlog (data) {
  return request({
    url: '/api/blogs',
    method: 'post',
    data
  })
}

export function findBlog () {
  return request({
    url: '/api/blogs',
    method: 'get'
  })
}

export function getBlogById (id) {
  return request({
    url: `/api/blogs/${id}`,
    method: 'get'
  })
}

export function UpdateBlog (id, data) {
  return request({
    url: `/api/blogs/${id}`,
    method: 'put',
    data
  })
}

export function addOneRead (data) {
  return request({
    url: '/api/blogs/addOneRead',
    method: 'post',
    data
  })
}
