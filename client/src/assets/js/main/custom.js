// @charset "UTF-8";
/*!
* Axis-Themes v1.0.0 (https://axisthemes.in/)
* Copyright 2022 The Axis-Themes Authors * Designed & Develop By Axis-Themes
*/

/*
 * Start: Dashboard Chart
 * ======================
 */

const loadHeadChart = (chartId, data, color, series) => {
  var options = {
    chart: {
      animations: {
        enabled: !1,
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: 100,
      type: 'area',
      sparkline: {
        enabled: !0,
      },
    },
    colors: [color],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.4,
        stops: [0, 100],
      },
    },
    series: [
      {
        name: [series],
        data: data,
      },
    ],
    stroke: {
      curve: 'smooth',
    },
    tooltip: {
      followCursor: !0,
      theme: 'dark',
    },
    xaxis: {
      type: 'category',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    yaxis: {
      labels: {
        formatter: (e) => e.toString(),
      },
    },
  };
  var chart = new ApexCharts(document.querySelector(chartId), options);
  chart.render();
};
const loadVisitorChart = () => {
  const thisVisitorData = {
    name: 'Visitor',
    data: [
      [1330642800000, 3373],
      [1330902000000, 3322],
      [1330988400000, 3199],
      [1331074800000, 3241],
      [1331161200000, 3305],
      [1331247600000, 3364],
      [1331506800000, 3356],
      [1331593200000, 3422],
      [1331679600000, 3377],
      [1331766000000, 3417],
      [1331852400000, 3382],
      [1332111600000, 3451],
      [1332198000000, 3316],
      [1332284400000, 3356],
      [1332370800000, 3371],
      [1332457200000, 3381],
      [1332712800000, 3440],
      [1332799200000, 3463],
      [1332885600000, 3446],
      [1332972000000, 3448],
      [1333058400000, 3431],
      [1333317600000, 3470],
      [1333404000000, 3431],
      [1333490400000, 3346],
      [1333576800000, 3359],
      [1333922400000, 3322],
      [1334008800000, 3261],
      [1334095200000, 3301],
      [1334181600000, 3355],
      [1334268000000, 3318],
      [1334527200000, 3284],
      [1334613600000, 3384],
      [1334700000000, 3339],
      [1334786400000, 3291],
      [1334872800000, 3306],
      [1335132000000, 3262],
      [1335218400000, 3240],
      [1335304800000, 3313],
      [1335391200000, 3326],
      [1335477600000, 3358],
      [1335736800000, 3355],
      [1335823200000, 3377],
      [1335909600000, 3376],
      [1335996000000, 3332],
      [1336082400000, 3261],
      [1336341600000, 3252],
      [1336428000000, 3267],
      [1336514400000, 3252],
      [1336600800000, 3192],
      [1336687200000, 3220],
      [1336946400000, 3223],
      [1337032800000, 3233],
      [1337119200000, 3236],
      [1337205600000, 3201],
      [1337292000000, 3131],
      [1337551200000, 3201],
      [1337637600000, 3201],
      [1337724000000, 3218],
      [1337810400000, 3154],
      [1337896800000, 3160],
      [1338242400000, 3205],
      [1338328800000, 3129],
      [1338415200000, 3105],
      [1338501600000, 2982],
      [1338760800000, 3031],
      [1338847200000, 3070],
      [1338933600000, 3169],
      [1339020000000, 3132],
      [1339106400000, 3165],
      [1339365600000, 3113],
      [1339452000000, 3177],
      [1339538400000, 3179],
      [1339624800000, 3167],
      [1339711200000, 3239],
      [1339970400000, 3263],
      [1340056800000, 3289],
      [1340143200000, 3199],
      [1340229600000, 3123],
      [1340316000000, 3157],
      [1340575200000, 3084],
      [1340661600000, 3107],
      [1340748000000, 3141],
      [1340834400000, 3117],
      [1340920800000, 3237],
      [1341180000000, 3219],
      [1341266400000, 3251],
      [1341439200000, 3253],
      [1341525600000, 3137],
      [1341784800000, 3043],
      [1341871200000, 3044],
      [1341957600000, 3020],
      [1342044000000, 3014],
      [1342130400000, 3065],
      [1342389600000, 3040],
      [1342476000000, 3065],
      [1342562400000, 3143],
      [1342648800000, 3189],
      [1342735200000, 3138],
      [1342994400000, 3064],
      [1343080800000, 3002],
      [1343167200000, 3033],
      [1343253600000, 3095],
      [1343340000000, 3189],
      [1343599200000, 3101],
      [1343685600000, 3088],
      [1343772000000, 3069],
      [1343858400000, 3058],
      [1343944800000, 3202],
      [1344204000000, 3214],
      [1344290400000, 3237],
      [1344376800000, 3251],
      [1344463200000, 3265],
      [1344549600000, 3264],
      [1344808800000, 3227],
      [1344895200000, 3210],
      [1344981600000, 3291],
      [1345068000000, 3365],
      [1345154400000, 3380],
      [1345413600000, 3392],
      [1345500000000, 3375],
      [1345586400000, 3384],
      [1345672800000, 3350],
      [1345759200000, 3226],
      [1346018400000, 3232],
      [1346104800000, 3206],
      [1346191200000, 3196],
      [1346277600000, 3146],
      [1346364000000, 3127],
      [1346709600000, 3143],
      [1346796000000, 3226],
      [1346882400000, 3279],
      [1346968800000, 3246],
      [1347228000000, 3213],
      [1347314400000, 3243],
      [1347400800000, 3242],
      [1347487200000, 3281],
      [1347573600000, 3334],
      [1347832800000, 3341],
      [1347919200000, 3257],
      [1348005600000, 3312],
      [1348092000000, 3453],
      [1348178400000, 3383],
      [1348437600000, 3341],
      [1348524000000, 3290],
      [1348610400000, 3253],
      [1348696800000, 3280],
      [1348783200000, 3244],
      [1349042400000, 3262],
      [1349128800000, 3257],
      [1349215200000, 3260],
      [1349301600000, 3268],
      [1349388000000, 3247],
      [1349647200000, 3223],
      [1349733600000, 3168],
      [1349820000000, 3151],
      [1349906400000, 3178],
      [1349992800000, 3194],
      [1350252000000, 3233],
      [1350338400000, 3324],
      [1350424800000, 3344],
      [1350511200000, 3348],
      [1350597600000, 3324],
      [1350856800000, 3349],
      [1350943200000, 3331],
      [1351029600000, 3336],
      [1351116000000, 3340],
      [1351202400000, 3401],
      [1351638000000, 3402],
      [1351724400000, 3436],
      [1351810800000, 3439],
      [1352070000000, 3424],
      [1352156400000, 3439],
      [1352242800000, 3347],
      [1352329200000, 3298],
      [1352415600000, 3290],
      [1352674800000, 3270],
      [1352761200000, 3254],
      [1352847600000, 3223],
      [1352934000000, 3264],
      [1353020400000, 3265],
      [1353279600000, 3292],
      [1353366000000, 3264],
      [1353452400000, 3284],
      [1353625200000, 3340],
      [1353884400000, 3330],
      [1353970800000, 3318],
      [1354057200000, 3388],
      [1354143600000, 3409],
      [1354230000000, 3461],
      [1354489200000, 3470],
      [1354575600000, 3530],
      [1354662000000, 3540],
      [1354748400000, 3514],
      [1354834800000, 3548],
      [1355094000000, 3575],
      [1355180400000, 3554],
      [1355266800000, 3596],
      [1355353200000, 3553],
      [1355439600000, 3756],
      [1355698800000, 3742],
      [1355785200000, 3749],
      [1355871600000, 3809],
      [1355958000000, 3787],
      [1356044400000, 3771],
      [1356303600000, 3753],
      [1356476400000, 3755],
      [1356562800000, 3730],
      [1356649200000, 3690],
      [1356908400000, 3768],
      [1357081200000, 3834],
      [1357167600000, 3775],
      [1357254000000, 3813],
      [1357513200000, 3794],
      [1357599600000, 3814],
      [1357686000000, 3866],
      [1357772400000, 3862],
      [1357858800000, 3809],
      [1358118000000, 3816],
      [1358204400000, 3815],
      [1358290800000, 3788],
      [1358377200000, 3773],
      [1358463600000, 3798],
      [1358809200000, 3795],
      [1358895600000, 3825],
      [1358982000000, 3810],
      [1359068400000, 3832],
      [1359327600000, 3824],
      [1359414000000, 3852],
      [1359500400000, 3794],
      [1359586800000, 3783],
      [1359673200000, 3834],
      [1359932400000, 3810],
      [1360018800000, 3851],
      [1360105200000, 3840],
      [1360191600000, 3807],
      [1360278000000, 3912],
      [1360537200000, 3864],
      [1360623600000, 3889],
      [1360710000000, 3881],
      [1360796400000, 3861],
      [1360882800000, 3863],
      [1361228400000, 3899],
      [1361314800000, 3877],
      [1361401200000, 3834],
      [1361487600000, 3855],
      [1361746800000, 3811],
      [1361833200000, 3859],
      [1361919600000, 3960],
    ],
  };

  const lastVisitorData = {
    name: 'Visitor',
    data: [
      [1330642800000, 3000],
      [1330902000000, 3642],
      [1330988400000, 3599],
      [1331074800000, 3041],
      [1331161200000, 3549],
      [1331247600000, 3264],
      [1331506800000, 2930],
      [1331593200000, 2841],
      [1331679600000, 3642],
      [1331766000000, 3233],
      [1331852400000, 3047],
      [1332111600000, 3642],
      [1332198000000, 2960],
      [1332284400000, 3030],
      [1332370800000, 3485],
      [1332457200000, 3092],
      [1332712800000, 3642],
      [1332799200000, 3333],
      [1332885600000, 3446],
      [1332972000000, 3448],
      [1333058400000, 3431],
      [1333317600000, 3470],
      [1333404000000, 3431],
      [1333490400000, 3646],
      [1333576800000, 3559],
      [1333922400000, 3422],
      [1334008800000, 3061],
      [1334095200000, 2901],
      [1334181600000, 3055],
      [1334268000000, 3118],
      [1334527200000, 2984],
      [1334613600000, 3084],
      [1334700000000, 3139],
      [1334786400000, 3091],
      [1334872800000, 3006],
      [1335132000000, 2962],
      [1335218400000, 3040],
      [1335304800000, 3013],
      [1335391200000, 3126],
      [1335477600000, 3158],
      [1335736800000, 3455],
      [1335823200000, 3677],
      [1335909600000, 3776],
      [1335996000000, 3732],
      [1336082400000, 3661],
      [1336341600000, 3552],
      [1336428000000, 3467],
      [1336514400000, 3452],
      [1336600800000, 3392],
      [1336687200000, 3420],
      [1336946400000, 3423],
      [1337032800000, 3433],
      [1337119200000, 3236],
      [1337205600000, 3201],
      [1337292000000, 3131],
      [1337551200000, 3201],
      [1337637600000, 3201],
      [1337724000000, 3218],
      [1337810400000, 3154],
      [1337896800000, 3160],
      [1338242400000, 3205],
      [1338328800000, 3129],
      [1338415200000, 3105],
      [1338501600000, 2982],
      [1338760800000, 3031],
      [1338847200000, 3070],
      [1338933600000, 3169],
      [1339020000000, 3132],
      [1339106400000, 3165],
      [1339365600000, 3113],
      [1339452000000, 3177],
      [1339538400000, 3179],
      [1339624800000, 3167],
      [1339711200000, 3239],
      [1339970400000, 3263],
      [1340056800000, 3289],
      [1340143200000, 3199],
      [1340229600000, 3123],
      [1340316000000, 3357],
      [1340575200000, 3484],
      [1340661600000, 3507],
      [1340748000000, 3641],
      [1340834400000, 3417],
      [1340920800000, 3537],
      [1341180000000, 3619],
      [1341266400000, 3751],
      [1341439200000, 3853],
      [1341525600000, 3737],
      [1341784800000, 3843],
      [1341871200000, 3844],
      [1341957600000, 3720],
      [1342044000000, 3614],
      [1342130400000, 3565],
      [1342389600000, 3540],
      [1342476000000, 3465],
      [1342562400000, 3443],
      [1342648800000, 3589],
      [1342735200000, 3638],
      [1342994400000, 3764],
      [1343080800000, 3702],
      [1343167200000, 3533],
      [1343253600000, 3895],
      [1343340000000, 3689],
      [1343599200000, 3701],
      [1343685600000, 3888],
      [1343772000000, 3669],
      [1343858400000, 3758],
      [1343944800000, 3802],
      [1344204000000, 3914],
      [1344290400000, 3837],
      [1344376800000, 3751],
      [1344463200000, 3665],
      [1344549600000, 3564],
      [1344808800000, 3627],
      [1344895200000, 3310],
      [1344981600000, 3491],
      [1345068000000, 3565],
      [1345154400000, 3680],
      [1345413600000, 3592],
      [1345500000000, 3458],
      [1345586400000, 3365],
      [1345672800000, 3256],
      [1345759200000, 3485],
      [1346018400000, 3756],
      [1346104800000, 3852],
      [1346191200000, 3856],
      [1346277600000, 3954],
      [1346364000000, 3895],
      [1346709600000, 3689],
      [1346796000000, 3485],
      [1346882400000, 3632],
      [1346968800000, 3125],
      [1347228000000, 3025],
      [1347314400000, 3142],
      [1347400800000, 3015],
      [1347487200000, 3215],
      [1347573600000, 3254],
      [1347832800000, 3854],
      [1347919200000, 3658],
      [1348005600000, 3485],
      [1348092000000, 3568],
      [1348178400000, 3784],
      [1348437600000, 3486],
      [1348524000000, 3752],
      [1348610400000, 3852],
      [1348696800000, 3821],
      [1348783200000, 3985],
      [1349042400000, 3785],
      [1349128800000, 3856],
      [1349215200000, 3965],
      [1349301600000, 3458],
      [1349388000000, 3465],
      [1349647200000, 3543],
      [1349733600000, 3789],
      [1349820000000, 3589],
      [1349906400000, 3698],
      [1349992800000, 3756],
      [1350252000000, 3845],
      [1350338400000, 3456],
      [1350424800000, 3785],
      [1350511200000, 3965],
      [1350597600000, 3789],
      [1350856800000, 3689],
      [1350943200000, 3425],
      [1351029600000, 3965],
      [1351116000000, 3564],
      [1351202400000, 3201],
      [1351638000000, 3302],
      [1351724400000, 3406],
      [1351810800000, 3439],
      [1352070000000, 3486],
      [1352156400000, 3658],
      [1352242800000, 3789],
      [1352329200000, 3489],
      [1352415600000, 3598],
      [1352674800000, 3635],
      [1352761200000, 3785],
      [1352847600000, 3458],
      [1352934000000, 3568],
      [1353020400000, 3623],
      [1353279600000, 3856],
      [1353366000000, 3956],
      [1353452400000, 3789],
      [1353625200000, 3851],
      [1353884400000, 3795],
      [1353970800000, 3965],
      [1354057200000, 3856],
      [1354143600000, 3665],
      [1354230000000, 3256],
      [1354489200000, 3653],
      [1354575600000, 3789],
      [1354662000000, 3956],
      [1354748400000, 3869],
      [1354834800000, 3659],
      [1355094000000, 3486],
      [1355180400000, 3456],
      [1355266800000, 3325],
      [1355353200000, 3466],
      [1355439600000, 3633],
      [1355698800000, 3452],
      [1355785200000, 3632],
      [1355871600000, 3254],
      [1355958000000, 3653],
      [1356044400000, 3856],
      [1356303600000, 3654],
      [1356476400000, 3145],
      [1356562800000, 3365],
      [1356649200000, 3754],
      [1356908400000, 3465],
      [1357081200000, 3453],
      [1357167600000, 3485],
      [1357254000000, 3786],
      [1357513200000, 3568],
      [1357599600000, 3125],
      [1357686000000, 3036],
      [1357772400000, 3458],
      [1357858800000, 3689],
      [1358118000000, 3025],
      [1358204400000, 3458],
      [1358290800000, 3632],
      [1358377200000, 3124],
      [1358463600000, 3698],
      [1358809200000, 3425],
      [1358895600000, 3365],
      [1358982000000, 3754],
      [1359068400000, 3565],
      [1359327600000, 3024],
      [1359414000000, 3632],
      [1359500400000, 3052],
      [1359586800000, 3410],
      [1359673200000, 3953],
      [1359932400000, 3258],
      [1360018800000, 3635],
      [1360105200000, 3412],
      [1360191600000, 3425],
      [1360278000000, 3912],
      [1360537200000, 3365],
      [1360623600000, 3475],
      [1360710000000, 3565],
      [1360796400000, 3925],
      [1360882800000, 3285],
      [1361228400000, 3356],
      [1361314800000, 2947],
      [1361401200000, 3333],
      [1361487600000, 3548],
      [1361746800000, 2978],
      [1361833200000, 3645],
      [1361919600000, 3303],
    ],
  };
  const options = {
    series: [thisVisitorData, lastVisitorData],
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: !1,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: 350,
      type: 'area',

      zoom: {
        enabled: !1,
      },
      toolbar: {
        show: !1,
      },
    },
    colors: ['#818CF8'],
    dataLabels: {
      enabled: !1,
    },
    fill: {
      colors: ['#312E81'],
    },
    grid: {
      show: !0,
      borderColor: '#334155',
      padding: {
        top: 0,
        left: 0,
        right: 0,
      },
      position: 'back',
      xaxis: {
        labels: {
          show: true,
        },
        lines: {
          show: !0,
        },
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      followCursor: !0,
      theme: 'dark',
      x: {
        format: 'MMM dd, yyyy',
      },
      y: {
        formatter: (e) => `${e}`,
      },
    },
    xaxis: {
      axisBorder: {
        show: !1,
      },
      axisTicks: {
        show: !1,
      },
      crosshairs: {
        stroke: {
          color: '#475569',
          dashArray: 0,
          width: 2,
        },
      },
      labels: {
        style: {
          colors: '#CBD5E1',
        },
      },
      tickAmount: 20,
      tooltip: {
        enabled: !1,
      },
      type: 'datetime',
    },
    yaxis: {
      axisTicks: {
        show: !1,
      },
      axisBorder: {
        show: !1,
      },
      tickAmount: 5,
      show: !1,
      labels: {
        formatter: (e) => e.toString(),
      },
    },
  };

  var chart = new ApexCharts(document.querySelector('#visitorChart'), options);
  chart.render();
  jQuery('[data-chartbutton]').on('click', function () {
    let currentValue = jQuery(this).attr('value');
    if (currentValue) {
      if (currentValue == 'lastVisitorData') {
        chart.updateSeries([lastVisitorData]);
      }
      if (currentValue == 'thisVisitorData') {
        chart.updateSeries([thisVisitorData]);
      }
      jQuery('[data-chartbutton]').addClass('btn-default');
      $(this).removeClass('btn-default');
    }
  });
};

