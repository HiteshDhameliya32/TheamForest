// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

$(document).ready(function() {
    var sparklineLogin = function() {
        $("#visit-chart").sparkline([0, 7, 5, 12, 6, 10, 8, 5], {
            type: "bar",
            height: "30",
            barWidth: "4",
            resize: true,
            barSpacing: "5",
            barColor: "#0d6efd",
        });

        $("#page-view-chart").sparkline([0, 4, 7, 9, 12, 10, 2, 6], {
            type: "bar",
            height: "30",
            barWidth: "4",
            resize: true,
            barSpacing: "5",
            barColor: "#dc3545",
        });

        $("#unique-chart").sparkline([0, 7, 9, 12, 6, 12, 7, 5], {
            type: "bar",
            height: "30",
            barWidth: "4",
            resize: true,
            barSpacing: "5",
            barColor: "#ffc107",
        });

        $("#bounce-chart").sparkline([0, 4, 8, 5, 12, 9, 11, 7], {
            type: "bar",
            height: "30",
            barWidth: "4",
            resize: true,
            barSpacing: "5",
            barColor: "#0dcaf0",
        });

        $("#visit-area-chart").sparkline([0, 3, 2, 4, 7, 8, 7, 8, 6, 5, 8, 2], {
            type: "line",
            width: "100%",
            height: "50",
            lineColor: "#0d6efd",
            fillColor: "#0d6efd",
            maxSpotColor: "#0d6efd",
            highlightLineColor: "rgba(0, 0, 0, 0.2)",
            highlightSpotColor: "#000",
        });

        $("#site-traffic-area-chart").sparkline([0, 2, 6, 8, 6, 4, 2, 3, 5, 8, 4, 8], {
            type: "line",
            width: "100%",
            height: "50",
            lineColor: "#dc3545",
            fillColor: "#dc3545",
            minSpotColor: "#dc3545",
            highlightLineColor: "rgba(0, 0, 0, 0.2)",
            highlightSpotColor: "#000",
        });

        $("#site-visit-area-chart").sparkline([2, 4, 4, 6, 8, 5, 6, 4, 8, 6, 6, 2], {
            type: "line",
            width: "100%",
            height: "50",
            lineColor: "#0dcaf0",
            fillColor: "#0dcaf0",
            maxSpotColor: "#0dcaf0",
            highlightLineColor: "rgba(0, 0, 0, 0.2)",
            highlightSpotColor: "#000",
        });

        $("#bar-chart").sparkline(
            [3, 5, 4, 7, 12, 10, 7, 9, 5, 10, 6, 9, 4, 7], {
                type: "bar",
                height: "200",
                barWidth: 10,
                barSpacing: 7,
                barColor: "#0d6efd",
            }
        );

        $("#pie-chart").sparkline([45, 35, 20], {
            type: "pie",
            height: "200",
            resize: true,
            sliceColors: ["#0d6efd", "#dc3545", "#ffc107"],
        });

        $("#composite-bar-chart").sparkline([4, 7, 3, 10, 8, 10, 6, 9, 5, 7, 9], {
            type: "bar",
            height: "200",
            barWidth: "10",
            resize: true,
            barSpacing: "7",
            barColor: "#0dcaf0",
        });
        $("#composite-bar-chart").sparkline([4, 7, 3, 10, 8, 10, 6, 9, 5, 7, 9], {
            type: "line",
            height: "200",
            lineColor: "#0dcaf0",
            fillColor: "transparent",
            composite: true,
            highlightLineColor: "rgba(0,0,0,.1)",
            highlightSpotColor: "rgba(0,0,0,.2)",
        });

        $("#line-chart1").sparkline([18, 28, 60, 32, 42, 66, 48, 38, 22], {
            type: "line",
            width: "100%",
            height: "200",
            chartRangeMax: 50,
            resize: true,
            lineColor: "#0d6efd",
            fillColor: "#0d6efd4d",
            highlightLineColor: "rgba(0,0,0,.1)",
            highlightSpotColor: "rgba(0,0,0,.2)",
        });
        $("#line-chart1").sparkline([0, 18, 16, 22, 18, 11, 8, 15, 0], {
            type: "line",
            width: "100%",
            height: "200",
            chartRangeMax: 40,
            lineColor: "#0dcaf0",
            fillColor: "#0dcaf04d",
            composite: true,
            resize: true,
            highlightLineColor: "rgba(0,0,0,.1)",
            highlightSpotColor: "rgba(0,0,0,.2)",
        });

        $("#color-chart").sparkline(
            [5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 9, 4, 7], {
                type: "bar",
                height: "200",
                barWidth: "10",
                barSpacing: "10",
                barColor: "#0d6efd",
            }
        );

        $("#line-chart2").sparkline(
            [0, 8, 38, 42, 52, 50, 49, 26, 35, 48, 52, 12, 6], {
                type: "line",
                width: "100%",
                height: "200",
                lineColor: "#fff",
                fillColor: "transparent",
                spotColor: "#fff",
                minSpotColor: undefined,
                maxSpotColor: undefined,
                highlightSpotColor: undefined,
                highlightLineColor: undefined,
            }
        );

    };
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();
});