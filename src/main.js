import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="two">Two Page</Link>
      </div>
    )
  }
}

class TwoPage extends Component {
  render() {
    return (
      <div>
        <h1>Second Page</h1>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Home}/>
        <Route path="two" component={TwoPage}/>
      </Router>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'))
