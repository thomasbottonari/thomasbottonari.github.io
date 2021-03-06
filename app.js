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
    ],
    'angular.module("ngRoute")': [
        "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular-route.min.js"
    ],
    navbarController: [
        "controllers/navbar.js"
    ]
}, {
    shim: {
        'jQuery.fn.modal': ['jQuery'],
        'jQuery.easing.easeOutCubic': ['jQuery'],
        navbarController: ['angular'],
        'angular.module("ngRoute")': ['angular'],
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
    $(window).ready(function() {
        $('#header').animate({ top: '0px' }, 1000, 'easeOutBounce', function() {
            $('#logo').animate({ left: '0px' }, 750, 'easeOutCubic');
        })
    });

    // ensure that the popup image size matches the bg image size - which is set to 'cover'
    function resizeBlur() {
        var aspectRatio = 1.5;
        var width = $('#bg').outerWidth();
        var height = $('#bg').outerHeight();
        if (width/height >= aspectRatio) {
            $('#popup-bg').css('background-size', width + 'px auto');
        } else {
            $('#popup-bg').css('background-size', 'auto ' + height + 'px');
        }
    }
    
    // resize once on init
    resizeBlur();

    $(window).resize(resizeBlur);

    // this is needed to use active button states in safari mobile
    document.addEventListener("touchstart", function() {},false);


    var myApp = angular.module('myApp');
    myApp.config(function ($routeProvider) {
        $routeProvider
        .when('/', {templateURL: '/pages/main.html'})
    });
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