console.log('client has been loaded');
let foodApp = angular.module('FoodApp', []);//the empty array is where the dependencies would go

foodApp.controller('FoodController', function () {
    let self = this;
    let fullMenu = ['Ravioli', 'Tortellini', 'Saccotini'];
    self.foodList = fullMenu;
    self.addFood = function(addedFood){
        fullMenu.push(addedFood);
    };
});