var App = React.createClass({
	getInitialState: function() {
		return {
			content: 'Try Markdown here!'
		}
	},
	handleChange: function(event) {
		this.setState({
			content: event.target.value
		})
	},
	rawMarkup: function() {
		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false,
			
		})

		var rawMarkup = marked(this.state.content, {sanitize: true})
		return {
			__html: rawMarkup
		}
	},
	
	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					
					<div className="col-xs-12 col-sm-6">
						<h3 id="mark">Markdown Editor</h3>
						<textarea className="markdown" defaultValue={this.state.content} onChange={this.handleChange}></textarea>
					</div>
					<div className="col-xs-12 col-sm-6">
						<h3>Preview</h3>
						<div className="preview" dangerouslySetInnerHTML={this.rawMarkup()}>
                        </div>
				    </div>
                </div>
            </div>
		)
	}
})

ReactDOM.render(
	<App />, 
	document.getElementById('app')
)