app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http) {
  $scope.searchKeyWord = ""
  $scope.headlines = []
  $scope.search = function() {
    console.log($scope.searchKeyWord)
    var query = $scope.searchKeyWord
    $http.get('api/search?q=' + query)
      .success(function(data) {
        $scope.headlines = []
        $.each(data, function(i, d) {
          if (d.isPeak) {
            $scope.headlines.push({
              "title": d.docs[0].headline,
              "img": "https://nytimes.com/" + d.docs[0].imageURL,
              "url": d.docs[0].url
            });
          }
        });
        google.setOnLoadCallback($scope.drawBackgroundColor(data));
      })
      .error(function(data) {
        console.log(data)
      })
  }
  $scope.drawBackgroundColor = function(dataset) {

    res = [
      ['Time', 'Trend Index', {
        'type': 'string',
        'role': 'style'
      }]
    ]

    $.each(dataset, function(i, d) {
      var year = d.year;
      var month = d.month;
      var day = d.day;
      var trendVal = d.v;
      var isPeak = d.isPeak;
      console.log(year, month, day, trendVal, isPeak)
      res.push([new Date(year, month, day), trendVal, isPeak ? 'point {size:5; shape-type:star; visible:true}' : null])
    });
    var data = google.visualization.arrayToDataTable(res)

    var options = {
      'title': $scope.searchKeyWord + ' on Google trends',
      'titleTextStyle': {
        color: '#d9d9d9',
        position: 'center'
      },
      'height': 300,
      hAxis: {
        format: 'M/d/yy',
        textStyle: {
          color: '#bfbfbf'
        },
        gridlines: {
          color: '#333'
        }
      },
      vAxis: {
        gridlines: {
          color: '#333'
        },
        textStyle: {
          color: '#333'
        }
      },
      backgroundColor: '#333',
      series: {
        0: {
          'color': '#ff9700'
        }
      },
      padding: '80px',
      legend: 'none'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    function selectHandler() {
      // event handler for point selection
      var selectedItem = chart.getSelection()[0];

      if (selectedItem) {
        var date = data.getValue(selectedItem.row, 0).toDateString()
        console.log(date);
        var query = encodeURIComponent(searchKeyWord + " " + date)
        $.ajax({
          url: "http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=" + query
        }).done(function(data) {
          console.log(data);
        });
        alert('The user selected ' + date);
      }
    }
    google.visualization.events.addListener(chart, 'select', selectHandler);
    chart.draw(data, options);
  }
});

google.load('visualization', '1', {
  packages: ['corechart', 'line']
});
