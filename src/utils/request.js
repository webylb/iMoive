import axios from 'axios'
import { message } from 'antd'

const baseUrl = ''

const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH:'PATCH'
}

const request = (url,method = Method.GET, params = {}, config = {}) => {
  const data = (method === 'GET') ? 'params' : 'data'
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
  if(config.headers) {
    headers = {
      ...headers,
      ...config.headers
    }
  }
  url = baseUrl + url
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      [data]: params,
      headers
    }).then(response => {
      const { data, statusCode } = response
      if(statusCode && statusCode !== 200) message.error('接口调用异常, 请联系黄达')
      resolve(data)
    }).catch(error => {
      console.dir(error);
      message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
      reject(error);
    })
  })
}

export default request