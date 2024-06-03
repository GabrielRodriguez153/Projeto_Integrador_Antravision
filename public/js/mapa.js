var mymap = L.map('mapa').setView([-24.5031, -47.8431], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);

        L.marker([-24.4674, -47.8919]).addTo(mymap)
            .bindPopup('Sítio A')
            .openPopup();