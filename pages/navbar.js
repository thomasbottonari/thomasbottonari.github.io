// var app = angular.module('myApp', []);
app.controller('navbarController', function($scope) {
    var isOpen = false;
    $scope.toggleMenu = function() {
        if (isOpen) {
            $('#buttonGroup').css('visibility','hidden');
        } else {
            $('#buttonGroup').css('visibility','visible');
        }
        isOpen = !isOpen;
    }
});