const bindAnchorEvent = () => {
  jQuery('[data-hrefclick]').click(function () {
    if (jQuery(this).attr('data-hrefclick'))
      window.location = jQuery(this).attr('data-hrefclick');
  });
};

jQuery(document).ready(function () {
  /**
   * Load a party chart
   */
  if (document.querySelector('#partyChart')) {
    loadHeadChart(
      '#partyChart',
      [30, 40, 10, 70, 20, 60, 30],
      '#8269B2',
      'Party'
    );
  }
  /**
   * Load a invoice chart
   */
  if (document.querySelector('#invoiceChart')) {
    loadHeadChart(
      '#invoiceChart',
      [20, 50, 70, 40, 60, 10, 70],
      '#4382e1',
      'Invoice'
    );
  }
  /**
   * Load payment chart
   */
  if (document.querySelector('#paymentChart')) {
    loadHeadChart(
      '#paymentChart',
      [30, 10, 50, 70, 40, 70, 20],
      '#06C5BF',
      'Payment'
    );
  }
  /**
   * Load a visitor chart
   */
  if (document.querySelector('#visitorChart')) {
    loadVisitorChart();
  }
  bindAnchorEvent();

  jQuery('.pagination-links').on('change', function () {
    const redirectURL =
      jQuery(this).attr('data-defaulturl') + '/Paginate:' + jQuery(this).val();
    window.location.href = redirectURL;
  });

  jQuery('[data-export]').on('click', function() {
    const target = jQuery(this).attr('data-target');
    const fileName = jQuery(this).attr('data-filename');
    const exportType = jQuery(this).attr('data-export');
    const tableSelector = document.getElementById(target);
    if(exportType == 'excel') {
      var table2excel = new Table2Excel({defaultFileName: fileName || 'axis-data-excel'});
      table2excel.export(tableSelector);
    } else {
      var doc = new jspdf.jsPDF('l', 'pt', 'a4');

      doc.html(tableSelector, {
        callback: function (doc) {
          doc.save(`${fileName || 'axis-data-pdf'}.pdf`);
        },
      });
    }
  });
});

