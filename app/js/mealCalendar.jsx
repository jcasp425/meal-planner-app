var React = require('react');
var MealInfo = require('./mealInfo');
var DayLabel = require('./dayLabel');

module.exports = React.createClass({
  render: function() {
    return <div className="container-fluid">
    	<div className="row">
    		<DayLabel day="Sun." />
    		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
    	</div>
    	<div className="row">
    		<DayLabel day="Mon." />
    		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
   	 	</div>
   	 	<div className="row">
   	 		<DayLabel day="Tues." />
   	 		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
   	 	</div>
   	 	<div className="row">
   	 		<DayLabel day="Wed." />
   	 		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
   	 	</div>
   	 	<div className="row">
   	 		<DayLabel day="Thur." />
   	 		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
   	 	</div>
   	 	<div className="row">
   	 		<DayLabel day="Fri." />
   	 		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
   	 	</div>
   	 	<div className="row">
   	 		<DayLabel day="Sat." />
   	 		<MealInfo {...this.props.mealInfoData} number={1} />
    		<MealInfo {...this.props.mealInfoData} number={2} />
    		<MealInfo {...this.props.mealInfoData} number={3} />
   	 	</div>
   	</div>
  }
});
