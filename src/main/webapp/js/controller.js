var myApp = angular.module("dashboardModule", ["ng-fusioncharts"]);

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

	//Define the `myDataSource` scope variable.
  $scope.myDataSource = {
     chart: {
         /*caption: "Harry's SuperMart",
         subCaption: "Top 5 stores in last month by revenue",
         numberPrefix: "$",
         theme: "fint"*/
         "caption": "Total Visits",
         "subCaption": "per page",
         "yAxisName": "Unique Visits",
         "paletteColors": "#0075c2",
         "bgColor": "#ffffff",
         "borderAlpha": "20",
         "canvasBorderAlpha": "0",
         "usePlotGradientColor": "0",
         "plotBorderAlpha": "10",
         "placevaluesInside": "1",
         "rotatevalues": "1",
         "valueFontColor": "#ffffff",
         "showXAxisLine": "1",
         "xAxisLineColor": "#999999",
         "divlineColor": "#999999",
         "divLineIsDashed": "1",
         "showAlternateHGridColor": "0",
         "subcaptionFontBold": "0",
         "subcaptionFontSize": "14"
     },
     data:[{
         label: "Home",
         value: "100"
     },
     {
         label: "Cricket",
         value: "56"
     },
     {
         label: "Movies",
         value: "70"
     },
     {
         label: "Fantasy Cricket",
         value: "47"
     }]
   }

   $scope.visitsByCountry = {
       chart: {
           caption: "Visits By Country",
           subcaption: "In Percentage",
           startingangle: "120",
           showlabels: "0",
           showlegend: "1",
           enablemultislicing: "0",
           slicingdistance: "15",
           showpercentvalues: "1",
           showpercentintooltip: "0",
           theme: "fint"
       },
       data: [
           {
               label: "India",
               value: "235"
           },
           {
               label: "Canada",
               value: "15"
           },
           {
               label: "United States",
               value: "3"
           }
       ]
   }
});