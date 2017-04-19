import axios from 'axios'

export const apply = ({ name,phone,city,area }) => {
  return axios.put('/api/zhuangxiuApply',{name,phone,city,area}).then(res => {
    return res.data.output
  })
}
