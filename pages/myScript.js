$(document).ready(function() {
  $("#searchBtn").click(function() {
    var query = $("#searchInput").val();
    if (query === ""){
      alert("Please key in your keywords");
    } else {
      console.log(query);
      $.ajax({
        url:"api/search?q="+query
      }).done(function(data){
        google.setOnLoadCallback(drawBackgroundColor(data));
      });
    }
  });
});

var searchKeyWord = "isis";

google.load('visualization', '1', {
  packages: ['corechart', 'line']
});

function drawBackgroundColor(dataset) {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Time');
  data.addColumn('number', 'Trend Index');

  dataset.forEach(function(d){
    var year = d.year;
    var month = d.month;
    var day = d.day;
    var trendVal = d.v;
    data.addRows([new Date(year, month, day), trendVal]);
  });

  var options = {
    'title': 'Your search on Google trends',
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
