angular
	.module('ngShop')
	.controller('shopController', function($scope, shopModel) {

		$scope.cribs = shopModel.getCribs();
	});