const ActiveUserChart = {
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
    color: {
      linearGradient: { x1: 0, x2: 1, y1: 0, y2: 1},
      stops: [
        [0, '#5783fe'],
        [1, '#ff3a76']
      ]
    },

    name: 'Active',
    data: []
  }]
};

export default ActiveUserChart;