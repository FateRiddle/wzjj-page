import React from 'react'
import { NavLink as Link } from 'react-router-dom'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

  }

  tabs = [
    {name:'● 电商资讯', url:'/html/news-dianshang'},
    {name:'● 物流资讯', url:'/html/news-wuliu'},
    {name:'● 上家资讯', url:'/html/news-shangjia'},
    {name:'● 仓储资讯', url:'/html/news-cangchu'},
    {name:'● 视频中心', url:'/html/news-videos'},
  ]

  render() {
    return (
      <ul className="Sidebar">
        {
          this.tabs.map((tab,index) => (
            <li key={index}><Link className='Sidebar__Link' to={tab.url} >{tab.name}</Link></li>
          ))
        }
        <li className="Sidebar__last"></li>
      </ul>
    )
  }
}

export default Sidebar