/**
 * End: Dashboard Chart
 * ====================
 */

/*
 * SIDEBAR MENU
 * =============
 */

(function ($) {
  'use strict';

  $.fn.tree = function () {
    return this.each(function () {
      var btn = $(this).children('a').first();
      var menu = $(this).children('.treeview-menu').first();
      var isActive = $(this).hasClass('active');

      //initialize already active menus
      if (isActive) {
        menu.show();
        btn
          .children('.fa-angle-down')
          .first()
          .removeClass('fa-angle-down')
          .addClass('fa-angle-up');
      }
      //Slide open or close the menu on link click
      btn.click(function (e) {
        e.preventDefault();
        isActive = $(this).parent('li').hasClass('active');
        if (isActive) {
          //Slide up to close menu
          // For :: Layout Compact
          if (
            $('body').hasClass('layout-compact') ||
            $('body').hasClass('layout-thin')
          ) {
            // Remove previous active menus
            $('.sidebar-menu li.previous-active')
              .removeClass('previous-active')
              .addClass('active');
          }
          menu.slideUp();
          isActive = false;
          btn
            .children('.fa-angle-up')
            .first()
            .removeClass('fa-angle-up')
            .addClass('fa-angle-down');
          btn.parent('li').removeClass('active');
        } else {
          // For :: Layout Compact
          if (
            $('body').hasClass('layout-compact') ||
            $('body').hasClass('layout-thin')
          ) {
            // Remove previous active menus
            $('.sidebar-menu li.active')
              .removeClass('active')
              .addClass('previous-active');
          }
          //Slide down to open menu
          menu.slideDown();
          isActive = true;
          btn
            .children('.fa-angle-down')
            .first()
            .removeClass('fa-angle-down')
            .addClass('fa-angle-up');
          btn.parent('li').addClass('active');
        }
      });

      /* Add margins to submenu elements to give it a tree look */
      menu.find('li > a').each(function () {
        var pad = parseInt($(this).css('margin-left')) + 10;

        $(this).css({ 'margin-left': pad + 'px' });
      });
    });
  };
})(jQuery);

