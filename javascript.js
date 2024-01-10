<h2>Javascript Navigator geolocation: 37 </h2>
    <script>
        navigator.geolocation.getCurrentPosition(function(position){
            let accuracy = position.coords.accuracy;
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let speed = position.coords.speed;
            let altitude = position.coords.altitude;
            let altitudeAccuracy = position.coords.altitudeAccuracy;
            let heading = position.coords.heading;

            document.write("accuracy= "+ accuracy+"<br>");
            document.write("latitude= "+ latitude+"<br>");
            document.write("longitude= "+ longitude+"<br>");
            document.write("latitude= "+ latitude+"<br>");
            document.write("speed= "+ speed+"<br>");
            document.write("altitude= "+ altitude+"<br>");
            document.write("altitudeAccuracy= "+ altitudeAccuracy+"<br>");
            document.write("heading= "+ heading+"<br>");
        })
    </script>

