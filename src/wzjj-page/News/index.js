import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Videos from './Videos'
import DianshangNews from './DianshangNews'
import '../css/news.css'

class News extends React.Component {

  render() {
    return (
      <Router>
        <main className="App">
          <Route component={Sidebar} />
          <Switch>
            <Route path="/html/news-dianshang" component={DianshangNews} />
            <Route path="/html/news-videos" component={Videos} />
            <Route render={()=><div className="NoMatch"></div>} />
          </Switch>
        </main>
      </Router>
    )
  }
}

ReactDOM.render(<News />, document.getElementById('main'))
