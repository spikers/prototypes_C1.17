var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this;
    //Create a variable to hold your api key but set it to an empty string
    this.API_KEY = '';

    //Create a variable to hold the API url but set it to an empty string
    this.API_URL = ''; 

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            call_api: function () {
                //Calls LFZ API
                var defer = $q.defer();

                $http({
                    method: 'POST',
                    data: 'api_key=' + self.API_KEY,
                    url: self.API_URL,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(res) {

                    defer.resolve(res);

                }, function(err) {

                    $log.log('err', err);
                    defer.reject('Error');

                });

                return defer.promise;
            }
        };
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function (sgtDataProvider) {
    sgtDataProvider.API_KEY = '8KyFdlyzfV';
    sgtDataProvider.API_URL = 'http://s-apis.learningfuze.com/sgt/get';
})

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function($log, sgtData){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var myself = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    this.data = {};

    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    this.getData = function () {
        sgtData['call_api']().then(function (res) {

            myself.data = res.data;
            console.log(myself.data)

        }, function (err) {

            $log.log('Error');

        })
    }
});





















