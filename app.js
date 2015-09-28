fallback.load({
    jQuery: [
        "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        "libs/jquery-2.1.4.min.js"
    ],
    bootstrap_css: [
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
        "libs/bootstrap-3.3.5-dist/css/bootstrap.min.css"
    ],
    'jQuery.fn.modal': [
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js",
        "libs/bootstrap-3.3.5-dist/js/bootstrap.min.js"
    ],
    angular: [
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js",
        "libs/angular-1.3.15.min.js"
    ],
    'jQuery.easing.easeOutCubic': [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js",
        "libs/jquery.easing.1.3.js"
    ]
}, {
    shim: {
        'jQuery.fn.modal': ['jQuery'],
        'jQuery.easing.easeOutCubic': ['jQuery'],
    },

    callback: function(success, failed) {
        // success - object containing all libraries that loaded successfully.
        // failed - object containing all libraries that failed to load.

        // All of my libraries have finished loading!

        // Execute my code that applies to all of my libraries here!
        if (!jQuery.isEmptyObject(failed)) {
            console.warn(failed);
        }
    }
});

fallback.ready(function() {
    var myApp = angular.module('myApp', []);
    $(window).ready(function() {
        $('#header').animate({ top: '0px' }, 1000, 'easeOutBounce', function() {
            $('#logo').animate({ left: '0px' }, 750, 'easeOutCubic');
        })
    });

        var width = $('#bg').outerWidth();
            console.debug(width);
            $('#search-bg').css('background-size', width+'px auto');

    $(window).resize(function() {
        var width = $('#bg').outerWidth();
        console.debug(width);
        $('#search-bg').css('background-size', width+'px auto');
    })
});
    
//myApp.config(function($routeProvider) {
//
//    $routeProvider
//
//    .when('/eaglerare', {
//        templateUrl: 'pages/bourbon.html',
//        controller: 'eaglerareController'
//    })
//
//    .when('/blantons', {
//        templateUrl: 'pages/bourbon.html',
//        controller: 'blantonsController'
//    })
//});
//
//myApp.controller('eaglerareController', ['$scope', function($scope) {
//    $scope.name = 'Eagle Rare';
//    $scope.path = 'eaglerare.jpg';
//}]);
//
//myApp.controller('blantonsController', ['$scope', function($scope) {
//    $scope.name = 'Blanton\'s';
//    $scope.path = 'blantons.jpg';
//}]);