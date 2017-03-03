// Create the route module and name it routeApp
var app = angular.module('routeApp', ['ngRoute']).controller('routeCtrl', function() {
  
});

app.config(function($routeProvider) {
// Config the routes
  $routeProvider.when('/', {
    templateUrl: './pages/home.html',
    controller: 'homeController',
    controllerAs: 'hc'
  }).when('/contact', {
    templateUrl: './pages/contact.html',
    controller: 'contactController',
    controllerAs: 'cc'
  }).when('/about', {
    templateUrl: './pages/about.html',
    controller: 'aboutController',
    controllerAs: 'ac'
  }).otherwise({
    redirectTo: '/'
  });
         // route for the home page

        // route for the about page

        // route for the contact page



});


// Create the controllers for the different pages below

// home page controller
// Create a message to display in the view
app.controller('homeController', function() {
  this.message = 'Home Controller';
});
// about page controller
// Create a message to display in the view
app.controller('aboutController', function() {
  this.message = 'About Controller';
});

// contact page controller
// Create a message to display in the view

app.controller('contactController', function() {
  this.message = 'Contact Controller';
});