angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var items = [
        {name:'Dr. Nita',doa:new Date("February 21 2022"),location:"Banerghatta",rating:"4 Star",price:20000},
        {name:'Amrita Foundation',doa:new Date("February 22 2022"),location:"Hosur",rating:"4.8 star",price:400000},
        {name:'Anumpam Mittal',doa:new Date("February 20 2022"),location:"Chikmanglur",rating:"4.5 star",price:56000},
        {name:'Agrawal and sons',doa:new Date("February 21 2022"),location:"Bangalore",rating:"5 star",price:200000},
        {name:'Dr. Venkata',doa:new Date("June 10 2022"),location:"Kempangowda",rating:"4.6 star",price:21000},
        {name:'Sandeep Unnikrishanan',doa:new Date("August 22 2022"),location:"Bangalore",rating:"5 star",price:12000}
    ];
    $scope.items = items;
    $scope.rowlimit = 6;
});