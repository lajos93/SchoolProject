angular
	.module('ngShop')
	.factory('shopModel', function(){

		var shopData = 


		[
			{
				"name": "GEL-FUJITRABUCO 5 G-TX",
				"price": "59",
				"type": "Sport",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "Nike-ASGGTX64 5 TX",
				"price": "79",
				"type": "Sport",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "PUMA-FEDSQG 7 V",
				"price": "89",
				"type": "Casual",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "Nike-BDFSF",
				"price": "129",
				"type": "Sport",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "PUMA-YHFGFG",
				"price": "89",
				"type": "Casual",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "Nike-BCQWE",
				"price": "79",
				"type": "Sport",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "PUMA-BBCSDFDSF",
				"price": "99",
				"type": "Casual",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "Nike-DSAWRDSF 5 TX",
				"price": "79",
				"type": "Sport",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			},
			{
				"name": "PUMA-NFNDG 7 V",
				"price": "99",
				"type": "Casual",
				"description": "God og robust terrænløbesko med GORE- TEX-membran. Overdel i let mesh og sål med affjedring både i hæl og forfod...."
			}
		];



	






 		function getProducts(){
 			return shopData;
 		}

 		return{
 			getProducts:getProducts
 		}
	});