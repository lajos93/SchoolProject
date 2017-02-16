angular
	.module('ngShop')
	.controller('shopController', function($scope, shopModel) {

		$scope.products = shopModel.getProducts();
	});