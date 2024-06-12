var mymap = L.map('mapa').setView([-24.487805, -47.847298], 13.5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(mymap);

        L.marker([-24.481580, -47.857401]).addTo(mymap)
            .bindPopup('Sítio A')
            .openPopup();

        L.marker([-24.472802, -47.865019]).addTo(mymap)
            .bindPopup('Sítio B')
            .openPopup(); 

        L.marker([-24.479892, -47.842515]).addTo(mymap)
        .bindPopup('Sítio C')
        .openPopup(); 