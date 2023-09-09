var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#bbbbfa",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 0;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);


// chart1
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge1", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart2
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge2", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart3
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge3", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart4
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge4", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart5
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge5", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart6
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge6", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart7
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge7", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart8
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge8", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart9

var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge9", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart10

var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge10", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart11

var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge11", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// cart12
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge12", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);

// chart13
var chartMin = 0;
var chartMax = 100;

var data = {
  score: 52.7,
  gradingData: [
    {
      title: " Bad",
      advice: "Bad revenue and workforce performance ratio",
      color: "#BBBBFA",
      lowScore: 0,
      highScore: 20
    },
    {
      title: "Warning",
      advice: "Warning - revenue to workforce performance not good",
      color: "#9696f8",
      lowScore: 20,
      highScore: 50
    },
    {
      title: "OK",
      advice: "Well done",
      color: "#6a69f5",
      lowScore: 50,
      highScore: 100
    }
  ]
};

/**
Grading Lookup
 */
function lookUpGrade(lookupScore, grades) {
  // Only change code below this line
  for (var i = 0; i < grades.length; i++) {
    if (
      grades[i].lowScore < lookupScore &&
      grades[i].highScore >= lookupScore
    ) {
      return grades[i];
    }
  }
  return null;
}

// create chart
var chart = am4core.create("gauge13", am4charts.GaugeChart);
chart.hiddenState.properties.opacity = 0;
chart.fontSize = 11;
chart.innerRadius = am4core.percent(80);
chart.resizable = true;

/**
 * Normal axis
 */
var axis = chart.xAxes.push(new am4charts.ValueAxis());
axis.min = chartMin;
axis.max = chartMax;
axis.strictMinMax = true;
axis.renderer.radius = am4core.percent(80);
axis.renderer.inside = true;
axis.renderer.line.strokeOpacity = 0;
axis.renderer.ticks.template.disabled = false;
axis.renderer.ticks.template.strokeOpacity = 0;
axis.renderer.ticks.template.strokeWidth = 0.5;
axis.renderer.ticks.template.length = 5;
axis.renderer.grid.template.disabled = true;
axis.renderer.labels.template.radius = am4core.percent(15);
axis.renderer.labels.template.fontSize = "0.9em";
axis.renderer.labels.template.fill = am4core.color("#757575");

/**
 * Axis for ranges
 */
var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
axis2.min = chartMin;
axis2.max = chartMax;
axis2.renderer.radius = am4core.percent(105); // figure out how to move labels instead
axis2.strictMinMax = true;
axis2.renderer.labels.template.disabled = true;
axis2.renderer.ticks.template.disabled = true;
axis2.renderer.grid.template.disabled = false;
axis2.renderer.grid.template.opacity = 0;
axis2.renderer.labels.template.bent = true;
axis2.renderer.labels.template.fill = am4core.color("#000");
axis2.renderer.labels.template.fontWeight = "bold";
axis2.renderer.labels.template.fillOpacity = 0; //hide
axis2.numberFormatter.numberFormat = "'%'#a";

/**
Ranges
*/

for (let grading of data.gradingData) {
  var range = axis2.axisRanges.create();
  range.axisFill.fill = am4core.color(grading.color);
  
  range.axisFill.fillOpacity = 1;
  
  range.axisFill.zIndex = -1;
  range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
  range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
  range.grid.strokeOpacity = 0;
  range.stroke = am4core.color(grading.color).lighten(-0.1);
  range.label.inside = true;
  range.label.text = grading.title.toUpperCase();
  range.label.inside = true;
  range.label.location = 0.5;
  range.label.inside = true;
  range.label.radius = am4core.percent(10);
  range.label.paddingBottom = -5; // ~half font size
  range.label.fontSize = "0.9em";
}

var matchingGrade = lookUpGrade(data.score, data.gradingData);

/**
 * Metric Value
 */

var labelMetricValue = chart.radarContainer.createChild(am4core.Label);
labelMetricValue.isMeasured = false;
labelMetricValue.fontSize = "2em";
labelMetricValue.x = am4core.percent(50);
labelMetricValue.paddingBottom = 15;
labelMetricValue.horizontalCenter = "middle";
labelMetricValue.verticalCenter = "bottom";
labelMetricValue.text = data.score.toFixed(1);
labelMetricValue.fill = am4core.color(matchingGrade.color);

/**
 * Hand
 */
var hand = chart.hands.push(new am4charts.ClockHand());
hand.axis = axis2;
hand.radius = am4core.percent(85);
hand.innerRadius = am4core.percent(50);
hand.startWidth = 10;
hand.pixelHeight = 10;
hand.pin.disabled = true;
hand.value = data.score;
hand.fill = am4core.color("#444");
hand.stroke = am4core.color("#000");

