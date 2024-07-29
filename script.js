$(document).ready(function() {
    // Initialize Leaflet map centered at a specific location
    var map = L.map('map').setView([51.505, -0.09], 13);
  
    // Add the tile layer - replace with your preferred tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Initialize a marker with a default position
    var marker = L.marker([51.5, -0.09]).addTo(map);
  
    // Function to update the marker position
    function updateMarkerPosition() {
      // Simulate fetching current GPS position
      // Replace this with actual GPS position fetching logic
      var lat = 51.5 + Math.random() * 0.01 - 0.005;
      var lng = -0.09 + Math.random() * 0.01 - 0.005;
  
      // Update marker position
      marker.setLatLng([lat, lng]);
  
      // Center map on marker
      map.setView([lat, lng]);
    }
  
    // Update marker position initially
    updateMarkerPosition();
  
    // Update marker position every 10 seconds
    setInterval(updateMarkerPosition, 10000);
  });
  