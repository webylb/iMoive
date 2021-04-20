import request from '@utils/request'

export const getRankTagList = async (url, method, params) => {
  const res = await request(url, method, params)
  return res
}

export const getRankList = async (url, method, params) => {
  const res = await request(url, method, params)
  return res
}