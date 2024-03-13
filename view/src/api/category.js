import request from '@/utils/request.js'

export function addCategory (data) {
  return request({
    url: '/api/categories',
    method: 'post',
    data
  })
}

export function getCategory () {
  return request({
    url: '/api/categories',
    method: 'get'
  })
}
