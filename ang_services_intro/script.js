var app = angular.module('servicesApp', []);

app.controller('servicesController', function($http, $log) {
  var self = this;
  this.inputField;
  this.data = [];

  this.buttonClick = function() {
    field = this.inputField.replace(/ /g, "+");
    var callingUrl = 'https://itunes.apple.com/search?term='+ field + '&callback=JSON_CALLBACK'

    $http({
      method: 'jsonp',
      url: callingUrl,
    }).then(this.successFunction, this.errorFunction);

  }

  this.successFunction = function (res) {
    self.data = res.data.results;
    $log.log("SC Data: ", this.data);
  }

  this.errorFunction = function (err) {
    $log.log(err);
  }

});