/**
 * To initialize the textarea to RickEditor
 * @param {*} elem
 * @param {*} options
 */
function editoron_textarea(elem = null, options = null) {
  if (elem) {
    var editorElems = Array.prototype.slice.call(
      document.querySelectorAll(elem)
    );
  } else {
    var editorElems = Array.prototype.slice.call(
      document.querySelectorAll('[data-editor]')
    );
  }
  if(editorElems.length > 0) {
    editorElems.forEach(function (el) {
      if (elem && el.hasAttribute('data-editor')) {
        return;
      }
      var elemType = el.type;
      var elemId = el.id;
      var elemHeight = jQuery(el).attr('height') || 100;
      if (elemType == 'textarea') {
        CKEDITOR.replace(elemId, {
          height: elemHeight,
        });
      } else {
        return;
      }
    });
  }
}

const initializeDefaultTheme = () => {
  $('.menu-drawer-overlay').on('click', function () {
    if ($(this).parents('li.active')) {
      $(this).parents('li.active').find('span[data-hassubmenu="1"]').trigger('click');
    }
  });
  
  // get get params
  var url = new URL(location.href);
  var requestMode = url.searchParams.get("mode");
  if(requestMode && requestMode !== "") {
    $('button[data-appconfig="scheme"][data-class="scheme-'+requestMode+'"]').trigger('click');
  }
  var requestLayout = url.searchParams.get("layout");
  if(requestLayout && requestLayout !== "") {
    $('button[data-appconfig="layout"][data-class="layout-'+requestLayout+'"]').trigger('click');
  }
  var requestDirection = url.searchParams.get("direction");
  if(requestDirection && requestDirection !== "") {
    $('button[data-appconfig="direction"][data-class="'+requestDirection+'"]').trigger('click');
  }
};

