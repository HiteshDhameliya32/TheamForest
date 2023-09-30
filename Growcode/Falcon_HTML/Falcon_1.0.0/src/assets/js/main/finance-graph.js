// @charset "UTF-8";
/*!
 * Finance Graph
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

$(function () {
  Highcharts.setOptions({
    colors: ['#354886'],
    chart: {
      style: {
        color: '#fff',
      },
    },
  });
  let chart = $('#graph-section').highcharts({
    chart: {
      type: 'column',
      backgroundColor: 'white',
    },
    title: {
      text: 'Weekly Financial Report',
      style: {
        color: 'black',
      },
    },
    xAxis: {
      tickWidth: 0,
      labels: {
        style: {
          color: 'black',
        },
      },
      categories: [
        'Dec 1',
        'Dec 2',
        'Dec 3',
        'Dec 4',
        'Dec 5',
        'Dec 6',
        'Dec 7',
      ],
    },
    yAxis: {
      gridLineWidth: 0.5,
      gridLineDashStyle: 'dash',
      gridLineColor: 'black',
      title: {
        text: '',
        style: {
          color: '$black',
        },
      },
      labels: {
        formatter: function () {
          return '$' + Highcharts.numberFormat(this.value, 0, '', ',');
        },
        style: {
          color: 'black',
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      valuePrefix: '$',
    },
    plotOptions: {
      column: {
        borderRadius: 2,
        pointPadding: 0,
        groupPadding: 0.1,
      },
    },
    series: [
      {
        name: 'Revenue',
        data: [2200, 2800, 2300, 1700, 2000, 1200, 1400],
      },
    ],
  });
});
