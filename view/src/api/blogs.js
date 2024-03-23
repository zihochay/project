import request from '@/utils/request.js'
import Qs from 'qs'

export function addBlog (data) {
  return request({
    url: '/api/blogs',
    method: 'post',
    data
  })
}

export function findBlog (data) {
  return request({
    url: `/api/blogs?${Qs.stringify(data)}`,
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