//
/********************* Page Load js ************************/
//
window.onload = function loader() {
  setTimeout(() => {
    document.getElementById('preloader').style.visibility = 'hidden';
    document.getElementById('preloader').style.opacity = '0';
  }, 150);
};

//Counter Dashboard

const counter = document.querySelectorAll('.counter_value');
const speed = 600; // The lower the slower
counter.forEach((counter_value) => {
  const updateCount = () => {
    const target = +counter_value.getAttribute('data-target');
    const count = +counter_value.innerText;
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter_value
      counter_value.innerText = (count + inc).toFixed(0);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter_value.innerText = target;
    }
  };
  updateCount();
});

/*
 * Global variables. If you change any of these vars, don't forget
 * to change the values in the less files!
 */
var left_side_width = 220; //Sidebar width in pixels

$(function () {
  'use strict';
  editoron_textarea();
  //Enable sidebar toggle
  $("[data-toggle='offcanvas']").click(function (e) {
    e.preventDefault();

    //If window is small enough, enable sidebar push menu
    if ($(window).width() <= 768) {
      $('.row-offcanvas').toggleClass('active');
      $('.left-side').removeClass('collapse-left');
      $('.header').removeClass('collapse-left');
      $('.right-side').removeClass('strech');
      $('.row-offcanvas').toggleClass('relative');
      $('.sidebar').removeClass('small_sidebar');
    } else {
      //Else, enable content streching
      $('.left-side').toggleClass('collapse-left');
      $('.right-side').toggleClass('strech');
      $('.header').toggleClass('collapse-left');
      $('.sidebar').toggleClass('small_sidebar');
    }
  });

  /* Sidebar tree view */
  $('.sidebar .treeview').tree();

  $('a[data-action="collapse"]').on('click', function (e) {
    e.preventDefault(),
      $(this)
        .closest('.mat-card')
        .find('[data-action="collapse"] i')
        .toggleClass('fa-minus fa-plus'),
      $(this).closest('.mat-card').children('.card-body').collapse('toggle');
  }),
    $('a[data-action="expand"]').on('click', function (e) {
      e.preventDefault(),
        $(this)
          .closest('.mat-card')
          .find('[data-action="expand"] i')
          .toggleClass('fa-expand fa-compress'),
        $(this).closest('.mat-card').toggleClass('card-fullscreen');
    }),
    $('a[data-action="close"]').on('click', function () {
      $(this).closest('.mat-card').removeClass().slideUp('fast');
    }),
    /* Start: Theme-setting overlay */
    $('.theme-configuration-btn').click(function () {
      $('body').toggleClass('open_theme-setting');
    });
  /* End: Theme-setting overlay */

  /* Start: Responsive overlay */
  $('.sidebar-close-overlay').click(function () {
    $('.row-offcanvas-left').toggleClass('active');
  });
  /* End: Responsive overlay */

  // new PerfectScrollbar('#scroll_themesetting');
  // new PerfectScrollbar('#scroll_sidebar');
  // new PerfectScrollbar('#scroll_contant');

  /* theme-configuration */
  $('button[data-appconfig]').on('click', function (e) {
    let currentClass = $(this).attr('data-class');
    let currentConfig = $(this).attr('data-appconfig');
    // Specially for dark mode
    if (currentConfig == 'scheme' && currentClass == 'scheme-light') {
      // console.log('Remove prop');
      $('#modeSwitchChk').prop('checked', false);
      $('#modeSwitchChk').trigger('change');
    } else if (currentConfig == 'scheme' && currentClass == 'scheme-dark') {
      // console.log('Add prop');
      $('#modeSwitchChk').prop('checked', true);
      $('#modeSwitchChk').trigger('change');
    }
    if (currentConfig != 'scheme') {
      $('[data-appconfig="' + currentConfig + '"]').each(function () {
        if ($('body').hasClass($(this).attr('data-class'))) {
          $('body').removeClass($(this).attr('data-class'));
        }
      });
      $('[data-appconfig="' + currentConfig + '"]').removeClass('active');
      $(this).addClass('active');
      if(currentConfig == 'direction') {
        $('html').attr('dir', currentClass);
        // Dynamic load css for the rtl/ltr
        if(currentClass == 'rtl') {
          $('#bootstrapLink').attr('href', 'assets/css/plugins/bootstrap.rtl.min.css');
        } else {
          $('#bootstrapLink').attr('href', 'assets/css/plugins/bootstrap.min.css');
        }
      }
      $('body').addClass(currentClass);
      // Store configuration in cookie of browser
      let customizeOption = getAppCookie('customize-option');
      if (customizeOption) {
        customizeOption = JSON.parse(customizeOption);
      } else {
        customizeOption = {};
      }
      customizeOption[currentConfig] = currentClass;
      setAppCookie('customize-option', JSON.stringify(customizeOption), 1);
    }

  });
  // Language button
  $('a[data-lang]').on('click', function (e) {
    $('html').attr('lang', $(this).attr('data-lang'));
    $('#header-lang-img').attr('src', 'assets/img/flags/' + $(this).attr('data-lang') + '.svg');
    $(document).trigger('lang-switcher');
  });
  // custom event: lang-switcher
  $(document).on('lang-switcher', function () {
    let localisationData = {};
    $.support.cors = true;
    $.getJSON("assets/locales/" + $('html').attr('lang') + ".json", function (data) {
      localisationData = data;
      $(localisationData).map((currentKey, currentValue) => {
        let keyArr = Object.keys(currentValue);
        keyArr.map((currKey) => {
          $('[data-local="' + currKey + '"]').html(currentValue[currKey]);
        })
        
      });
    }).fail(function () {
      console.error("No file found for localisation of " + $('html').attr('lang') + ".");
    });
  });

  /**
   * Clone on click
   */
  $('[data-clone]').on('click', function() {
    console.log(`Data clone click => ${jQuery(this).attr('data-clone')}`);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(jQuery(this).attr('data-clone')).select();
    document.execCommand("copy");
    $temp.remove();
  });

  // Initialize the theme
  initializeDefaultTheme();
});

