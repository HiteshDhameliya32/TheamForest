// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

$(function() {
    "use strict";
    Morris.Area({
        element: "product-chart",
        data: [{
            period: "2015",
            ProductA: 20,
            ProductB: 60,
            ProductC: 40,
        }, {
            period: "2016",
            ProductA: 100,
            ProductB: 80,
            ProductC: 50,
        }, {
            period: "2017",
            ProductA: 120,
            ProductB: 110,
            ProductC: 90,
        }, {
            period: "2018",
            ProductA: 140,
            ProductB: 160,
            ProductC: 140,
        }, {
            period: "2019",
            ProductA: 180,
            ProductB: 140,
            ProductC: 120,
        }, {
            period: "2020",
            ProductA: 200,
            ProductB: 150,
            ProductC: 100,
        }, {
            period: "2021",
            ProductA: 230,
            ProductB: 250,
            ProductC: 210,
        }, ],
        xkey: "period",
        ykeys: ["ProductA", "ProductB", "ProductC"],
        labels: ["Product A", "Product B", "Product C"],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors: ["#0d6efd", "#0dcaf0", "#198754"],
        behaveLikeLine: true,
        gridLineColor: "#e0e0e0",
        lineWidth: 3,
        hideHover: "auto",
        lineColors: ["#0d6efd", "#0dcaf0", "#198754"],
        resize: true,
    });

    Morris.Area({
        element: "visit-chart",
        data: [{
            period: "2015",
            SiteA: 0,
            SiteB: 0,
        }, {
            period: "2016",
            SiteA: 150,
            SiteB: 90,
        }, {
            period: "2017",
            SiteA: 100,
            SiteB: 120,
        }, {
            period: "2018",
            SiteA: 150,
            SiteB: 180,
        }, {
            period: "2019",
            SiteA: 200,
            SiteB: 140,
        }, {
            period: "2020",
            SiteA: 220,
            SiteB: 160,
        }, {
            period: "2021",
            SiteA: 250,
            SiteB: 120,
        }, ],
        xkey: "period",
        ykeys: ["SiteA", "SiteB"],
        labels: ["Site A", "Site B"],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors: ["#dc3545", "#0dcaf0"],
        behaveLikeLine: true,
        gridLineColor: "#e0e0e0",
        lineWidth: 0,
        smooth: false,
        hideHover: "auto",
        lineColors: ["#dc3545", "#0dcaf0"],
        resize: true,
    });

    // LINE CHART
    var line = new Morris.Line({
        element: "line-chart",
        resize: true,
        data: [{
            y: "2019 Q1",
            item1: 2666
        }, {
            y: "2019 Q2",
            item1: 2778
        }, {
            y: "2019 Q3",
            item1: 4912
        }, {
            y: "2019 Q4",
            item1: 3767
        }, {
            y: "2020 Q1",
            item1: 6810
        }, {
            y: "2020 Q2",
            item1: 5670
        }, {
            y: "2020 Q3",
            item1: 4820
        }, {
            y: "2020 Q4",
            item1: 15073
        }, {
            y: "2021 Q1",
            item1: 10687
        }, {
            y: "2021 Q2",
            item1: 8432
        }, ],
        xkey: "y",
        ykeys: ["item1"],
        labels: ["Item 1"],
        gridLineColor: "#eef0f2",
        lineColors: ["#0dcaf0"],
        lineWidth: 1,
        hideHover: "auto",
    });
    // Morris donut chart

    Morris.Donut({
        element: "donut-chart",
        data: [{
            label: "Point A",
            value: 55,
        }, {
            label: "Point B",
            value: 25,
        }, {
            label: "Point C",
            value: 20,
        }, ],
        resize: true,
        colors: ["#0dcaf0", "#0d6efd", "#198754"],
    });

    // Morris bar chart
    Morris.Bar({
        element: "bar-chart",
        data: [{
            y: "2015",
            a: 100,
            b: 90,
            c: 60,
        }, {
            y: "2016",
            a: 75,
            b: 65,
            c: 40,
        }, {
            y: "2017",
            a: 50,
            b: 40,
            c: 30,
        }, {
            y: "2018",
            a: 75,
            b: 65,
            c: 40,
        }, {
            y: "2019",
            a: 50,
            b: 40,
            c: 30,
        }, {
            y: "2020",
            a: 75,
            b: 65,
            c: 40,
        }, {
            y: "2021",
            a: 100,
            b: 90,
            c: 40,
        }, ],
        xkey: "y",
        ykeys: ["a", "b", "c"],
        labels: ["A", "B", "C"],
        barColors: ["#0d6efd", "#198754", "#0dcaf0"],
        hideHover: "auto",
        gridLineColor: "#eef0f2",
        resize: true,
    });
    // Extra chart
    Morris.Area({
        element: "extra-area-chart",
        data: [{
            period: "2015",
            ProductA: 0,
            ProductB: 0,
            ProductC: 0,
        }, {
            period: "2016",
            ProductA: 70,
            ProductB: 40,
            ProductC: 15,
        }, {
            period: "2017",
            ProductA: 40,
            ProductB: 80,
            ProductC: 90,
        }, {
            period: "2018",
            ProductA: 80,
            ProductB: 120,
            ProductC: 150,
        }, {
            period: "2019",
            ProductA: 150,
            ProductB: 60,
            ProductC: 100,
        }, {
            period: "2020",
            ProductA: 100,
            ProductB: 50,
            ProductC: 30,
        }, {
            period: "2021",
            ProductA: 20,
            ProductB: 20,
            ProductC: 20,
        }, ],
        lineColors: ["#0d6efd", "#198754", "#0dcaf0"],
        xkey: "period",
        ykeys: ["ProductA", "ProductB", "ProductC"],
        labels: ["Site A", "Site B", "Site C"],
        pointSize: 0,
        lineWidth: 0,
        resize: true,
        fillOpacity: 0.8,
        behaveLikeLine: true,
        gridLineColor: "#e0e0e0",
        hideHover: "auto",
    });
});