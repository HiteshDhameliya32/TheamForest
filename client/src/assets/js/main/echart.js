// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

$(function() {
    "use strict";
    /**
     * Start: Basic Line Chart
     * ====================
     */
    var myChart = echarts.init(document.getElementById("basic-line-chart"));
    var option = {
        grid: {
            left: "1%",
            right: "2%",
            bottom: "3%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["IPhone-Max", "IPhone-Mini"],
        },
        color: ["#0d6efd", "#0dcaf0"],
        calculable: true,
        xAxis: [{
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            color: "#999",
        }, ],
        yAxis: [{
            type: "value",
            axisLabel: {
                formatter: "{value} Â°C",
            },
        }, ],
        series: [{
                name: "IPhone-Max",
                type: "line",
                data: [5, 9, 15, 12, 13, 10, 12],
                markPoint: {
                    data: [
                        { type: "max", name: "Max" },
                        { type: "min", name: "Min" },
                    ],
                },
                markLine: {
                    data: [{ type: "average", name: "Average" }],
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: "rgba(0,0,0,0.1)",
                        shadowBlur: 10,
                        shadowOffsetY: 10,
                    },
                },
            },
            {
                name: "IPhone-Mini",
                type: "line",
                data: [3, 0, -2, 5, 8, 4, 1],
                markPoint: {
                    data: [{ name: "Week low", value: -2, xAxis: 1, yAxis: -1.5 }],
                },
                markLine: {
                    data: [{ type: "average", name: "Average" }],
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: "rgba(0,0,0,0.1)",
                        shadowBlur: 10,
                        shadowOffsetY: 10,
                    },
                },
            },
        ],
    };
    myChart.setOption(option);
    /**
     * End: Basic Line Chart
     * ====================
     */

    /**
     * Start: Basic Area Chart
     * ====================
     */
    var bareaChart = echarts.init(document.getElementById("basic-area-chart"));

    var option = {
        grid: {
            left: "1%",
            right: "2%",
            bottom: "3%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["IPhone-Max", "IPhone-Mini"],
        },
        color: ["#0d6efd", "#dc3545"],
        calculable: true,
        xAxis: [{
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        }, ],
        yAxis: [{
            type: "value",
            axisLabel: {
                formatter: "{value} Â°C",
            },
        }, ],
        series: [{
                name: "IPhone-Max",
                type: "line",
                areaStyle: {},
                data: [3, 9, 15, 8, 15, 12, 8],
                markPoint: {
                    data: [
                        { type: "max", name: "Max" },
                        { type: "min", name: "Min" },
                    ],
                },
                markLine: {
                    data: [{ type: "average", name: "Average" }],
                },
            },
            {
                name: "IPhone-Mini",
                type: "line",
                areaStyle: {},
                data: [1, 7, 4, 2, 6, 4, 0],
                markPoint: {
                    data: [{ name: "Week low", value: -2, xAxis: 1, yAxis: -1.5 }],
                },
                markLine: {
                    data: [{ type: "average", name: "Average" }],
                },
            },
        ],
    };
    bareaChart.setOption(option);
    /**
     * End: Basic Area Chart
     * ====================
     */

    /**
     * Start: Stacked Line Chart
     * ====================
     */
    var stackedChart = echarts.init(document.getElementById("stacked-line-chart"));
    var option = {
        grid: {
            left: "1%",
            right: "2%",
            bottom: "3%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", ],
        },
        color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"],
        calculable: true,
        xAxis: [{
            type: "category",
            boundaryGap: false,
            data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ],
        }, ],
        yAxis: [{
            type: "value",
        }, ],
        series: [{
                name: "Item 1",
                type: "line",
                stack: "Total",
                data: [112, 128, 98, 125, 102, 218, 201],
            },
            {
                name: "Item 2",
                type: "line",
                stack: "Total",
                data: [206, 156, 188, 236, 278, 333, 304],
            },
            {
                name: "Item 3",
                type: "line",
                stack: "Total",
                data: [138, 208, 179, 149, 199, 298, 348],
            },
            {
                name: "Item 4",
                type: "line",
                stack: "Total",
                data: [298, 309, 275, 317, 388, 305, 286],
            },
            {
                name: "Item 5",
                type: "line",
                stack: "Total",
                data: [788, 801, 888, 902, 1259, 1298, 1306],
            },
        ],
    };
    stackedChart.setOption(option);
    /**
     * End: Stacked Line Chart
     * ====================
     */

    /**
     * Start: Stacked Area Chart
     * ====================
     */
    var stackedareaChart = echarts.init(document.getElementById("stacked-area-chart"));
    var option = {
        grid: {
            left: "1%",
            right: "2%",
            bottom: "3%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", ],
        },
        color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"],
        calculable: true,
        xAxis: [{
            type: "category",
            boundaryGap: false,
            data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ],
        }, ],
        yAxis: [{
            type: "value",
        }, ],
        series: [{
                name: "Item 1",
                type: "line",
                stack: "Total",
                areaStyle: {},
                data: [112, 128, 98, 125, 102, 218, 201],
            },
            {
                name: "Item 2",
                type: "line",
                stack: "Total",
                areaStyle: {},
                data: [206, 156, 188, 236, 278, 333, 304],
            },
            {
                name: "Item 3",
                type: "line",
                stack: "Total",
                areaStyle: {},
                data: [138, 208, 179, 149, 199, 298, 348],
            },
            {
                name: "Item 4",
                type: "line",
                stack: "Total",
                areaStyle: {},
                data: [298, 309, 275, 317, 388, 305, 286],
            },
            {
                name: "Item 5",
                type: "line",
                stack: "Total",
                areaStyle: {},
                data: [788, 801, 888, 902, 1259, 1298, 1306],
            },
        ],
    };
    stackedareaChart.setOption(option);
    /**
     * End: Stacked Area Chart
     * ====================
     */

    /**
     * Start: Gradiant Line Chart
     * ====================
     */
    var gradiantChart = echarts.init(document.getElementById("gradiant-line-chart"));
    var data = [
        ["2021-11-05", 123],
        ["2021-11-06", 108],
        ["2021-11-07", 128],
        ["2021-11-08", 98],
        ["2021-11-09", 71],
        ["2021-11-10", 75],
        ["2021-11-11", 66],
        ["2021-11-12", 79],
        ["2021-11-13", 102],
        ["2021-11-14", 129],
        ["2021-11-15", 238],
        ["2021-11-16", 127],
        ["2021-11-17", 104],
        ["2021-11-18", 98],
        ["2021-11-19", 288],
        ["2021-11-20", 198],
        ["2021-11-21", 128],
        ["2021-11-22", 139],
        ["2021-11-23", 91],
        ["2021-11-24", 88],
        ["2021-11-25", 79],
        ["2021-11-26", 98],
        ["2021-11-27", 81],
        ["2021-11-28", 88],
        ["2021-11-29", 78],
        ["2021-11-30", 66],
        ["2021-12-01", 80],
        ["2021-12-02", 106],
        ["2021-12-03", 102],
        ["2021-12-04", 92],
        ["2021-12-05", 41],
        ["2021-12-06", 52],
        ["2021-12-07", 96],
        ["2021-12-08", 98],
        ["2021-12-09", 78],
        ["2021-12-10", 80],
        ["2021-12-11", 102],
        ["2021-12-12", 118],
        ["2021-12-13", 128],
        ["2021-12-14", 145],
        ["2021-12-15", 96],
        ["2021-12-16", 78],
        ["2021-12-17", 66],
        ["2021-12-18", 90],
        ["2021-12-19", 71],
        ["2021-12-20", 88],
        ["2021-12-21", 127],
        ["2021-12-22", 69],
        ["2021-12-23", 72],
        ["2021-12-24", 68],
    ];

    var dateList = data.map(function(item) {
        return item[0];
    });
    var valueList = data.map(function(item) {
        return item[1];
    });

    var option = {
        visualMap: [{
                show: false,
                type: "continuous",
                seriesIndex: 0,
                min: 0,
                max: 400,
            },
            {
                show: false,
                type: "continuous",
                seriesIndex: 1,
                dimension: 0,
                min: 0,
                max: dateList.length - 1,
            },
        ],
        title: [{
                left: "center",
                text: "Gradient along the y axis",
            },
            {
                top: "55%",
                left: "center",
                text: "Gradient along the x axis",
            },
        ],
        tooltip: {
            trigger: "axis",
        },
        xAxis: [{
                data: dateList,
            },
            {
                data: dateList,
                gridIndex: 1,
            },
        ],
        yAxis: [{
                splitLine: { show: false },
            },
            {
                splitLine: { show: false },
                gridIndex: 1,
            },
        ],
        grid: [{
                bottom: "60%",
                left: "3%",
                right: "3%",
            },
            {
                top: "60%",
                left: "3%",
                right: "3%",
            },
        ],
        series: [{
                type: "line",
                showSymbol: false,
                data: valueList,
            },
            {
                type: "line",
                showSymbol: false,
                data: valueList,
                xAxisIndex: 1,
                yAxisIndex: 1,
            },
        ],
    };
    gradiantChart.setOption(option);
    /**
     * End: Gradiant Line Chart
     * ====================
     */

    /**
     * Start: Basic Bar Chart
     * ====================
     */
    var myChart = echarts.init(document.getElementById("basic-bar-chart"));
    var option = {
        grid: {
            left: "1%",
            right: "2%",
            bottom: "3%",
            containLabel: true,
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["IPhone-Max", "IPhone-Mini"],
        },
        toolbox: {
            show: true,
            feature: {
                magicType: { show: true, type: ["line", "bar"] },
                restore: { show: true },
                saveAsImage: { show: true },
            },
        },
        color: ["#0d6efd", "#0dcaf0"],
        calculable: true,
        xAxis: [{
            type: "category",
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec", ],
        }, ],
        yAxis: [{
            type: "value",
            borderColor: "rgba(0,0,0,.1)",
        }, ],
        series: [{
                name: "IPhone-Max",
                type: "bar",
                data: [
                    2.7, 3.8, 6.9, 19.5, 22.9, 80.0, 108.8, 130.4, 56.9, 34.2, 9.2, 2.9,
                ],
                markPoint: {
                    data: [
                        { type: "max", name: "Max" },
                        { type: "min", name: "Min" },
                    ],
                },
                markLine: {
                    data: [{ type: "average", name: "Average" }],
                },
            },
            {
                name: "IPhone-Mini",
                type: "bar",
                data: [
                    2.8, 7.0, 11.2, 29.5, 33.8, 66.7, 128.2, 150.5, 72.8, 24.7, 5.5, 2.0,
                ],
                markPoint: {
                    data: [
                        { type: "max", name: "Max" },
                        { type: "min", name: "Min" },
                        { name: "Year minimum", value: 2.0, xAxis: 11, yAxis: 3 },
                    ],
                },
                markLine: {
                    data: [{ type: "average", name: "Average" }],
                },
            },
        ],
    };
    myChart.setOption(option);
    /**
     * End: Basic Bar Chart
     * ====================
     */

    /**
     * Start: Stacked Bar Chart
     * ====================
     */
    var stackedChart = echarts.init(document.getElementById("stacked-bar-chart"));
    var option = {
        grid: {
            x: 40,
            x2: 40,
            y: 45,
            y2: 25,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        legend: {
            data: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", ],
        },
        color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"],
        xAxis: [{
            type: "value",
        }, ],
        yAxis: [{
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        }, ],
        series: [{
                name: "Product 1",
                type: "bar",
                stack: "Total",
                itemStyle: {
                    normal: { label: { show: true, position: "insideRight" } },
                },
                data: [280, 295, 323, 318, 412, 378, 290],
            },
            {
                name: "Product 2",
                type: "bar",
                stack: "Total",
                itemStyle: {
                    normal: { label: { show: true, position: "insideRight" } },
                },
                data: [109, 189, 89, 128, 108, 203, 198],
            },
            {
                name: "Product 3",
                type: "bar",
                stack: "Total",
                itemStyle: {
                    normal: { label: { show: true, position: "insideRight" } },
                },
                data: [118, 159, 179, 201, 268, 301, 309],
            },
            {
                name: "Product 4",
                type: "bar",
                stack: "Total",
                itemStyle: {
                    normal: { label: { show: true, position: "insideRight" } },
                },
                data: [138, 191, 223, 139, 173, 303, 379],
            },
            {
                name: "Product 5",
                type: "bar",
                stack: "Total",
                itemStyle: {
                    normal: { label: { show: true, position: "insideRight" } },
                },
                data: [779, 802, 883, 901, 1196, 1245, 1302],
            },
        ],
    };
    stackedChart.setOption(option);
    /**
     * End: Stacked Bar Chart
     * ====================
     */

    /**
     * Start: Basic Pie chart
     * ====================
     */
    var basicpieChart = echarts.init(document.getElementById("basic-pie-chart"));
    var option = {
        title: {
            text: "Mobile Selling",
            subtext: "Open source information",
            x: "center",
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["LG", "MI", "Samsung", "Motorola", "IPhone"],
        },
        color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"],
        toolbox: {
            show: true,
            orient: "vertical",
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: "Markline switch",
                        markUndo: "Undo markline",
                        markClear: "Clear markline",
                    },
                },
                dataView: {
                    show: true,
                    readOnly: false,
                    title: "View data",
                    lang: ["View chart data", "Close", "Update"],
                },
                magicType: {
                    show: true,
                    title: {
                        pie: "Switch to pies",
                        funnel: "Switch to funnel",
                    },
                    type: ["pie", "funnel"],
                    option: {
                        funnel: {
                            x: "25%",
                            y: "20%",
                            width: "50%",
                            height: "70%",
                            funnelAlign: "left",
                            max: 1279,
                        },
                    },
                },
                restore: {
                    show: true,
                    title: "Restore",
                },
                saveAsImage: {
                    show: true,
                    title: "Same as image",
                    lang: ["Save"],
                },
            },
        },
        calculable: true,
        series: [{
            name: "Mobile",
            type: "pie",
            radius: "70%",
            center: ["50%", "57.5%"],
            data: [
                { value: 228, name: "LG" },
                { value: 554, name: "MI" },
                { value: 209, name: "Samsung" },
                { value: 293, name: "Motorola" },
                { value: 1279, name: "IPhone" },
            ],
        }, ],
    };
    basicpieChart.setOption(option);
    /**
     * End: Basic Pie chart
     * ====================
     */

    /**
     * Start: Basic Doughnut Chart
     * ====================
     */
    var basicdoughnutChart = echarts.init(
        document.getElementById("basic-doughnut-chart")
    );
    var option = {
        title: {
            text: "Mobile Selling",
            subtext: "Open source information",
            x: "center",
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["LG", "MI", "Samsung", "Motorola", "IPhone"],
        },
        color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"],
        toolbox: {
            show: true,
            orient: "vertical",
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: "Markline switch",
                        markUndo: "Undo markline",
                        markClear: "Clear markline",
                    },
                },
                dataView: {
                    show: true,
                    readOnly: false,
                    title: "View data",
                    lang: ["View chart data", "Close", "Update"],
                },
                magicType: {
                    show: true,
                    title: {
                        pie: "Switch to pies",
                        funnel: "Switch to funnel",
                    },
                    type: ["pie", "funnel"],
                    option: {
                        funnel: {
                            x: "25%",
                            y: "20%",
                            width: "50%",
                            height: "70%",
                            funnelAlign: "left",
                            max: 1279,
                        },
                    },
                },
                restore: {
                    show: true,
                    title: "Restore",
                },
                saveAsImage: {
                    show: true,
                    title: "Same as image",
                    lang: ["Save"],
                },
            },
        },
        calculable: true,
        series: [{
            name: "Browsers",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "57.5%"],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                    },
                    labelLine: {
                        show: true,
                    },
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: "{b}" + "\n\n" + "{c} ({d}%)",
                        position: "center",
                        textStyle: {
                            fontSize: "17",
                            fontWeight: "500",
                        },
                    },
                },
            },

            data: [
                { value: 228, name: "LG" },
                { value: 554, name: "MI" },
                { value: 209, name: "Samsung" },
                { value: 293, name: "Motorola" },
                { value: 1279, name: "IPhone" },
            ],
        }, ],
    };
    basicdoughnutChart.setOption(option);
    /**
     * End: Basic Doughnut Chart
     * ====================
     */

    /**
     * Start: Customized Chart
     * ====================
     */
    var customizedChart = echarts.init(
        document.getElementById("customized-chart")
    );
    var option = {
        backgroundColor: "#fff",
        title: {
            text: "Percentage Pie",
            left: "center",
            top: 20,
            textStyle: {
                color: "#ccc",
            },
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1],
            },
        },
        series: [{
            name: "Mobile",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
                { value: 271, name: "LG" },
                { value: 330, name: "MI" },
                { value: 295, name: "Samsung" },
                { value: 209, name: "Motorola" },
                { value: 408, name: "IPhone" },
            ].sort(function(a, b) {
                return a.value - b.value;
            }),
            roseType: "radius",
            label: {
                normal: {
                    textStyle: {
                        color: "rgba(0, 0, 0, 0.3)",
                    },
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: "rgba(0, 0, 0, 0.3)",
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: "#0d6efd",
                    shadowBlur: 200,
                    shadowColor: "rgb(255, 255, 255)",
                },
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
                return Math.random() * 200;
            },
        }, ],
    };
    customizedChart.setOption(option);
    /**
     * End: Customized Chart
     * ====================
     */

    /**
     * Start: Nested Pie Chart
     * ====================
     */
    var nestedChart = echarts.init(document.getElementById("nested-pie-chart"));
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["Gujarat", "Rajkot", "Surat", "Kolkata", "Bihar", "Delhi", "Panjab", "Orissa", "MP", "UP", ],
        },
        color: ["#0d6efd", "#198754", "#dc3545", "#ffc107", "#0dcaf0"],
        toolbox: {
            show: true,
            orient: "vertical",
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: "Markline switch",
                        markUndo: "Undo markline",
                        markClear: "Clear markline",
                    },
                },
                dataView: {
                    show: true,
                    readOnly: false,
                    title: "View data",
                    lang: ["View chart data", "Close", "Update"],
                },
                magicType: {
                    show: true,
                    title: {
                        pie: "Switch to pies",
                        funnel: "Switch to funnel",
                    },
                    type: ["pie", "funnel"],
                },
                restore: {
                    show: true,
                    title: "Restore",
                },
                saveAsImage: {
                    show: true,
                    title: "Same as image",
                    lang: ["Save"],
                },
            },
        },
        calculable: false,
        series: [{
                name: "City",
                type: "pie",
                selectedMode: "single",
                radius: [0, "40%"],
                x: "15%",
                y: "7.5%",
                width: "40%",
                height: "85%",
                funnelAlign: "right",
                max: 1379,

                itemStyle: {
                    normal: {
                        label: {
                            position: "inner",
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },
                },

                data: [
                    { value: 535, name: "Baroda" },
                    { value: 679, name: "Rajkot" },
                    { value: 1379, name: "Surat" },
                ],
            },
            {
                name: "state",
                type: "pie",
                radius: ["60%", "85%"],
                x: "55%",
                y: "7.5%",
                width: "35%",
                height: "85%",
                funnelAlign: "left",
                max: 1048,

                data: [
                    { value: 535, name: "Gujarat" },
                    { value: 379, name: "Kolkata" },
                    { value: 301, name: "Bihar" },
                    { value: 285, name: "Delhi" },
                    { value: 250, name: "Panjab" },
                    { value: 298, name: "Orissa" },
                    { value: 201, name: "MP" },
                    { value: 235, name: "UP" },
                ],
            },
        ],
    };
    nestedChart.setOption(option);
    /**
     * End: Nested Pie Chart
     * ====================
     */

    /**
     * Start: Pole Chart
     * ====================
     */
    var poleChart = echarts.init(document.getElementById("pole-chart"));
    var dataStyle = {
        normal: {
            label: { show: false },
            labelLine: { show: false },
        },
    };
    var placeHolderStyle = {
        normal: {
            color: "rgba(0,0,0,0)",
            label: { show: false },
            labelLine: { show: false },
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
        },
    };
    var option = {
        title: {
            text: "Are you Satisfied?",
            subtext: "Ahmedabad, India",
            x: "center",
            y: "center",
            itemGap: 10,
            textStyle: {
                // color: "rgba(30,144,255,0.8)",
                fontSize: 19,
                fontWeight: "500",
            },
        },
        tooltip: {
            show: true,
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
            orient: "vertical",
            x: document.getElementById("pole-chart").offsetWidth / 2,
            y: 30,
            x: "55%",
            itemGap: 15,
            data: [
                "65% Income",
                "25% Expenses",
                "10% Other",
            ],
        },
        color: ["#0d6efd", "#0dcaf0", "#dc3545"],
        series: [{
                name: "1",
                type: "pie",
                clockWise: false,
                radius: ["75%", "90%"],
                itemStyle: dataStyle,
                data: [{
                        value: 65,
                        name: "65% Income",
                    },
                    {
                        value: 35,
                        name: "invisible",
                        itemStyle: placeHolderStyle,
                    },
                ],
            },
            {
                name: "2",
                type: "pie",
                clockWise: false,
                radius: ["65%", "75%"],
                itemStyle: dataStyle,
                data: [{
                        value: 25,
                        name: "25% Expenses",
                    },
                    {
                        value: 75,
                        name: "invisible",
                        itemStyle: placeHolderStyle,
                    },
                ],
            },
            {
                name: "3",
                type: "pie",
                clockWise: false,
                radius: ["45%", "65%"],
                itemStyle: dataStyle,
                data: [{
                        value: 10,
                        name: "10% Other",
                    },
                    {
                        value: 90,
                        name: "invisible",
                        itemStyle: placeHolderStyle,
                    },
                ],
            },
        ],
    };
    poleChart.setOption(option);
    /**
     * End: Pole Chart
     * ====================
     */

    /**
     * Start: Nightingale Rose Chart
     * ====================
     */
    var nightingaleChart = echarts.init(
        document.getElementById("nightingale-rose-chart")
    );
    var option = {
        title: {
            text: "Employee's salary review",
            subtext: "Senior front end developer",
            x: "center",
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: +{c}Rs ({d}%)",
        },
        legend: {
            x: "left",
            y: "top",
            orient: "vertical",
            data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ],
        },

        color: ["#0d6efd", "#6c757d", "#198754", "#dc3545", "#ffc107", "#0dcaf0", "#212529", "#0d6efd", "#6c757d", "#0dcaf0", "#198754", "#dc3545", ],
        toolbox: {
            show: true,
            orient: "vertical",
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: "Markline switch",
                        markUndo: "Undo markline",
                        markClear: "Clear markline",
                    },
                },
                dataView: {
                    show: true,
                    readOnly: false,
                    title: "View data",
                    lang: ["View chart data", "Close", "Update"],
                },
                magicType: {
                    show: true,
                    title: {
                        pie: "Switch to pies",
                        funnel: "Switch to funnel",
                    },
                    type: ["pie", "funnel"],
                },
                restore: {
                    show: true,
                    title: "Restore",
                },
                saveAsImage: {
                    show: true,
                    title: "Same as image",
                    lang: ["Save"],
                },
            },
        },
        calculable: true,
        series: [{
            name: "Increase (brutto)",
            type: "pie",
            radius: ["15%", "73%"],
            center: ["50%", "57%"],
            roseType: "area",
            width: "40%",
            height: "78%",
            x: "30%",
            y: "17.5%",
            max: 498000,
            sort: "ascending",

            data: [
                { value: 428000, name: "January" },
                { value: 272000, name: "February" },
                { value: 378000, name: "March" },
                { value: 203000, name: "April" },
                { value: 233000, name: "May" },
                { value: 366000, name: "June" },
                { value: 276000, name: "July" },
                { value: 411000, name: "August" },
                { value: 398000, name: "September" },
                { value: 498000, name: "October" },
                { value: 345000, name: "November" },
                { value: 202000, name: "December" },
            ],
        }, ],
    };
    nightingaleChart.setOption(option);
    /**
     * End: Nightingale Rose Chart
     * ====================
     */
    //------------------------------------------------------
    // Resize chart on menu width change and window resize
    //------------------------------------------------------
    $(function() {
        // Resize chart on menu width change and window resize
        $(window).on("resize", resize);
        $(".sidebartoggler").on("click", resize);

        // Resize function
        function resize() {
            setTimeout(function() {
                // Resize chart
                basicpieChart.resize();
                basicdoughnutChart.resize();
                customizedChart.resize();
                nestedChart.resize();
                poleChart.resize();
            }, 200);
        }
    });
});