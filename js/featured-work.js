(function () {
	var app = angular.module('featured-work', []);

	app.controller('FeaturedWorkController', function () {
		this.projects = apps;
	});

	var apps = [
		{
			name: 'Cashculator',
			imageUrl: 'images/cashculator.png',
			storeUrl: 'https://itunes.apple.com/us/app/cashculator-cash-counter/id574166464?mt=8'
		}
	];
})();