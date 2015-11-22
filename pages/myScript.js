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
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Trend Index'
    },
    backgroundColor: 'inherit',
    padding: '80px'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  function selectHandler() {
    // event handler for point selection
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var value = data.getValue(selectedItem.row, selectedItem.column);
      alert('The user selected ' + value);
    }
  }
  
  google.visualization.events.addListener(chart, 'select', selectHandler);
  chart.draw(data, options);
}
