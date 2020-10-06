(function () {
	var app = angular.module('featured-work', []);

	app.controller('FeaturedWorkController', function () {
		this.projects = apps;
	});

	var apps = [
		{
			name: 'Cashculator',
			imageUrl: 'images/cashculator.png',
			storeUrl: 'https://itunes.apple.com/us/app/cashculator-cash-counter/id574166464?mt=8',
			appDescription: 'Need help counting your cash? This is a must have app if you are a cashier or need an easier and accurate calculator for counting your cash! Counts bills, coins, coin rolls and checks! Just enter the amount for each denomination and the app does the calculations. Notification Center Widget makes it easy to quickly view totals.'
		}
	];
})();