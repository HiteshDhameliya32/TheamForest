// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

$(function() {
    "use strict";
    //Line Chart
    new Chart(document.getElementById("line-chart"), {
        type: "line",
        data: {
            labels: [4500, 3500, 3200, 3050, 2700, 2450, 2200, 1750, 1499, 2050],
            datasets: [{
                    data: [86, 114, 106, 412, 623, 790, 1015, 1548, 3815, 6212],
                    label: "Asia",
                    borderColor: "#0b5ed7",
                    fill: false,
                },
                {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Africa",
                    borderColor: "#198754",
                    fill: false,
                },
                {
                    data: [168, 170, 178, 230, 450, 510, 630, 810, 945, 2021],
                    label: "Europe",
                    borderColor: "#dc3545",
                    fill: false,
                },
                {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Latin America",
                    borderColor: "#ffc107",
                    fill: false,
                },
                {
                    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                    label: "North America",
                    borderColor: "#0dcaf0",
                    fill: false,
                },
            ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: "#b2b9bf",
                },
            },
            title: {
                display: true,
                fontColor: "#b2b9bf",
                text: "World population per region (in millions)",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
                xAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
            },
        },
    });

    // Bar chart
    new Chart(document.getElementById("bar-chart"), {
        type: "bar",
        data: {
            labels: ["Asia", "Africa", "Europe", "Latin America", "North America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: [
                    "#0b5ed7",
                    "#198754",
                    "#dc3545",
                    "#ffc107",
                    "#0dcaf0",
                ],
                data: [8478, 6267, 5734, 4784, 1833],
            }, ],
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                fontColor: "#b2b9bf",
                text: "Predicted world population (millions) in 2050",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
                xAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
            },
        },
    });

    //Radar chart
    new Chart(document.getElementById("radar-chart"), {
        type: "radar",
        data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [{
                    label: "250",
                    fill: true,
                    backgroundColor: "#6c757d80",
                    borderColor: "#6c757d",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "#6c757d",
                    data: [8.77, 55.61, 21.69, 6.62, 6.82],
                },
                {
                    label: "4050",
                    fill: true,
                    backgroundColor: "#0dcaf080",
                    borderColor: "#0dcaf0",
                    pointBorderColor: "#fff",
                    pointBackgroundColor: "#0dcaf0",
                    pointBorderColor: "#fff",
                    data: [25.48, 54.16, 7.61, 8.06, 4.45],
                },
            ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: "#b2b9bf",
                },
            },
            title: {
                display: true,
                fontColor: "#b2b9bf",
                text: "Distribution in % of world population",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
                xAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
            },
        },
    });

    // New chart
    new Chart(document.getElementById("pie-chart"), {
        type: "pie",
        data: {
            labels: ["Asia", "Africa", "Europe", "Latin America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: [
                    "#0d6efd",
                    "#198754",
                    "#dc3545",
                    "#ffc107",
                    "#0dcaf0",
                ],
                data: [2478, 5267, 3734, 2784],
            }, ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: "#b2b9bf",
                },
            },
            title: {
                display: true,
                fontColor: "#b2b9bf",
                text: "Predicted world population (millions) in 2050",
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#b2b9bf",
                    fontSize: 12,
                },
            }, ],
            xAxes: [{
                ticks: {
                    fontColor: "#b2b9bf",
                    fontSize: 12,
                },
            }, ],
        },
    });

    //Polar Chart
    new Chart(document.getElementById("polar-chart"), {
        type: "polarArea",
        data: {
            labels: ["Asia", "Africa", "Europe", "Latin America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: [
                    "#0d6efd",
                    "#198754",
                    "#dc3545",
                    "#ffc107",
                    "#0dcaf0",
                ],
                data: [2478, 5267, 5734, 3784],
            }, ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: "#b2b9bf",
                },
            },
            title: {
                display: true,
                fontColor: "#b2b9bf",
                text: "Predicted world population (millions) in 2050",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
                xAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
            },
        },
    });

    // Horizental Bar Chart
    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: "horizontalBar",
        data: {
            labels: ["Asia", "Africa", "Europe", "Latin America", "North America"],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: [
                    "#0d6efd",
                    "#198754",
                    "#dc3545",
                    "#ffc107",
                    "#0dcaf0",
                ],
                data: [8478, 6267, 5534, 4784, 3433],
            }, ],
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                fontColor: "#b2b9bf",
                text: "Predicted world population (millions) in 2050",
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
                xAxes: [{
                    ticks: {
                        fontColor: "#b2b9bf",
                        fontSize: 12,
                    },
                }, ],
            },
        },
    });
});

