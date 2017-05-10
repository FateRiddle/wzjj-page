import React from 'react'
import { fetchNews } from '../api'

class News extends React.Component {

  state = {
    news: [
      {title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台'},
      {title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台'},
      {title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台'},
      {title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台'},
      {title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台'},
      {title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台'},
    ]
  }

  updateNews = () => {
    return fetchNews().then(res => {
      const news = res.recordset.reverse().slice(0,6) //只取前6条
      this.setState({news})
    })
  }

  componentDidMount() {
    this.updateNews()
  }

  render() {
    return <ul className="home-news-two-rig">
      {
        this.state.news.map((n,index) => {

          return  (
            <li key={index}>
              <div className="home-news-two-rig-01">
                <h4>{index+1}</h4>
                <div>
                  <h3>{n.title}</h3>
                  <p>{n.content}</p>
                </div>
              </div>
            </li>
          )
        })
      }
      <li>
          <div className="home-product-one-rig">
              <a href="../html/hot_Consultant.html">查看更多</a>
          </div>
      </li>
    </ul>
  }
}

export default News
