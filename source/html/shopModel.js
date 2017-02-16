angular
	.module('ngShop')
	.factory('shopModel', function(){

		var shopData = 


		[
			{
				"type": "Condo",
				"price": "220000",
				"address": "213 Grove Street",
				"description": "Excellent place, really nice view!"
			},
			{
				"type": "House",
				"price": "410500",
				"address": "7823 Winding Way",
				"description": "Beautiful home with lots of space for.."
			},
			{
				"type": "Duplex",
				"price": "395000",
				"address": "834 River Lane",
				"description": "Great neithbourhood and lots...."
			}
		];








		

 		function getCribs(){
 			return shopData;
 		}

 		return{
 			getCribs:getCribs
 		}
	});