
// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

/**
 * Start: Line With Data Label Chart
 * ====================
 */
  
var options = {
    series: [{
            name: "High - 2013",
            data: [23, 32, 35, 38, 30, 28, 35, 32, 28, 33, 35, 32],
        },
        {
            name: "Low - 2013",
            data: [18, 13, 25, 22, 15, 17, 23, 21, 19, 16, 19, 22],
        },
    ],
    chart: {
        height: 350,
        type: "line",
        dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#0d6efd", "#0dcaf0"],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: "smooth",
    },
    grid: {
        borderColor: "transparent",
        row: {
            colors: ["#F3F3F9", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    markers: {
        size: 1,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    yaxis: {
        min: 5,
        max: 40,
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    tooltip: {
        theme: "dark",
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
    },
};

var chart = new ApexCharts(document.querySelector("#chart-line-with-data-label"), options);
chart.render();
/**
 * End: Line With Data Label Chart
 * ====================
 */

/**
 * Start: Basic Area Chart
 * ====================
 */
var options = {
    series: [{
        data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6],
        ],
    }, ],
    chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
            autoScaleYaxis: true,
        },
        toolbar: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    colors: ["#0d6efd"],
    annotations: {
        yaxis: [{
            y: 30,
            borderColor: "#999",
            label: {
                show: true,
                text: "Support",
                style: {
                    color: "#fff",
                    background: "#00E396",
                },
            },
        }, ],
        xaxis: [{
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "#999",
            yAxisIndex: 0,
            label: {
                show: true,
                text: "Rally",
                style: {
                    color: "#fff",
                    background: "#775DD0",
                },
            },
        }, ],
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 0,
        style: "hollow",
    },
    xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6,
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    tooltip: {
        x: {
            format: "dd MMM yyyy",
        },
        theme: "dark",
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100],
        },
    },
};

var chart_area_datetime = new ApexCharts(
    document.querySelector("#X-area-chart"),
    options
);
chart_area_datetime.render();
/**
 * End: Basic Area Chart
 * ====================
 */

/**
 * Start: Spline Area Chart
 * ====================
 */
var options_spline = {
    series: [{
            name: "series1",
            data: [27, 45, 33, 48, 38, 88, 102],
        },
        {
            name: "series2",
            data: [9, 22, 58, 42, 30, 58, 71],
        },
    ],
    chart: {
        height: 350,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    colors: ["#0d6efd", "#0dcaf0"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        type: "datetime",
        categories: [
            "2021-09-19T00:00:00.000Z",
            "2021-09-19T01:30:00.000Z",
            "2021-09-19T02:30:00.000Z",
            "2021-09-19T03:30:00.000Z",
            "2021-09-19T04:30:00.000Z",
            "2021-09-19T05:30:00.000Z",
            "2021-09-19T06:30:00.000Z",
        ],
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
    },
    legend: {
        labels: {
            colors: ["#a1aab2"],
        },
    },
};

var chart_area_spline = new ApexCharts(
    document.querySelector("#spline-area-chart"),
    options_spline
);
chart_area_spline.render();
/**
 * End: Spline Area Chart
 * ====================
 */

/**
 * Start: Bar Chart
 * ====================
 */
var options = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    colors: ["#0d6efd"],
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
        ],
    }
};

var chart = new ApexCharts(document.querySelector("#basic-bar-chart"), options);
chart.render();
/**
 * End: Bar Chart
 * ====================
 */

/**
 * Start: Bar Chart
 * ====================
 */
var options_stacked = {
    series: [{
            name: "Marine Sprite",
            data: [41, 52, 38, 33, 18, 41, 23],
        },
        {
            name: "Striking Calf",
            data: [55, 29, 35, 49, 12, 39, 28],
        },
        {
            name: "Tank Picture",
            data: [13, 19, 15, 11, 20, 38, 48],
        },
        {
            name: "Bucket Slope",
            data: [12, 11, 8, 16, 23, 12, 9],
        },
        {
            name: "Reborn Kid",
            data: [33, 19, 15, 28, 33, 27, 16],
        },
    ],
    chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    grid: {
        borderColor: "transparent",
    },
    colors: ["#0d6efd", "#0dcaf0", "#ffc107", "#dc3545", "#6c757d"],
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ["#fff"],
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
            formatter: function(val) {
                return val + "K";
            },
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    yaxis: {
        title: {
            text: undefined,
        },
        labels: {
            style: {
                colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", ],
            },
        },
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val + "K";
            },
        },
        theme: "dark",
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
        labels: {
            colors: ["#a1aab2"],
        },
    },
};

