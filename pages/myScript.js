app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http) {
  $scope.searchKeyWord = ""
  $scope.search = function() {
    console.log($scope.searchKeyWord)
    var query = $scope.searchKeyWord
      $http.get('api / search ? q = ' + query)
        .success(function(data) {
      // data = {"1":{"year":2004,"month":0,"day":1,"v":6.0},"2":{"year":2004,"month":1,"day":1,"v":6.0},"3":{"year":2004,"month":2,"day":1,"v":5.0},"4":{"year":2004,"month":3,"day":1,"v":5.0},"5":{"year":2004,"month":4,"day":1,"v":5.0},"6":{"year":2004,"month":5,"day":1,"v":5.0},"7":{"year":2004,"month":6,"day":1,"v":5.0},"8":{"year":2004,"month":7,"day":1,"v":5.0},"9":{"year":2004,"month":8,"day":1,"v":6.0},"10":{"year":2004,"month":9,"day":1,"v":6.0},"11":{"year":2004,"month":10,"day":1,"v":6.0},"12":{"year":2004,"month":11,"day":1,"v":5.0},"13":{"year":2005,"month":0,"day":1,"v":5.0},"14":{"year":2005,"month":1,"day":1,"v":5.0},"15":{"year":2005,"month":2,"day":1,"v":5.0},"16":{"year":2005,"month":3,"day":1,"v":5.0},"17":{"year":2005,"month":4,"day":1,"v":5.0},"18":{"year":2005,"month":5,"day":1,"v":5.0},"19":{"year":2005,"month":6,"day":1,"v":5.0},"20":{"year":2005,"month":7,"day":1,"v":4.0},"21":{"year":2005,"month":8,"day":1,"v":4.0},"22":{"year":2005,"month":9,"day":1,"v":5.0},"23":{"year":2005,"month":10,"day":1,"v":4.0},"24":{"year":2005,"month":11,"day":1,"v":5.0},"25":{"year":2006,"month":0,"day":1,"v":5.0},"26":{"year":2006,"month":1,"day":1,"v":4.0},"27":{"year":2006,"month":2,"day":1,"v":5.0},"28":{"year":2006,"month":3,"day":1,"v":5.0},"29":{"year":2006,"month":4,"day":1,"v":5.0},"30":{"year":2006,"month":5,"day":1,"v":4.0},"31":{"year":2006,"month":6,"day":1,"v":4.0},"32":{"year":2006,"month":7,"day":1,"v":4.0},"33":{"year":2006,"month":8,"day":1,"v":5.0},"34":{"year":2006,"month":9,"day":1,"v":5.0},"35":{"year":2006,"month":10,"day":1,"v":5.0},"36":{"year":2006,"month":11,"day":1,"v":4.0},"37":{"year":2007,"month":0,"day":1,"v":4.0},"38":{"year":2007,"month":1,"day":1,"v":4.0},"39":{"year":2007,"month":2,"day":1,"v":4.0},"40":{"year":2007,"month":3,"day":1,"v":4.0},"41":{"year":2007,"month":4,"day":1,"v":4.0},"42":{"year":2007,"month":5,"day":1,"v":4.0},"43":{"year":2007,"month":6,"day":1,"v":4.0},"44":{"year":2007,"month":7,"day":1,"v":5.0},"45":{"year":2007,"month":8,"day":1,"v":4.0},"46":{"year":2007,"month":9,"day":1,"v":4.0},"47":{"year":2007,"month":10,"day":1,"v":5.0},"48":{"year":2007,"month":11,"day":1,"v":4.0},"49":{"year":2008,"month":0,"day":1,"v":4.0},"50":{"year":2008,"month":1,"day":1,"v":4.0},"51":{"year":2008,"month":2,"day":1,"v":4.0},"52":{"year":2008,"month":3,"day":1,"v":4.0},"53":{"year":2008,"month":4,"day":1,"v":6.0},"54":{"year":2008,"month":5,"day":1,"v":4.0},"55":{"year":2008,"month":6,"day":1,"v":4.0},"56":{"year":2008,"month":7,"day":1,"v":4.0},"57":{"year":2008,"month":8,"day":1,"v":5.0},"58":{"year":2008,"month":9,"day":1,"v":4.0},"59":{"year":2008,"month":10,"day":1,"v":4.0},"60":{"year":2008,"month":11,"day":1,"v":4.0},"61":{"year":2009,"month":0,"day":1,"v":4.0},"62":{"year":2009,"month":1,"day":1,"v":4.0},"63":{"year":2009,"month":2,"day":1,"v":5.0},"64":{"year":2009,"month":3,"day":1,"v":4.0},"65":{"year":2009,"month":4,"day":1,"v":5.0},"66":{"year":2009,"month":5,"day":1,"v":5.0},"67":{"year":2009,"month":6,"day":1,"v":4.0},"68":{"year":2009,"month":7,"day":1,"v":5.0},"69":{"year":2009,"month":8,"day":1,"v":5.0},"70":{"year":2009,"month":9,"day":1,"v":4.0},"71":{"year":2009,"month":10,"day":1,"v":5.0},"72":{"year":2009,"month":11,"day":1,"v":4.0},"73":{"year":2010,"month":0,"day":1,"v":4.0},"74":{"year":2010,"month":1,"day":1,"v":4.0},"75":{"year":2010,"month":2,"day":1,"v":4.0},"76":{"year":2010,"month":3,"day":1,"v":4.0},"77":{"year":2010,"month":4,"day":1,"v":4.0},"78":{"year":2010,"month":5,"day":1,"v":4.0},"79":{"year":2010,"month":6,"day":1,"v":4.0},"80":{"year":2010,"month":7,"day":1,"v":5.0},"81":{"year":2010,"month":8,"day":1,"v":5.0},"82":{"year":2010,"month":9,"day":1,"v":4.0},"83":{"year":2010,"month":10,"day":1,"v":5.0},"84":{"year":2010,"month":11,"day":1,"v":5.0},"85":{"year":2011,"month":0,"day":1,"v":4.0},"86":{"year":2011,"month":1,"day":1,"v":4.0},"87":{"year":2011,"month":2,"day":1,"v":5.0},"88":{"year":2011,"month":3,"day":1,"v":4.0},"89":{"year":2011,"month":4,"day":1,"v":4.0},"90":{"year":2011,"month":5,"day":1,"v":4.0},"91":{"year":2011,"month":6,"day":1,"v":4.0},"92":{"year":2011,"month":7,"day":1,"v":4.0},"93":{"year":2011,"month":8,"day":1,"v":4.0},"94":{"year":2011,"month":9,"day":1,"v":4.0},"95":{"year":2011,"month":10,"day":1,"v":4.0},"96":{"year":2011,"month":11,"day":1,"v":4.0},"97":{"year":2012,"month":0,"day":1,"v":4.0},"98":{"year":2012,"month":1,"day":1,"v":4.0},"99":{"year":2012,"month":2,"day":1,"v":4.0},"100":{"year":2012,"month":3,"day":1,"v":5.0},"101":{"year":2012,"month":4,"day":1,"v":5.0},"102":{"year":2012,"month":5,"day":1,"v":5.0},"103":{"year":2012,"month":6,"day":1,"v":5.0},"104":{"year":2012,"month":7,"day":1,"v":5.0},"105":{"year":2012,"month":8,"day":1,"v":5.0},"106":{"year":2012,"month":9,"day":1,"v":5.0},"107":{"year":2012,"month":10,"day":1,"v":6.0},"108":{"year":2012,"month":11,"day":1,"v":5.0},"109":{"year":2013,"month":0,"day":1,"v":6.0},"110":{"year":2013,"month":1,"day":1,"v":5.0},"111":{"year":2013,"month":2,"day":1,"v":5.0},"112":{"year":2013,"month":3,"day":1,"v":5.0},"113":{"year":2013,"month":4,"day":1,"v":5.0},"114":{"year":2013,"month":5,"day":1,"v":5.0},"115":{"year":2013,"month":6,"day":1,"v":4.0},"116":{"year":2013,"month":7,"day":1,"v":5.0},"117":{"year":2013,"month":8,"day":1,"v":5.0},"118":{"year":2013,"month":9,"day":1,"v":6.0},"119":{"year":2013,"month":10,"day":1,"v":5.0},"120":{"year":2013,"month":11,"day":1,"v":5.0},"121":{"year":2014,"month":0,"day":1,"v":7.0},"122":{"year":2014,"month":1,"day":1,"v":6.0},"123":{"year":2014,"month":2,"day":1,"v":5.0},"124":{"year":2014,"month":3,"day":1,"v":5.0},"125":{"year":2014,"month":4,"day":1,"v":5.0},"126":{"year":2014,"month":5,"day":1,"v":15.0},"127":{"year":2014,"month":6,"day":1,"v":13.0},"128":{"year":2014,"month":7,"day":1,"v":50.0},"129":{"year":2014,"month":8,"day":1,"v":65.0},"130":{"year":2014,"month":9,"day":1,"v":38.0},"131":{"year":2014,"month":10,"day":1,"v":23.0},"132":{"year":2014,"month":11,"day":1,"v":19.0},"133":{"year":2015,"month":0,"day":1,"v":28.0},"134":{"year":2015,"month":1,"day":1,"v":59.0},"135":{"year":2015,"month":2,"day":1,"v":30.0},"136":{"year":2015,"month":3,"day":1,"v":21.0},"137":{"year":2015,"month":4,"day":1,"v":21.0},"138":{"year":2015,"month":5,"day":1,"v":22.0},"139":{"year":2015,"month":6,"day":1,"v":22.0},"140":{"year":2015,"month":7,"day":1,"v":17.0},"141":{"year":2015,"month":8,"day":1,"v":20.0},"142":{"year":2015,"month":9,"day":1,"v":18.0},"143":{"year":2015,"month":10,"day":1,"v":100.0}}
          google.setOnLoadCallback($scope.drawBackgroundColor(data));
        })
        .error(function(data) {
          console.log(data)
        })
  }
  $scope.drawBackgroundColor = function(dataset) {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', 'Trend Index');

    $.each(dataset, function(i, d) {
      var year = d.year;
      var month = d.month;
      var day = d.day;
      var trendVal = d.v;
      data.addRows([
        [new Date(year, month, day), trendVal]
      ]);
    });

    var options = {
      'title': $scope.searchKeyWord + ' on Google trends',
      'height': 400,
      hAxis: {
        title: 'Time',
        format: 'M/d/yy'
      },
      vAxis: {
        title: 'Trend Index'
      },
      backgroundColor: 'inherit',
      padding: '80px',
      pointSize: 3,
      legend: {
        position: 'bottom'
      }
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