function toggleFullScreen() {
  $('.expand-screen').toggleClass('full-screen');
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}
$(window).on('load', function () {
  $('.ball-beat').fadeOut(),
    $('#ajaxLoader').delay(350).fadeOut('slow'),
    $('body').delay(350).css({
      overflow: 'visible',
    });
});

const themeLoader = (status) => {

}

jQuery(function ($) {
  // To prevent dropdown close on inside click
  $('body').on("click", ".dropdown-menu", function (e) {
    !$(this).hasClass('autoclose-dropdown') && $(this).parent().find('.btn-topbar[data-bs-toggle="dropdown"]').hasClass("show") && e.stopPropagation();
  });
});

//  dashboard 1 chart
var options = {
  series: [{
    name: 'Servings',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }],
  annotations: {
    points: [{
      x: 'Bananas',
      seriesIndex: 0,
    }]
  },
  chart: {
    height: 285,
    type: 'bar',
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2
  },
  xaxis: {
    labels: {
      rotate: -45
    },
    tickPlacement: 'on'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.50,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.95,
      opacityTo: 0.95,
      stops: [50, 0, 100],
    },
  },
  colors: ['#4382e1'],
  grid: {
    show: true,
  }
};

if(document.querySelector("#sales_activity")) {
  var chart = new ApexCharts(document.querySelector("#sales_activity"), options);
  chart.render();
}

