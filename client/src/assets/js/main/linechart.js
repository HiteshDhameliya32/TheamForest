// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

// Dashboard 3 chart
const loadGradientChart = (chartId, data, series, gradient = null, colors = null, height = 50) => {

  var options = {
    series: [{
      name: 'series1',
      data: [1, 5, 10, 20, 42, 2, 30, 31, 0, 28, 51, 42, 24, 0, 31, 20, 2, 51, 42, 2, 30, 31, 40, 28, 1, 42, 24, 0],
    }],
    chart: {
      type: "line",
      width: 170,
      height: height,
      sparkline: {
        enabled: !0
      }
    },
    colors: colors || ["#fff"],
    fill: {
      type: gradient ? "gradient" : "solid",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 1.45,
        opacityTo: .10,
        gradientToColors: ["#fff"],
        stops: gradient ? gradient : [0,0,0]
      }
    },
    stroke: {
      curve: "smooth",
      width: 1
    },
    series: [{
      name: [series],
      data: data
    }],
    tooltip: {
      fixed: {
        enabled: !1
      },
      x: {
        show: !1
      },
      y: {
        title: {
          formatter: function (e) {
            return ""
          }
        }
      },
      marker: {
        show: !1
      }
    },
    responsive: [{
      breakpoint: 567,
      options: {
        chart: {
          width: 100,
        },
      },
    }]
  };

  var chart = new ApexCharts(document.querySelector(chartId), options);
  chart.render();
}

loadGradientChart("#line1", [1, 5, 10, 20, 42, 2, 30, 31, 0, 28, 51, 42, 24, 0, 31, 20, 2, 51, 42, 2, 30, 31, 40, 28, 1, 42, 24, 0], 'series1', [0, 100, 150, 498],);

loadGradientChart("#line2", [0, 15, 1, 20, 22, 2, 30, 31, 0, 28, 41, 4, 2, 10, 31, 20, 2, 51, 42, 2, 30, 31, 40, 28, 1, 42, 24, 0], 'series2', [1, 100, 100],);

loadGradientChart("#line3", [2, 0, 60, 20, 58, 2, 30, 31, 0, 28, 41, 4, 2, 10, 31, 20, 2, 51, 42, 2, 30, 31, 40, 28, 1, 42, 24, 0], 'series3', [1, 100, 100],);



// chart-4

var options = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      }
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  fill: {
    opacity: 1
  },
  colors: ["#c7d9ff", "#4382e1"],
};

var chart = new ApexCharts(document.querySelector("#dashboard-card-04"), options);
chart.render();

// chart-5

var options = {
  series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  colors: ["#c7d9ff", "#4382e1"],
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  legend: {
    show: false,
  }
};

var chart = new ApexCharts(document.querySelector("#dashboard-card-05"), options);
chart.render();