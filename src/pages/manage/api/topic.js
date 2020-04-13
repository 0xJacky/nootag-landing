import http from '@/lib/http'

const baseUrl = '/admin/topic'

const topic = {
  get_list(params) {
    return http.get(baseUrl + 's', {params: params})
  },

  get(id) {
    return http.get(baseUrl + '/' + id)
  },

  save(id = null, data) {
    return http.post(baseUrl + (id ? '/' + id : ''), data)
  },

  destroy(id) {
    return http.delete(baseUrl + '/' + id)
  },

  restore(id) {
    return http.patch(baseUrl +  '/' + id)
  },

  upload_icon(id, file, token) {
    return http.post(baseUrl + '/' + id + '/upload', file, {headers: {'Content-Type': 'multipart/form-data;charset=UTF-8', 'Token': token}})
  }
}

export default topic