// Calendar
const newMonth = document.getElementById('cal__month');
const dateDisplay = document.getElementById('cal__date');
const allDates = document.getElementById('cal__days');
const prevBtn = document.getElementById('back__arrow');
const nxtBtn = document.getElementById('next__arrow');
const timeDisplay = document.getElementById('cal__time');

const date = new Date();

// Current Date Display
currentDate = () => {
	const twelveMonths = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const sevenDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const date__weekDay = sevenDays[date.getDay()];
	const date__day = date.getDate();
	const date__year = date.getFullYear();
  if(newMonth) newMonth.innerHTML = twelveMonths[date.getMonth()];
  if(dateDisplay) dateDisplay.innerHTML = `${date__weekDay} ${date__day}, ${date__year}`;
};
currentDate();

// Current Time Display
const showTime = () => {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = 'AM';
	if (hour > 12) {
		hour -= 12;
		am_pm = 'PM';
	}
	if (hour == 0) {
		hr = 12;
		am_pm = 'AM';
	}
	let currentTime = `${hour}:${min} ${am_pm}`;
  if(timeDisplay) timeDisplay.innerHTML = currentTime;
};
setInterval(showTime(), 1000);

// Generating Dates per Month
const glassCalendar = () => {
	currentDate();

	let days = '';
	let lastDay =
		32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
	const emptyDates = date.getDay();

	// For lopp to iterates empty spot where there's no date.
	for (let x = emptyDates; x > 0; x--) {
		days += `<span></span>`;
	}

	// For lopp to iterates through month to generate days & today's date.
	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<span class="today">${i}</span>`;
		} else {
			days += `<span>${i}</span>`;
		}
    if(allDates) allDates.innerHTML = days;
	}
};
glassCalendar();

// Added event listener to buttons for
if(prevBtn) {
  prevBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    glassCalendar();
  });
}

if(nxtBtn) {
  nxtBtn.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    glassCalendar();
  });
}

// dashboard 2 chart

var options = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  },
],
  chart: {
    type: 'bar',
    height: 369,
    toolbar: {
      offsetX: 0,
      offsetY: 0,
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: '50%',
    }
  },
  colors: ['#d3d8df', '#4382e1', '#a9cbff'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 6,
    colors: ['transparent']
  },
  legend: {
    position: 'top',
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  fill: {
    opacity: 1
  },
  responsive: [{
    breakpoint: 760,
    options: {
      plotOptions: {
        bar: {
          borderRadius: 2,
          columnWidth: '100%',
        }
      },
    },
}]
};

if(document.querySelector("#revenue_chart")) {
  var chart = new ApexCharts(document.querySelector("#revenue_chart"), options);
  chart.render();
}


// success_chart dashboard 2

var options = {
  series: [67],
  chart: {
    height: 300,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      size: 0,
      hellow: {
        margin: 0,
        // size: '10%',
        background: '#000',
      },
      startAngle: -120,
      endAngle: 120,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: -10,
        },
        value: {
          offsetY: 5,
          fontSize: '22px',
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
    },
  },
  colors: ['#4382e1'],
  stroke: {
    lineCap: 'round',
  },
  labels: ['Median Ratio'],
};

if(document.querySelector("#success_chart")) {
  var chart = new ApexCharts(document.querySelector("#success_chart"), options);
  chart.render();
}


//  order-chart

var options = {
  labels: ['Earnings', 'Orders', 'Portfolio', 'Loss'],
  series: [44, 55, 13, 10],
  chart: {
    type: 'donut',
    width: 360, 
  },
  colors: ['#4382e1', '#1ca968', '#fdc83b', '#db4a58'],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'bottom',
    offsetY: 0,
  },
  responsive: [
    {
      breakpoint: 1500,
      options: {
        chart: {
          width: 330,
        },
      }
    },
  ],
};

if(document.querySelector("#order-chart")) {
  var chart = new ApexCharts(document.querySelector("#order-chart"), options);
  chart.render();
}