var chart_bar_stacked = new ApexCharts(
    document.querySelector("#stacked-bar-chart"),
    options_stacked
);
chart_bar_stacked.render();
/**
 * End: Bar Chart
 * ====================
 */

/**
 * Start: Simple Pie Chart
 * ====================
 */
var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    colors: ["#0d6efd", "#0dcaf0", "#ffc107", "#dc3545", "#6c757d"],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#simple-pie-chart"), options);
chart.render();
/**
 * End: Simple Pie Chart
 * ====================
 */

/**
 * Start: Donut Pie Chart
 * ====================
 */
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        type: 'donut',
        width: 385,
    },
    colors: ["#0d6efd", "#0dcaf0", "#ffc107", "#dc3545", "#6c757d"],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#donut-pie-chart"), options);
chart.render();
/**
 * End: Donut Pie Chart
 * ====================
 */

/**
 * Start: Monochrome Pie Chart
 * ====================
 */
var options_monochrome = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
        width: "350",
        type: "pie",
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ],
    theme: {
        monochrome: {
            enabled: true,
        },
    },
    plotOptions: {
        pie: {
            color: ["#0d6efd"],
            dataLabels: {
                offset: -5,
            },
        },
    },
    dataLabels: {
        formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
        },
    },
    legend: {
        show: false,
    },
};

var chart_pie_monochrome = new ApexCharts(
    document.querySelector("#monochrome-pie-chart"),
    options_monochrome
);
chart_pie_monochrome.render();
/**
 * End: Monochrome Pie Chart
 * ====================
 */

/**
 * Start: Basic Radial Bar Chart
 * ====================
 */
var options_basic = {
    series: [70],
    chart: {
        height: 310,
        type: "radialBar",
    },
    colors: ["#0d6efd"],
    plotOptions: {
        radialBar: {
            hollow: {
                size: "70%",
            },
            dataLabels: {
                value: {
                    color: "#a1aab2",
                    show: true,
                },
            },
        },
    },
    labels: ["Rain"],
};

var chart_radial_basic = new ApexCharts(
    document.querySelector("#basic-radial-bar-chart"),
    options_basic
);
chart_radial_basic.render();
/**
 * End: Basic Radial Bar Chart
 * ====================
 */

/**
 * Start: Multiple Radial Bar Chart
 * ====================
 */
var options = {
    series: [44, 55, 67, 83],
    chart: {
        height: 310,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '20px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function(w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 279
                    }
                }
            }
        }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
};

var chart = new ApexCharts(document.querySelector("#multiple-radial-bar-chart"), options);
chart.render();
/**
 * End: Multiple Radial Bar Chart
 * ====================
 */

/**
 * Start: custom-angle-bar-chart
 * ====================
 */
var options_custom_circle = {
    series: [76, 67, 61, 90],
    chart: {
        height: 310,
        type: "radialBar",
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                },
            },
        },
    },
    colors: ["#0d6efd", "#0dcaf0", "#ffc107", "#dc3545", ],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: "left",
        offsetX: 80,
        offsetY: 15,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0,
        },
        formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
            vertical: 3,
        },
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false,
            },
        },
    }, ],
};

var chart_radial_custom_circle = new ApexCharts(
    document.querySelector("#custom-angle-bar-chart"),
    options_custom_circle
);
chart_radial_custom_circle.render();
/**
 * End: custom-angle-bar-chart
 * ====================
 */

/**
 * Start: Gradient Radial Bar Chart
 * ====================
 */
var options_gradient = {
    series: [75],
    chart: {
        height: 310,
        type: "radialBar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
                margin: 0,
                size: "70%",
                background: "#fff",
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24,
                },
            },
            track: {
                background: "#fff",
                strokeWidth: "67%",
                margin: 0, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35,
                },
            },

            dataLabels: {
                show: true,
                name: {
                    offsetY: -10,
                    show: true,
                    color: "#0d6efd",
                    fontSize: "20px",
                },
                value: {
                    formatter: function(val) {
                        return parseInt(val);
                    },
                    color: "#0d6efd",
                    fontSize: "20px",
                    show: true,
                },
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#0d6efd"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
        },
    },
    stroke: {
        lineCap: "round",
    },
    labels: ["Percentage"],
};

