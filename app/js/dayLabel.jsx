var React = require('react');
var MacroInput = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="col-sm-1 col-md-1 col-lg-1">
      <div className="thumbnail">
        <div className="caption">
          <h4>{this.props.day}</h4>
        </div>
      </div>
    </div>
  }
});
