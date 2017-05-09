var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
    render: function () {
        return (
            <div className="todoListMain">
          <div className="header">
          <h1> Markdown Previewer</h1>
            <form>
              <input>
              </input>
            </form>
          </div>
        </div>
        );
    }
});

ReactDOM.render(<App/>,  document.getElementById("app"));