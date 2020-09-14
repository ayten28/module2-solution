(function () {
'use strict';

var toBuyList = [
	{ name: "milk", quantity: 1 },
	{ name: "bread", quantity: 2 },
	{ name: "egg", quantity: 10 },
	{ name: "shampoo", quantity: 2 },
	{ name: "socks", quantity: 6 }
];

var boughtList = [];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCntrl = this;
  toBuyCntrl.items = ShoppingListCheckOffService.getItems();
  toBuyCntrl.buyItem =  function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var alreadyBoughtCntrl = this;
  alreadyBoughtCntrl.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

 var itemsToBuy = toBuyList;
 var itemsBought = boughtList;

 service.getItems = function () {
 return itemsToBuy;
};

 service.addItem = function (item) {
   boughtList.push(item);
 };


service.buyItem = function (itemIndex) {
   var item =  itemsToBuy[itemIndex];
   itemsToBuy.splice(itemIndex, 1);
	 service.addItem(item);
 };

service.getBoughtItems = function()
{
  return itemsBought;
}

}


})();
