var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="input-group">
    	<span className="input-group-addon" id="basic-addon1">{this.props.title}
    	</span>
    	<input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
    	</div>
  }
});
