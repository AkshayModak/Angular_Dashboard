var myApp = angular.module("dashboardModule", ["chart.js", "ui.bootstrap", "ngRoute", "textAngular"]);

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

myApp.controller("sidebarController", function($scope, $location) {
    $scope.showNavDropdown = false;
    $scope.route = function ( path ) {
      $location.path( path );
    };
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

		$scope.hBarLabels = ['100GB'];
		$scope.hBarSeries = ['Used', 'Unused'];

		$scope.hBarData = [
			[70],
			[30]
		];

		$scope.hBarOptions= {
		   scales: {
		       yAxes: [{
		           display: true
		       }],
		       xAxes: [{
		          ticks: {
                  beginAtZero: true
              },
		          display: true
		       }]
		   }
		}

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


   $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
   $scope.series = ['Visits'];

   $scope.data = [
       [65, 59, 80, 81, 56, 55, 55],
   ];
   $scope.color = [{
      backgroundColor: 'rgba(	36, 42, 60,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointHoverBackgroundColor: 'rgba(148,159,177,1)',
      borderColor: 'rgba(36,42,60,1)',
      pointBorderColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,1)'
   }];


	 $scope.options= {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true,
               },
               display: false
           }],
           xAxes: [{
              display: false
           }]
       }
   }

   $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
   $scope.pieData = [300, 500, 100];

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

myApp.controller("inboxController", function($scope) {
		$scope.showMessage = false;
});

myApp.controller("imageController", function($scope, $uibModal) {
		$scope.showMessage = false;
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

myApp.controller("contentController", function($scope, $uibModal) {
		$scope.createContent = function() {
        $scope.open(null);
    }

    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
    animationsEnabled = true;

    $scope.open = function (_content) {
    paramList = [{ params: _content, requestName: "requestname" }];
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
})

myApp.controller("logsController", function($scope, $uibModal) {

});

myApp.controller("graphsController", function($scope) {

		$scope.pieLabels = ["Android", "IOS", "Windows", "Linux", "Blackberry", "Others"];
      $scope.pieData = ["30", "10", "47", "3", "1", "9"];

    /*$scope.pieColors = [{
        backgroundColor: 'rgb(128,54,144, 1)'
    },
    {
        backgroundColor: 'rgb(0,173,249, 1)'
    },
    {
        backgroundColor: '#DCDCDC'
    },
    {
        backgroundColor: '#46BFBD'
    },
    {
        backgroundColor: '#FDB45C'
    },
    {
        backgroundColor: '#949FB1'
    }];*/

		$scope.hBarChartLabels = ['2006', '2007', '2008', '2009'];
    $scope.hBarChartSeries = ['Series A', 'Series B'];

    $scope.hBarChartData = [
      [28, 48, 40, 19]
    ];
    $scope.hBarChartColor = [{
        backgroundColor: 'rgba(36,42,60,.9)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointHoverBackgroundColor: 'rgba(148,159,177,1)',
        borderColor: 'rgba(36,42,60,0)',
        pointBorderColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,1)'
    }]

		$scope.donutLabels = ["Australia", "India", "Canada", "USA", "South Africa"];
    $scope.donutData = [300, 500, 100, 200, 700];

		$scope.lineChartLabels = ["January", "February", "March", "April", "May", "June", "July"];
		$scope.lineChartSeries = ['Series A', 'Series B'];
		$scope.lineChartData = [
		  [65, 59, 80, 81, 56, 55, 40],
		  [28, 48, 40, 19, 86, 27, 90]
		];
		;
		$scope.lineChartDatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
		$scope.lineChartOptions = {
		  scales: {
		    yAxes: [
		      {
		        id: 'y-axis-1',
		        type: 'linear',
		        display: true,
		        position: 'left'
		      },
		      {
		        id: 'y-axis-2',
		        type: 'linear',
		        display: true,
		        position: 'right'
		      }
		    ]
		  }
		};

		$scope.lineChartColor = [{
        backgroundColor: 'rgba(36,42,60,.5)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointHoverBackgroundColor: 'rgba(148,159,177,1)',
        borderColor: 'rgba(36,42,60,0)',
        pointBorderColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,1)'
    },
    {
        backgroundColor: 'rgba(36,42,60,.5)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointHoverBackgroundColor: 'rgba(148,159,177,1)',
        borderColor: 'rgba(36,42,60,0)',
        pointBorderColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,1)'
    }];
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
    .when("/image", {
        controller: "imageController",
        templateUrl : "includes/image.html"
    })
    .when("/inbox", {
        controller: "inboxController",
        templateUrl : "includes/inbox.html"
    })
    .when("/logs", {
        controller: "logsController",
        templateUrl : "includes/logs.html"
    })
    .when("/content", {
        controller: "contentController",
        templateUrl : "includes/content.html"
    })
    .when("/graphs", {
			  controller: "graphsController",
			  templateUrl : "includes/graphs.html"
		 });
});

myApp.config(function($routeProvider){
  (function (ChartJsProvider) {
    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
  });
})