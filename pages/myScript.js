app = angular.module('myApp', ['ngAnimate']);
app.controller('MainCtrl', function($scope, $http) {
  $scope.searchKeyWord = ""
  $scope.date=""
  $scope.headlines = []
  $scope.show = {}
  $scope.search = function() {
    console.log($scope.searchKeyWord)
    var query = $scope.searchKeyWord
    $http.get('api/search?q=' + query)
      .success(function(data) {
        // data = {"1":{"year":2004,"month":0,"day":1,"v":6.0,"isPeak":false},"2":{"year":2004,"month":1,"day":1,"v":6.0,"isPeak":false},"3":{"year":2004,"month":2,"day":1,"v":5.0,"isPeak":false},"4":{"year":2004,"month":3,"day":1,"v":5.0,"isPeak":false},"5":{"year":2004,"month":4,"day":1,"v":5.0,"isPeak":false},"6":{"year":2004,"month":5,"day":1,"v":5.0,"isPeak":false},"7":{"year":2004,"month":6,"day":1,"v":5.0,"isPeak":false},"8":{"year":2004,"month":7,"day":1,"v":5.0,"isPeak":false},"9":{"year":2004,"month":8,"day":1,"v":6.0,"isPeak":false},"10":{"year":2004,"month":9,"day":1,"v":6.0,"isPeak":false},"11":{"year":2004,"month":10,"day":1,"v":6.0,"isPeak":false},"12":{"year":2004,"month":11,"day":1,"v":5.0,"isPeak":false},"13":{"year":2005,"month":0,"day":1,"v":5.0,"isPeak":false},"14":{"year":2005,"month":1,"day":1,"v":5.0,"isPeak":false},"15":{"year":2005,"month":2,"day":1,"v":5.0,"isPeak":false},"16":{"year":2005,"month":3,"day":1,"v":5.0,"isPeak":false},"17":{"year":2005,"month":4,"day":1,"v":5.0,"isPeak":false},"18":{"year":2005,"month":5,"day":1,"v":5.0,"isPeak":false},"19":{"year":2005,"month":6,"day":1,"v":5.0,"isPeak":false},"20":{"year":2005,"month":7,"day":1,"v":4.0,"isPeak":false},"21":{"year":2005,"month":8,"day":1,"v":4.0,"isPeak":false},"22":{"year":2005,"month":9,"day":1,"v":5.0,"isPeak":false},"23":{"year":2005,"month":10,"day":1,"v":4.0,"isPeak":false},"24":{"year":2005,"month":11,"day":1,"v":5.0,"isPeak":false},"25":{"year":2006,"month":0,"day":1,"v":5.0,"isPeak":false},"26":{"year":2006,"month":1,"day":1,"v":4.0,"isPeak":false},"27":{"year":2006,"month":2,"day":1,"v":5.0,"isPeak":false},"28":{"year":2006,"month":3,"day":1,"v":5.0,"isPeak":false},"29":{"year":2006,"month":4,"day":1,"v":5.0,"isPeak":false},"30":{"year":2006,"month":5,"day":1,"v":4.0,"isPeak":false},"31":{"year":2006,"month":6,"day":1,"v":4.0,"isPeak":false},"32":{"year":2006,"month":7,"day":1,"v":4.0,"isPeak":false},"33":{"year":2006,"month":8,"day":1,"v":5.0,"isPeak":false},"34":{"year":2006,"month":9,"day":1,"v":5.0,"isPeak":false},"35":{"year":2006,"month":10,"day":1,"v":5.0,"isPeak":false},"36":{"year":2006,"month":11,"day":1,"v":4.0,"isPeak":false},"37":{"year":2007,"month":0,"day":1,"v":4.0,"isPeak":false},"38":{"year":2007,"month":1,"day":1,"v":4.0,"isPeak":false},"39":{"year":2007,"month":2,"day":1,"v":4.0,"isPeak":false},"40":{"year":2007,"month":3,"day":1,"v":4.0,"isPeak":false},"41":{"year":2007,"month":4,"day":1,"v":4.0,"isPeak":false},"42":{"year":2007,"month":5,"day":1,"v":4.0,"isPeak":false},"43":{"year":2007,"month":6,"day":1,"v":4.0,"isPeak":false},"44":{"year":2007,"month":7,"day":1,"v":5.0,"isPeak":false},"45":{"year":2007,"month":8,"day":1,"v":4.0,"isPeak":false},"46":{"year":2007,"month":9,"day":1,"v":4.0,"isPeak":false},"47":{"year":2007,"month":10,"day":1,"v":5.0,"isPeak":false},"48":{"year":2007,"month":11,"day":1,"v":4.0,"isPeak":false},"49":{"year":2008,"month":0,"day":1,"v":4.0,"isPeak":false},"50":{"year":2008,"month":1,"day":1,"v":4.0,"isPeak":false},"51":{"year":2008,"month":2,"day":1,"v":4.0,"isPeak":false},"52":{"year":2008,"month":3,"day":1,"v":4.0,"isPeak":false},"53":{"year":2008,"month":4,"day":1,"v":6.0,"isPeak":false},"54":{"year":2008,"month":5,"day":1,"v":4.0,"isPeak":false},"55":{"year":2008,"month":6,"day":1,"v":4.0,"isPeak":false},"56":{"year":2008,"month":7,"day":1,"v":4.0,"isPeak":false},"57":{"year":2008,"month":8,"day":1,"v":5.0,"isPeak":false},"58":{"year":2008,"month":9,"day":1,"v":4.0,"isPeak":false},"59":{"year":2008,"month":10,"day":1,"v":4.0,"isPeak":false},"60":{"year":2008,"month":11,"day":1,"v":4.0,"isPeak":false},"61":{"year":2009,"month":0,"day":1,"v":4.0,"isPeak":false},"62":{"year":2009,"month":1,"day":1,"v":4.0,"isPeak":false},"63":{"year":2009,"month":2,"day":1,"v":5.0,"isPeak":false},"64":{"year":2009,"month":3,"day":1,"v":4.0,"isPeak":false},"65":{"year":2009,"month":4,"day":1,"v":5.0,"isPeak":false},"66":{"year":2009,"month":5,"day":1,"v":5.0,"isPeak":false},"67":{"year":2009,"month":6,"day":1,"v":4.0,"isPeak":false},"68":{"year":2009,"month":7,"day":1,"v":5.0,"isPeak":false},"69":{"year":2009,"month":8,"day":1,"v":5.0,"isPeak":false},"70":{"year":2009,"month":9,"day":1,"v":4.0,"isPeak":false},"71":{"year":2009,"month":10,"day":1,"v":5.0,"isPeak":false},"72":{"year":2009,"month":11,"day":1,"v":4.0,"isPeak":false},"73":{"year":2010,"month":0,"day":1,"v":4.0,"isPeak":false},"74":{"year":2010,"month":1,"day":1,"v":4.0,"isPeak":false},"75":{"year":2010,"month":2,"day":1,"v":4.0,"isPeak":false},"76":{"year":2010,"month":3,"day":1,"v":4.0,"isPeak":false},"77":{"year":2010,"month":4,"day":1,"v":4.0,"isPeak":false},"78":{"year":2010,"month":5,"day":1,"v":4.0,"isPeak":false},"79":{"year":2010,"month":6,"day":1,"v":4.0,"isPeak":false},"80":{"year":2010,"month":7,"day":1,"v":5.0,"isPeak":false},"81":{"year":2010,"month":8,"day":1,"v":4.0,"isPeak":false},"82":{"year":2010,"month":9,"day":1,"v":4.0,"isPeak":false},"83":{"year":2010,"month":10,"day":1,"v":5.0,"isPeak":false},"84":{"year":2010,"month":11,"day":1,"v":5.0,"isPeak":false},"85":{"year":2011,"month":0,"day":1,"v":4.0,"isPeak":false},"86":{"year":2011,"month":1,"day":1,"v":4.0,"isPeak":false},"87":{"year":2011,"month":2,"day":1,"v":5.0,"isPeak":false},"88":{"year":2011,"month":3,"day":1,"v":4.0,"isPeak":false},"89":{"year":2011,"month":4,"day":1,"v":4.0,"isPeak":false},"90":{"year":2011,"month":5,"day":1,"v":4.0,"isPeak":false},"91":{"year":2011,"month":6,"day":1,"v":4.0,"isPeak":false},"92":{"year":2011,"month":7,"day":1,"v":4.0,"isPeak":false},"93":{"year":2011,"month":8,"day":1,"v":4.0,"isPeak":false},"94":{"year":2011,"month":9,"day":1,"v":4.0,"isPeak":false},"95":{"year":2011,"month":10,"day":1,"v":4.0,"isPeak":false},"96":{"year":2011,"month":11,"day":1,"v":4.0,"isPeak":false},"97":{"year":2012,"month":0,"day":1,"v":4.0,"isPeak":false},"98":{"year":2012,"month":1,"day":1,"v":4.0,"isPeak":false},"99":{"year":2012,"month":2,"day":1,"v":4.0,"isPeak":false},"100":{"year":2012,"month":3,"day":1,"v":5.0,"isPeak":false},"101":{"year":2012,"month":4,"day":1,"v":5.0,"isPeak":false},"102":{"year":2012,"month":5,"day":1,"v":5.0,"isPeak":false},"103":{"year":2012,"month":6,"day":1,"v":5.0,"isPeak":false},"104":{"year":2012,"month":7,"day":1,"v":5.0,"isPeak":false},"105":{"year":2012,"month":8,"day":1,"v":5.0,"isPeak":false},"106":{"year":2012,"month":9,"day":1,"v":5.0,"isPeak":false},"107":{"year":2012,"month":10,"day":1,"v":6.0,"isPeak":false},"108":{"year":2012,"month":11,"day":1,"v":5.0,"isPeak":false},"109":{"year":2013,"month":0,"day":1,"v":6.0,"isPeak":false},"110":{"year":2013,"month":1,"day":1,"v":4.0,"isPeak":false},"111":{"year":2013,"month":2,"day":1,"v":5.0,"isPeak":false},"112":{"year":2013,"month":3,"day":1,"v":5.0,"isPeak":false},"113":{"year":2013,"month":4,"day":1,"v":5.0,"isPeak":false},"114":{"year":2013,"month":5,"day":1,"v":5.0,"isPeak":false},"115":{"year":2013,"month":6,"day":1,"v":4.0,"isPeak":false},"116":{"year":2013,"month":7,"day":1,"v":5.0,"isPeak":false},"117":{"year":2013,"month":8,"day":1,"v":5.0,"isPeak":false},"118":{"year":2013,"month":9,"day":1,"v":6.0,"isPeak":false},"119":{"year":2013,"month":10,"day":1,"v":5.0,"isPeak":false},"120":{"year":2013,"month":11,"day":1,"v":5.0,"isPeak":false},"121":{"year":2014,"month":0,"day":1,"v":7.0,"isPeak":false},"122":{"year":2014,"month":1,"day":1,"v":6.0,"isPeak":false},"123":{"year":2014,"month":2,"day":1,"v":5.0,"isPeak":false},"124":{"year":2014,"month":3,"day":1,"v":5.0,"isPeak":false},"125":{"year":2014,"month":4,"day":1,"v":5.0,"isPeak":false},"126":{"year":2014,"month":5,"day":1,"v":15.0,"isPeak":false},"127":{"year":2014,"month":6,"day":1,"v":13.0,"isPeak":false},"128":{"year":2014,"month":7,"day":1,"v":50.0,"isPeak":false},"129":{"year":2014,"month":8,"day":1,"v":64.0,"isPeak":true,"docs":[{"imageURL":"images/2014/09/10/multimedia/nytm-isis-explainer/nytm-isis-explainer-articleLarge.jpg","headline":"ISIS\u2019 Goals and Tactics Worldwide","url":"http://www.nytimes.com/video/world/middleeast/100000003106592/isis-goals-and-tactics-worldwide.html"},{"imageURL":"images/2014/09/12/multimedia/forn-fighters-explainer/forn-fighters-explainer-articleLarge.jpg","headline":"Stopping Homebound ISIS Fighters","url":"http://www.nytimes.com/video/world/middleeast/100000003110460/isis-foreign-fighters-in-syria.html"},{"imageURL":"images/2010/09/16/opinion/Blow_New/Blow_New-articleLarge.jpg","headline":"ISIS, Deep in the Heart of Texas","url":"http://www.nytimes.com/2014/09/04/opinion/isis-deep-in-the-heart-of-texas.html"}]},"130":{"year":2014,"month":9,"day":1,"v":38.0,"isPeak":false},"131":{"year":2014,"month":10,"day":1,"v":23.0,"isPeak":false},"132":{"year":2014,"month":11,"day":1,"v":19.0,"isPeak":false},"133":{"year":2015,"month":0,"day":1,"v":28.0,"isPeak":false},"134":{"year":2015,"month":1,"day":1,"v":58.0,"isPeak":true,"docs":[{"imageURL":"images/2014/11/17/multimedia/isis-overview/isis-overview-articleLarge.jpg","headline":"The Evolution of ISIS","url":"http://www.nytimes.com/video/world/middleeast/100000003240417/the-evolution-of-isis.html"},{"imageURL":"images/2014/11/01/opinion/friedman-circular/friedman-circular-thumbWide-v2.png","headline":"ISIS Heads to Rome","url":"http://www.nytimes.com/2015/02/25/opinion/thomas-friedman-isis-heads-to-rome.html"},{"imageURL":"images/2015/02/06/opinion/06fri2WEB/06fri2WEB-articleLarge.jpg","headline":"The Spreading Rage at ISIS","url":"http://www.nytimes.com/2015/02/06/opinion/the-spreading-rage-at-isis.html"}]},"135":{"year":2015,"month":2,"day":1,"v":30.0,"isPeak":false},"136":{"year":2015,"month":3,"day":1,"v":21.0,"isPeak":false},"137":{"year":2015,"month":4,"day":1,"v":20.0,"isPeak":false},"138":{"year":2015,"month":5,"day":1,"v":22.0,"isPeak":false},"139":{"year":2015,"month":6,"day":1,"v":21.0,"isPeak":false},"140":{"year":2015,"month":7,"day":1,"v":17.0,"isPeak":false},"141":{"year":2015,"month":8,"day":1,"v":20.0,"isPeak":false},"142":{"year":2015,"month":9,"day":1,"v":18.0,"isPeak":false},"143":{"year":2015,"month":10,"day":1,"v":100.0,"isPeak":true,"docs":[{"imageURL":"images/2015/11/22/world/22CENTCOM1/22CENTCOM1-articleLarge.jpg","headline":"Pentagon Expands Inquiry Into Intelligence on ISIS Surge","url":"http://www.nytimes.com/2015/11/22/us/politics/military-reviews-us-response-to-isis-rise.html"},{"imageURL":"images/2015/11/18/world/18isissideone-web/18isissideone-web-articleLarge.jpg","headline":"How to Beat ISIS: Use Arab Armies to Fight the Group","url":"http://www.nytimes.com/2015/11/18/world/middleeast/how-to-beat-isis-use-arab-armies-to-fight-the-group.html"},{"imageURL":"images/2014/11/01/opinion/brooks-circular/brooks-circular-thumbWide-v2.png","headline":"Hillary Clinton Takes On ISIS","url":"http://www.nytimes.com/2015/11/20/opinion/hillary-clinton-takes-on-isis.html"}]}}

        $scope.headlines = {}
          $.each(data, function(i, d) {
          if (d.isPeak) {
            var res = [];
            $.each(d.docs, function(i, d) {
              res.push({
                "title": d.headline,
                "img": d.imageURL,
                "url": d.url
              })
            })
            var key = d.year + "-" +d.month + "-" + d.day;
            $scope.headlines[key] = {};
            $scope.headlines[key].key = key;
            $scope.headlines[key].contents = res;
            $scope.show[key] = false;
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
      res.push([new Date(year, month, day), trendVal, isPeak ? 'point {size:5; shape-type:star; visible:true}' : null])
    });
    var data = google.visualization.arrayToDataTable(res)

    var options = {
      'title': "#" + $scope.searchKeyWord + ' on Google trends',
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
      padding: '50px',
      legend: 'none',
      animation: {
        duration: 2000,
        easing: 'inAndOut',
        startup: true
      },
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    function selectHandler() {
      // event handler for point selection
      var selectedItem = chart.getSelection()[0];

      if (selectedItem) {
        var date = data.getValue(selectedItem.row, 0);
        var key = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
        $("#"+key).parent().children().addClass("ng-hide");
        $("#"+key).removeClass("ng-hide");
      }
    }
    google.visualization.events.addListener(chart, 'select', selectHandler);
    chart.draw(data, options);
  }
});

google.load('visualization', '1', {
  packages: ['corechart', 'line']
});
