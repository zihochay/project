import request from '@/utils/request.js'

export function addDevelop (data) {
  return request({
    url: '/api/development/addDev',
    method: 'post',
    data
  })
}

export function editDevelop (data) {
  return request({
    url: '/api/development/editDev',
    method: 'post',
    data
  })
}

export function findAllDevelop (data) {
  return request({
    url: '/api/development/findAll',
    method: 'post',
    data
  })
}
