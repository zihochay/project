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

export function getCategoryById (id) {
  return request({
    url: `/api/categories/${id}`,
    method: 'get'
  })
}

export function UpdateCategory (id, data) {
  return request({
    url: `/api/categories/${id}`,
    method: 'put',
    data
  })
}

export function delCategory (id) {
  return request({
    url: `/api/categories/${id}`,
    method: 'delete'
  })
}
