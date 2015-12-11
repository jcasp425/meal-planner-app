var React = require('react');
var MainPage = require('./mainPage');

var options = {
	calendarData: {
		mealInfoData: {
  			thumbnailData: {
  				header: 'New Food',
  				description: 'Create a new food here. Input its name, the amount and units of the food, and its basic nutritional profile in the fields provided. Proteins, carbs, and fats are in grams.',
  				name: 'Name',
  				number: 'Amount',
  				units: 'Units',
  				calories: 'Calories',
  				carbs: 'Carbs',
  				protein: 'Protein',
  				fat: 'Fat'
  			},
  			header: 'Meal',
  			description: 'Name this meal, and add foods to it.',
  			name: 'Name'
  		}
  	}
};


var element = React.createElement(MainPage, options);
React.render(element, document.querySelector('.container'));
