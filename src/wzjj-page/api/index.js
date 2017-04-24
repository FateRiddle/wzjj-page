import axios from 'axios'

const url = ''

export const apply = ({ name,phone,city,area }) => {
  return axios.post(`${url}/api/members`,{name,phone,city,area}).then(res => {
    return res.data.output
  })
}

export const fetchNews = () => {
  return axios.get(`${url}/api/news`).then(res => res.data)
}
