var app = angular.module('myApp', ['ngRoute']);
var navbarController = true;
app.controller('navbarController', function($scope) {
    var isOpen = false;
    $scope.toggleMenu = function() {
        if (isOpen) {
            $('#buttonGroup').animate({top: 110 - $('#buttonGroup').height()}, 500, 'easeOutCirc', function() {
                $('#buttonGroup').css('visibility','hidden');
            });
        } else {
            $('#buttonGroup').css('visibility','visible');
            $('#buttonGroup').css('top',110 - $('#buttonGroup').height());
            $('#buttonGroup').animate({top: '110px'}, 500, 'easeOutCirc');
        }
        isOpen = !isOpen;
    }
});