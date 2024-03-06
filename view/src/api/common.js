import request from '@/utils/request.js'

export function queryblogs (data) {
  return request({
    url: '/api/blogs',
    method: 'post',
    data
  })
}

export function getblogs (id) {
  return request({
    url: `/api/blogs?id=${id}`,
    method: 'get'
  })
}
