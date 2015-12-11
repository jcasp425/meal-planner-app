var React = require('react');
var MacroInput = require('./macroInput');
var FoodStuffs = require('./foodStuffs');
var FoodInfo = require('./foodInfo');

module.exports = React.createClass({
	addFood: function(name, amt, units, cal, carb, pro, fat){
		var food = {
			name: name,
			amt: amt,
			units: units,
			cal: cal,
			carb: carb,
			pro: pro,
			fat: fat
		}
		var foods = this.state.foodList;
		foods.push(food);
		this.setState({foodList: foods});
	},
  render: function() {
    return <div className="col-sm-3 col-md-3 col-lg-3">
      <div className="thumbnail">
        <div className="caption">
          <h5>{this.props.header + " #" + this.props.number}</h5>
          <p>{this.props.description}</p>
          <p>
            <MacroInput title={this.props.name} />
            <FoodStuffs />
            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#foodModal">Add New Food</button>
    	<div id="foodModal" className="modal fade" role="dialog">
    		<FoodInfo {...this.props.thumbnailData} whenClicked={this.addFood} />
    	</div>
          </p>
        </div>
      </div>
    </div>
  }
});
