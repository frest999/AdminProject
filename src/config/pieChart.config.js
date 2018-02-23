
const SalesChart = {
      chart: {
        type: 'pie',
        height: '410',

      },
      plotOptions: {
        pie: {
          shadow: false,
          colors: ['#25396e', '#3755a4', '#4164c2', '#4b74e0', '#5584ff'],
          borderWidth: 1,
          borderColor: null
        },
        series: {
          allowPointSelect: true,
        }
      },
      title: {
        text: '',
        verticalAlign: 'middle',
        floating: true,
        x: -65,
        y: 0,
        style: {
          color: '#8492af',
          font: '700 2.25rem "Roboto", sans-serif'
        }
      },
      subtitle: {
        text: 'sales',
        verticalAlign: 'middle',
        floating: true,
        x: -65,
        y: 20,
        style: {
          color: '#8492af',
          font: '300 1.25rem "Roboto", sans-serif'
        }
      },
      legend: {
        align: 'right',
        layout: 'vertical',
        verticalAlign: 'middle',
        itemMarginTop: 10,
        itemMarginBottom: 10
      },
      series: [{
        data: [],
        innerSize: '65%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        },
        name: 'Sales value'
      }],
      credits: {
        enabled: false
      }
    };

export default SalesChart;