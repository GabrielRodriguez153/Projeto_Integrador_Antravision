var mymap = L.map('mapa').setView([-24.5031, -47.8431], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(mymap);

        L.marker([-24.4674, -47.8919]).addTo(mymap)
            .bindPopup('Sítio A')
            .openPopup();

        L.marker([-24.4244,-47.9402]).addTo(mymap)
            .bindPopup('Sítio B')
            .openPopup();