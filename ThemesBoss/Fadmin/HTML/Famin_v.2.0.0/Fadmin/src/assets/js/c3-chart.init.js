/*
Template Name: Fadmin - Responsive Bootstrap Admin Dashboard
Author: ThemesBoss
File: Main Js File
*/


"use strict";
$(document).ready(function() {  

    //generating chart 
    var Chart = c3.generate({
        bindto: '#c3-chart',
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250]
            ],
            type: 'bar',
            colors: {
                data1: '#3a80e5',
                data2: '#5490e5',
                data3: '#aecaf2'
            }
            
        }
    });

    // Simple Line Chart
    var xpSimpleLineChart = c3.generate({
        bindto: '#c3-simple-line',
        color: { 
            pattern: [
                "#3a80e5",
                "#b7d3fa"] 
            },
        data: {
            columns: [
                ['SeriesA', 30, 200, 100, 400, 150, 250],
                ['SeriesB', 130, 340, 200, 500, 250, 350]
            ]
        }
    });

    // Spline Chart
    var xpSplineChart = c3.generate({
        bindto: '#c3-spline',
        color: { 
            pattern: [
                "#3a80e5",
                "#b7d3fa"] 
            },
        data: {
            columns: [
                ['SeriesA', 30, 200, 100, 400, 150, 250],
                ['SeriesB', 130, 100, 140, 200, 150, 50]
            ],
            type: 'spline'
        }
    });  

    //combined chart
    var Chart = c3.generate({
        bindto: '#c3-combine-chart',
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220],
                ['data3', 300, 200, 160, 400, 250, 250],
                ['data4', 200, 130, 90, 240, 130, 220],
                ['data5', 130, 120, 150, 140, 160, 150]
            ],
            types: {
                data1: 'bar',
                data2: 'bar',
                data3: 'spline',
                data4: 'line',
                data5: 'bar'
            },
            colors: {
                data1: '#3a80e5',
                data2: '#5490e5',
                data3: '#7ba6e5',
                data4: '#aecaf2',
                data5: '#b7d3fa'
            },
            groups: [
                ['data1','data2']
            ]
        },
        axis: {
            x: {
                type: 'categorized'
            }
        }
    });
    
    //roated chart
    var Chart = c3.generate({
        bindto: '#c3-roated-chart',
        data: {
            columns: [
            ['data1', 30,328, 100, 400, 150, 250],
            ['data2', 50, 80, 10, 40, 28, 98]
            ],
            types: {
            data1: 'bar'
            },
            colors: {
                data1: '#3a80e5',
                data2: '#5490e5'
            },
        },
        axis: {
            rotated: true,
            x: {
            type: 'categorized'
            }
        }
    });

    //stacked chart
    var Chart = c3.generate({
        bindto: '#c3-chart-stacked',
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220]
            ],
            types: {
                data1: 'area-spline',
                data2: 'area-spline'
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            colors: {
                data1: '#3a80e5',
                data2: '#5490e5',
            }
        }
    });
    
    //Donut Chart
    var Chart = c3.generate({
         bindto: '#c3-donut-chart',
        data: {
            columns: [
                ['Apple', 42],
                ['Sony', 35],
                ['Dell', 18]
            ],
            type : 'donut'
        },
        donut: {
            title: "Apple:",
            width: 15,
            label: { 
                show:false
            }
        },
        color: {
            pattern: ['#3a80e5','#5490e5', '#aecaf2']
        }
    });
    
    //Pie Chart
    var Chart = c3.generate({
         bindto: '#c3-pie-chart',
        data: {
            columns: [
                ['Apple', 46],
                ['Sony', 24],
                ['Dell', 30]
            ],
            type : 'pie'
        },
        color: {
            pattern: ['#3a80e5','#5490e5', '#aecaf2']
        },
        pie: {
            label: {
              show: false
            }
        }
    });
    
    //Line regions
    var Chart = c3.generate({
         bindto: '#c3-line-regions',
        data: {
            columns: [
                ['data1', 30, 70, 100, 200, 165, 90],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            regions: {
                'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
                'data2': [{'end':3}]
            },
            colors: {
                data1: '#3a80e5',
                data2: '#5490e5'
            },
        },
        
    });

    //stacked chart
    var Chart = c3.generate({
        bindto: '#c3-chart-stacked',
        data: {
            columns: [
                ['data1', 30, 20, 50, 40, 60, 50],
                ['data2', 200, 130, 90, 240, 130, 220]
            ],
            types: {
                data1: 'area-spline',
                data2: 'area-spline'
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            colors: {
                data1: '#3a80e5',
                data2: '#5490e5',
            }
        }
    });

});