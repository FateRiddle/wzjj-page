import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
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

            <Route exact path="/html/news-dianshang" component={DianshangNews} />
            <Route exact path="/html/news-videos" component={Videos} />
            <Redirect from="/html/hot_Consultant.html" to="/html/news-dianshang" />
            <Route render={() => <div className="NoMatch" />} />
          </Switch>
        </main>
      </Router>
    )
  }
}

ReactDOM.render(<News />, document.getElementById('main'))

