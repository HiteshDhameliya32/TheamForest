import React from 'react';
import dynamic from 'next/dynamic';
// react plugin for creating vector maps
const VectorMap = dynamic(
    () => import("react-jvectormap").then((m) => m.VectorMap),
    { ssr: false, }
  );

const regionStyle = {
    initial: {
        fill: '#3a80e5'
    }
};
const markerStyle = {
    initial: {
        r: 9,
        'fill': '#7faff4',
        'fill-opacity': 0.9,
        'stroke': '#fff',
        'stroke-width': 7,
        'stroke-opacity': 0.4
    },
    hover: {
        'stroke': '#fff',
        'fill-opacity': 1,
        'stroke-width': 1.5
    }
}
const series = [{
    latLng: [41.90, 12.45],
    name: 'Vatican City'
}, {
    latLng: [43.73, 7.41],
    name: 'Monaco'
}, {
    latLng: [-0.52, 166.93],
    name: 'Nauru'
}, {
    latLng: [-8.51, 179.21],
    name: 'Tuvalu'
}, {
    latLng: [43.93, 12.46],
    name: 'San Marino'
}, {
    latLng: [47.14, 9.52],
    name: 'Liechtenstein'
}, {
    latLng: [7.11, 171.06],
    name: 'Marshall Islands'
}, {
    latLng: [17.3, -62.73],
    name: 'Saint Kitts and Nevis'
}, {
    latLng: [3.2, 73.22],
    name: 'Maldives'
}, {
    latLng: [35.88, 14.5],
    name: 'Malta'
}, {
    latLng: [12.05, -61.75],
    name: 'Grenada'
}, {
    latLng: [13.16, -61.23],
    name: 'Saint Vincent and the Grenadines'
}, {
    latLng: [13.16, -59.55],
    name: 'Barbados'
}, {
    latLng: [17.11, -61.85],
    name: 'Antigua and Barbuda'
}, {
    latLng: [-4.61, 55.45],
    name: 'Seychelles'
}, {
    latLng: [7.35, 134.46],
    name: 'Palau'
}, {
    latLng: [42.5, 1.51],
    name: 'Andorra'
}, {
    latLng: [14.01, -60.98],
    name: 'Saint Lucia'
}, {
    latLng: [6.91, 158.18],
    name: 'Federated States of Micronesia'
}, {
    latLng: [1.3, 103.8],
    name: 'Singapore'
}, {
    latLng: [1.46, 173.03],
    name: 'Kiribati'
}, {
    latLng: [-21.13, -175.2],
    name: 'Tonga'
}, {
    latLng: [15.3, -61.38],
    name: 'Dominica'
}, {
    latLng: [-20.2, 57.5],
    name: 'Mauritius'
}, {
    latLng: [26.02, 50.55],
    name: 'Bahrain'
}, {
    latLng: [0.33, 6.73],
    name: 'SÃ£o TomÃ© and PrÃncipe'
}]
const containerStyle = {
  width: "100%",
  height: "350px"
};

export default function VectorMaps(){
  return (
    <VectorMap
    map={"world_mill"}
    hoverOpacity= {0.7}
    hoverColor= {false}
    regionStyle= {regionStyle}
    markerStyle= {markerStyle}
    backgroundColor="transparent"
    series={ series}
    containerStyle={containerStyle}
    scaleColors = {['#7faff4', '#7faff4']}
    normalizeFunction = "polynomial"
    />
  );
}