/**
 * 
 */
var myApp = angular.module("dasboard-module", []);

var numberLoader = function() {
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

myApp.controller("navbarController", function($scope) {
    $scope.toggleSidebar = function() {
        jQuery("#side-bar").toggleClass("active");
    }
});

myApp.controller("dashboardController", function($scope, $rootScope, $timeout) {
    $rootScope.$on('$includeContentLoaded', function() {
        numberLoader();
      });
});