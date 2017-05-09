import React from 'react'
import { fetchNews } from '../api'
import pic1 from '../image/news_pic1.png'
import pic2 from '../image/news_pic2.png'
import pic3 from '../image/news_pic3.png'

class DianshangNews extends React.Component {

  state = {
    news: [
      {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''}
    ]
  }

  updateNews = () => {
    return fetchNews().then(res => {
      const news = res.recordset.reverse()
      this.setState({news})
    })
  }

  componentDidMount() {
    this.updateNews()
  }

  render() {
    return <div className="News DianshangNews">
      <ul className="News__ul">
        {
          this.state.news.map((n,index) => {
            const day = n.date.substring(8,10)
            const yyyymm = n.date.substring(0,7)
            return  (
              <li className="News__List" key={index}>
                <div className="News__Date">
                  <header>{day}</header>
                  <footer>{yyyymm}</footer>
                </div>
                <div className="News__Content">
                  <a href={n.url}>{n.title}</a>
                  <main>{n.content}</main>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className="News__Photos">
        <img className="bigPic" src={pic1} alt=""/>
        <img className="smallPic" src={pic2} alt=""/>
        <img className="smallPic" src={pic3} alt=""/>
      </div>
    </div>
  }
}

export default DianshangNews
