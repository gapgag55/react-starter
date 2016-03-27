var React = require('react');
var ReactDOM = require('react-dom')

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, Webpack</h1>
      </div>
    )
  }
})

ReactDOM.render(<Home/>, document.getElementById('main'))
