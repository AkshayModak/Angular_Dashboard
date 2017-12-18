var myApp = angular.module("dashboardModule", ["ng-fusioncharts", "ui.bootstrap", "ngRoute"]);

/* Generic Functions */
var datePickerFunction = function($scope) {
		console.log("===Inside datePickerFunction===");

    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };
}

var getMonthDescription = function(month_index) {
		var month = [];

		month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[month_index];
}

var formatDate = function(date_format, dateObj) {
		if (date_format === ("MMMM-dd-yyyy")) {
				return getMonthDescription(dateObj.getMonth()) + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
		}
		if (date_format === "tt") {
				return dateObj.getHours() + ":" + dateObj.getMinutes();
		}
}

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

myApp.controller("cricketController", function($scope, $uibModal, $log, $document) {

			$scope.remove = false;

			$scope.removeSeries = function() {
					console.log("===remove Series======");
					$scope.remove = !$scope.remove;
			}

			datePickerFunction($scope);

			homeList = [];
			homeList.push("India");
			homeList.push("Australia");

			againstList = [];
			againstList.push("England");
			againstList.push("Australia");

			countryList = [];
			countryList.push("Australia");
			countryList.push("England");
			countryList.push("South Africa");
			countryList.push("India");
			countryList.push("New Zealand");
			countryList.push("West Indies");

			matchTypeList = [];
			matchTypeList.push("ODI");
			matchTypeList.push("TEST");
			matchTypeList.push("T20");

			seriesList = [];
			seriesList.push("India in West Indies");
			seriesList.push("Australia in India");
			seriesList.push("South Africa in New Zealand");
			seriesList.push("The Ashes");
			seriesList.push("Indian Premier League");

			$scope.createNewCricket = function() {
					$scope.open(null);
			}

			var to_date = new Date("2018-01-26T18:30:00.000+0530");
			var from_date = new Date("2017-12-15T18:30:00.000+0530");
			var time = new Date("2017-12-14T18:30:00.000+0530");

			formatDate("dd-MM-yyyy", to_date);

      $scope.cricketList = [
        {home: "India", against: "Australia", stadium: "Holkar Stadium", city: "Indore", country: "India", match: "1st",
          type: "TEST", series: "The Ashes", from: formatDate("MMMM-dd-yyyy", from_date), to: formatDate("MMMM-dd-yyyy", to_date), time: formatDate("tt", time),
          homeList: homeList, againstList: againstList, countryList: countryList, matchTypeList: matchTypeList, seriesList: seriesList
        },
        {home: "India", against: "Australia", stadium: "Holkar Stadium", city: "Indore", country: "India", match: "1st",
                  type: "TEST", series: "The Ashes", from: formatDate("MMMM-dd-yyyy", from_date), to: formatDate("MMMM-dd-yyyy", to_date), time: formatDate("tt", time),
                  homeList: homeList, againstList: againstList, countryList: countryList, matchTypeList: matchTypeList, seriesList: seriesList
        }
      ]











      var $ctrl = this;
        $ctrl.items = ['item1', 'item2', 'item3'];

        animationsEnabled = true;

        $scope.open = function (_cricket) {
        console.log(_cricket);
          paramList = [
            { params: _cricket, requestName: "requestname" }
          ];
          var modalInstance = $uibModal.open({
            animation: animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
              items: function () {
                return paramList;
              },
            }
          });
        };











});

myApp.controller('ModalInstanceCtrl', function ($uibModalInstance, $uibModalStack, items, $scope) {
		$scope.paramData = items[0].params;

		$scope.ok = function(paramData) {
				console.log(paramData);
		}

		$scope.cancel = function () {
		  $uibModalInstance.close();
		};
		datePickerFunction($scope);
});

myApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      controller: "dashboardController",
      templateUrl : "includes/dashboard.html"
    })
    .when("/cricket", {
        controller: "cricketController",
        templateUrl : "includes/cricket.html"
    })
    .when("/movies", {
        controller: "moviesController",
        templateUrl : "includes/movies.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});