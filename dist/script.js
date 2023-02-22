// Create the measure control
var measureControl = L.control.measure({
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'hectares',
    activeColor: '#bada55',
    completedColor: '#bada55'
});

// Add the measure control to the map
measureControl.addTo(map);