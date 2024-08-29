// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    checkLocationAndLogin();
});

function checkLocationAndLogin() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function success(position) {
    const userLat = position.coords.latitude;
    const userLong = position.coords.longitude;

    // Replace with your allowed latitude and longitude
    const allowedLat = 12.9142; 
    const allowedLong = 77.6234; 

    const distance = calculateDistance(userLat, userLong, allowedLat, allowedLong);

    if (distance <= 50) {
        // Simulate successful login
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = "Login successful!";
        // Redirect to another page or perform further authentication here
    } else {
        document.getElementById('message').textContent = "Login denied: You are too far from the allowed location.";
    }
}

function error() {
    document.getElementById('message').textContent = "Unable to retrieve your location.";
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radius of the Earth in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in meters
    return distance;
}
