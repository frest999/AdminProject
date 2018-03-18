const ReportChart = {
  chart: {
    type: 'spline',
    height: '350',

  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    tickInterval: 2,
    tickWidth: 0,
    gridLineWidth: 1,
    categories: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
    labels: {
      align: 'center',
      x: -25,
      y: 25
    }
},
  yAxis: {

    title: {
      text: ''
    },
    labels: {
      format: '{value}'
    },

  },
  legend: {
    enabled: false
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false
      }
    },
  },
  credits: {
    enabled: false,
  },
  series: [{
    name: 'Report value',
    data: []
  }]
};

export default ReportChart;