var handTarget = chart.hands.push(new am4charts.ClockHand());
handTarget.axis = axis2;
handTarget.radius = am4core.percent(100);
handTarget.innerRadius = am4core.percent(105);
handTarget.fill = axis2.renderer.line.stroke;
handTarget.stroke = axis2.renderer.line.stroke;
handTarget.pin.disabled = true;
handTarget.pin.radius = 10;
handTarget.startWidth = 10;
handTarget.fill = am4core.color("#444");
handTarget.stroke = am4core.color("#000");

hand.events.on("positionchanged", function(){
  var t = axis2.positionToValue(hand.currentPosition).toFixed(0);
    
  var value2 = axis.positionToValue(hand.currentPosition);
  var matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
})

setInterval(function() {
    var value = chartMin + Math.random() * (chartMax - chartMin);
    var value = 52.7;
    hand.showValue(value, 100, am4core.ease.cubicOut);
  
    value = 52.7;
    handTarget.showValue(value, 100, am4core.ease.cubicOut);
    axis2.axisRanges.values[0].axisFill.fillOpacity = 0.2;
    axis2.axisRanges.values[1].axisFill.fillOpacity = 0.2;
}, 100);
// end guage chart


// line-chart
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#6a69f5"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#line-chart"), options);
chart.render();

// line-chart1
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#6a69f5"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#line-chart1"), options);
chart.render();

// bar-chart5
var options = {
  series: [{
  data: [80, 40, 63, 100, 80, 50],
  }],
    chart: {
    type: 'bar',
    height: 80,
      toolbar: {
        show: false,
      }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      endingShape: 'rounded',
      borderRadius: 5
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: false,
    width: 2,
    colors: ['transparent']
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      color: '#fff',
      height: 0,
    },
  },
  grid: {
    show: false,
  },
  fill: {
    colors: ['#9795f7']
  },
};
var chart = new ApexCharts(document.querySelector("#bar-chart5"), options);
chart.render();

// line-chart6
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 140,
  type: 'pie',
  colors: ['#9795f7', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 150
    },
  }
}],
value: {
  show: false,
},
legend: {
  show: false,
}
};
var chart = new ApexCharts(document.querySelector("#pie-chart6"), options);
chart.render();

// line-chart7
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 140,
  type: 'pie',
  colors: ['#9795f7', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 150
    },
  }
}],
value: {
  show: false,
},
legend: {
  show: false,
}
};
var chart = new ApexCharts(document.querySelector("#pie-chart7"), options);
chart.render();

// line-chart8
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#6a69f5"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#line-chart8"), options);
chart.render();

// line-chart11
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#6a69f5"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#line-chart11"), options);
chart.render();

// line-chart12
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#6a69f5"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#line-chart12"), options);
chart.render();

// line-chart13
var options = {
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: "line",
        fontFamily: "Nunito, sans-serif",
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: ["#6a69f5"],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return "";
                }),
            },
        },
    },
};
var chart = new ApexCharts(document.querySelector("#line-chart13"), options);
chart.render();
// line-chart end

// // dropdown 
// const navMenuClose = document.getElementById("menu-close");
// const sideMenuClose = document.getElementById("sidebar-close");
// const links = document.querySelector("header .navbar .navbar-links");
// const menuLi = document.querySelectorAll(
//   "header .navbar .navbar-links .links > li"
// );
// const submenu = document.querySelectorAll(
//   "header .navbar .navbar-links .links li ul > li"
// );

// navMenuClose.addEventListener("click", () => {
//   links.style.left = "0";
// });

// sideMenuClose.addEventListener("click", () => {
//   links.style.left = "-100%";
// });

// document.addEventListener("click", (event) => {
//   if (!links.contains(event.target) && !navMenuClose.contains(event.target)) {
//     links.style.left = "-100%";
//   }
// });

// menuLi.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     menuLi.forEach((li) => {
//       li.classList.remove("active");
//     });

//     e.currentTarget.classList.toggle("active");
//   });
// });

// submenu.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.currentTarget.classList.toggle("show-menu");
//   });
// });

// const navbar = document.querySelector("header");
// const topMenu = document.querySelector(".top-menu");

// window.addEventListener("scroll", () => {
//   const scrollHeight = window.scrollY;
//   const navbarHeight = navbar.getBoundingClientRect().height;

//   if (scrollHeight > navbarHeight) {
//     navbar.classList.add("nav-fix");
//   } else {
//     navbar.classList.remove("nav-fix");
//   }

//   console.log(scrollHeight);

//   if (scrollHeight > 200) {
//     topMenu.classList.add("show-btn");
//   } else {
//     topMenu.classList.remove("show-btn");
//   }
// });

// topMenu.addEventListener("click", () => {
//   document.documentElement.scrollTop = 0;
// });
