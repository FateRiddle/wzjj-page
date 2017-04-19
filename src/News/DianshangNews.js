import React from 'react'
import pic1 from '../image/news_pic1.png'
import pic2 from '../image/news_pic2.png'
import pic3 from '../image/news_pic3.png'

class DianshangNews extends React.Component {

  news = [
    {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''},
    {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''},
    {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''},
    {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''},
    {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''},
    {date:'2017-02-03',title:'东箭完整家居',content:'一站式装饰建材F2B垂直平台',url:''},
  ]

  render() {
    return <div className="News DianshangNews">
      <ul className="News__ul">
        {
          this.news.map((n,index) => (
            <li className="News__List" key={index}>
              <div className="News__Date">{n.date}</div>
              <div className="News__Content">
                <header>{n.title}</header>
                <main>{n.content}</main>
              </div>
            </li>
          ))
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
