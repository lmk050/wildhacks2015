var searchKeyWord = "isis";

google.load('visualization', '1', {
  packages: ['corechart', 'line']
});
google.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Time');
  data.addColumn('number', 'Trend Index');

  data.addRows([
    [new Date(2014, 3), 33],
    [new Date(2014, 4), 2],
    [new Date(2014, 5), 55]
  ]);

  var options = {
    'title': 'Your search on Google trends',
    'height':400,
    hAxis: {
      title: 'Time',
      format : 'M/d/yy'
    },
    vAxis: {
      title: 'Trend Index'
    },
    backgroundColor: 'inherit',
    padding: '80px',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  function selectHandler() {
    // event handler for point selection
    var selectedItem = chart.getSelection()[0];

    if (selectedItem) {
      var date = data.getValue(selectedItem.row,0).toDateString()
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


// ajax crap
