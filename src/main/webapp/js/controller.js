var myApp = angular.module("dashboardModule", ["ng-fusioncharts", "ui.bootstrap", "ngRoute"]);

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

myApp.controller("sidebarController", function($scope) {
    $scope.showNavDropdown = false;
});

myApp.controller("navbarController", function($scope) {
    $scope.toggleSidebar = function() {
        jQuery("#side-bar").toggleClass("active");
    }

    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
});

myApp.controller("dashboardController", function($scope, $rootScope, $timeout) {
    $rootScope.$on('$includeContentLoaded', function() {
        numberLoader();
    });

	 $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;

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

myApp.controller("cricketController", function($scope) {
		$scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function() {
        $scope.dt = null;
      };

      $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
      };

      $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
      };

      // Disable weekend selection
      function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }

      $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
      };

      $scope.toggleMin();

      $scope.open1 = function() {
        $scope.popup1.opened = true;
      };

      $scope.open2 = function() {
        $scope.popup2.opened = true;
      };

      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];

      $scope.popup1 = {
        opened: false
      };

      $scope.popup2 = {
        opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 1);
      $scope.events = [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];

      function getDayClass(data) {
        var date = data.date,
          mode = data.mode;
        if (mode === 'day') {
          var dayToCheck = new Date(date).setHours(0,0,0,0);

          for (var i = 0; i < $scope.events.length; i++) {
            var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
              return $scope.events[i].status;
            }
          }
        }

        return '';
      }
});

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      controller: "dashboardController",
      templateUrl : "includes/dashboard.html"
    })
    .when("/cricket", {
        controller: "cricketController",
        templateUrl : "includes/tables.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});