var chart_radial_gradient = new ApexCharts(
    document.querySelector("#gradial-radial-bar-chart"),
    options_gradient
);
chart_radial_gradient.render();
/**
 * End: Gradient Radial Bar Chart
 * ====================
 */

/**
 * Start: Stroked Gauge Radial Bar Chart
 * ====================
 */
var options_strocked = {
    series: [67],
    chart: {
        height: 310,
        type: "radialBar",
        offsetY: -10,
    },
    colors: ["#0d6efd"],
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: "16px",
                    color: undefined,
                    offsetY: 120,
                },
                value: {
                    offsetY: 76,
                    fontSize: "20px",
                    color: "#0d6efd",
                    formatter: function(val) {
                        return val + "%";
                    },
                },
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
        },
    },
    stroke: {
        dashArray: 4,
    },
    labels: ["Median Ratio"],
};

var chart_radial_strocked = new ApexCharts(
    document.querySelector("#stroked-radial-bar-chart"),
    options_strocked
);
chart_radial_strocked.render();
/**
 * End: Stroked Gauge Radial Bar Chart
 * ====================
 */

/**
 * Start: Semi Circle Radial Bar Chart
 * ====================
 */
var options_semi_circle = {
    series: [76],
    chart: {
        type: "radialBar",
        offsetY: -20,
        width: 400,
        height: 300,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#0d6efd",
                strokeWidth: "97%",
                margin: 5, // margin is in pixels
                dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: "#999",
                    opacity: 1,
                    blur: 2,
                },
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    offsetY: -2,
                    fontSize: "20px",
                    color: "#0d6efd",
                },
            },
        },
    },
    grid: {
        padding: {
            top: -10,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            color: "#0dcaf0",
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
        },
    },
    labels: ["Average Results"],
};

var chart_radial_semi_circle = new ApexCharts(
    document.querySelector("#semi-radial-bar-chart"),
    options_semi_circle
);
chart_radial_semi_circle.render();
/**
 * End: Semi Circle Radial Bar Chart
 * ====================
 */

/**
 * Start: Basic Radar Chart
 * ====================
 */
var options_basic = {
    series: [{
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
    }, ],
    chart: {
        height: 310,
        type: "radar",
        toolbar: {
            show: false,
        },
    },
    colors: ["#0d6efd"],
    xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
    },
    tooltip: {
        theme: "dark",
    },
};

var chart_radar_basic = new ApexCharts(
    document.querySelector("#basic-radar-chart"),
    options_basic
);
chart_radar_basic.render();
/**
 * End: Basic Radar Chart
 * ====================
 */

/**
 * Start: Multiple Series Radar Chart
 * ====================
 */
var options_multiple = {
    series: [{
            name: "Series 1",
            data: [80, 50, 30, 40, 100, 20],
        },
        {
            name: "Series 2",
            data: [20, 30, 40, 80, 20, 80],
        },
        {
            name: "Series 3",
            data: [44, 76, 78, 13, 43, 10],
        },
    ],
    chart: {
        height: 310,
        type: "radar",
        toolbar: {
            show: false,
        },

        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
        },
    },
    colors: ["#0d6efd", "#ffc107", "#0dcaf0"],
    stroke: {
        width: 2,
    },
    fill: {
        opacity: 0.1,
    },
    markers: {
        size: 0,
    },
    xaxis: {
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
    },
    legend: {
        labels: {
            colors: ["#a1aab2"],
        },
    },
};

var chart_radar_multiple_series = new ApexCharts(
    document.querySelector("#maltiple-radar-chart"),
    options_multiple
);
chart_radar_multiple_series.render();
/**
 * End: Multiple Series Radar Chart
 * ====================
 */

/**
 * Start: Polygon Fill Radar Chart
 * ====================
 */
var options_polygon = {
    series: [{
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
    }, ],
    chart: {
        height: 350,
        type: "radar",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: true,
    },
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColors: "#e9e9e9",
                fill: {
                    colors: ["#f8f8f8", "#fff"],
                },
            },
        },
    },
    colors: ["#0d6efd"],
    markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: "#2962ff",
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return val;
            },
        },
        theme: "dark",
    },
    xaxis: {
        categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ],
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function(val, i) {
                if (i % 2 === 0) {
                    return val;
                } 
                else {
                    return "";
                }
            },
        },
    },
};

var chart_radar_polygon_fill = new ApexCharts(
    document.querySelector("#polygon-radar-chart"),
    options_polygon
);
chart_radar_polygon_fill.render();
/**
 * End: Polygon Fill Radar Chart
 * ====================
 */