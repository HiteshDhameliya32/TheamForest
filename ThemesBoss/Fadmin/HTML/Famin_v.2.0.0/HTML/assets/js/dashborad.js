/*
Template Name: Fadmin - Responsive Bootstrap Admin Dashboard
Author: ThemesBoss
File: Main Js File
*/

!function($) {
    "use strict";

    var Dashboard = function() {};

    //creates area chart
    Dashboard.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#f6f8f9',
            lineColors: lineColors
        });
    },

    //creates Bar chart
    Dashboard.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#f6f8f9',
            barSizeRatio: 0.4,
            xLabelAngle: 35,
            barColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            barSize: 0.4,
            resize: true, //defaulted to true
            colors: colors
        });
    },

    Dashboard.prototype.init = function() {

        //creating area chart
        var $areaData = [
            { y: '2009', a: 10, b: 20 },
            { y: '2010', a: 75,  b: 65 },
            { y: '2011', a: 50,  b: 40 },
            { y: '2012', a: 75,  b: 65 },
            { y: '2013', a: 50,  b: 40 },
            { y: '2014', a: 75,  b: 65 },
            { y: '2015', a: 90, b: 60 }
        ];
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#3a80e5', "#abb2e7"]);
    
        //creating bar chart
        var $barData  = [
            { y: '2009', a: 100, b: 90 , c: 40 },
            { y: '2010', a: 75,  b: 65 , c: 20 },
            { y: '2011', a: 50,  b: 40 , c: 50 },
            { y: '2012', a: 75,  b: 65 , c: 95 },
            { y: '2013', a: 50,  b: 40 , c: 22 },
            { y: '2014', a: 75,  b: 65 , c: 56 },
            { y: '2015', a: 100, b: 90 , c: 60 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ['#3a80e5', '#5490e5','#aecaf2']);
        
        //creating donut chart
        var $donutData = [
                {label: "Apple", value: 45},
                {label: "Sony", value: 28},
                {label: "Samsung", value:27},
                {label: "Dell", value:27}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#3a80e5','#5490e5', '#7ba6e5','#aecaf2']);
    },

    //init
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.Dashboard.init();
}(window.jQuery);