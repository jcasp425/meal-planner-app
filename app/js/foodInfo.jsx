var React = require('react');
var MacroInput = require('./macroInput');

module.exports = React.createClass({
  render: function() {
    return <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h3 className="modal-title">{this.props.header}</h3>
        </div>
        <div className="modal-body">
          <p>{this.props.description}</p>
          <p>
            <MacroInput title={this.props.name} />
            <MacroInput title={this.props.number} />
            <MacroInput title={this.props.units} />
            <MacroInput title={this.props.calories} />
            <MacroInput title={this.props.carbs} />
            <MacroInput title={this.props.protein} />
            <MacroInput title={this.props.fat} />
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.whenClicked}>Add</button>
       	</div>
      </div>
    </div>
  }
});
