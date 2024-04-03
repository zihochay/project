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
    data,
    options: { maskFlag: false }
  })
}

export function getBlogToday () {
  return request({
    url: '/api/blogs/findToday',
    method: 'post'
  })
}

export function getData () {
  return request({
    url: '/api/blogs/getData',
    method: 'post'
  })
}

export function getCateBlog () {
  return request({
    url: '/api/blogs/getCateBlog',
    method: 'post'
  })
}
