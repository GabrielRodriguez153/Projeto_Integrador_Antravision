var mymap = L.map('mapa').setView([-24.487805, -47.847298], 13.5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        }).addTo(mymap);

        L.marker([-24.481580, -47.857401]).addTo(mymap)
            .bindPopup('Sítio A <br> 20 Plantações')
            .openPopup();

        L.marker([-24.472802, -47.865019]).addTo(mymap)
            .bindPopup('Sítio B <br> 5 Plantações')
            .openPopup(); 

        L.marker([-24.490249, -47.854152]).addTo(mymap)
        .bindPopup('Sítio C <br> 10 Plantações')
        .openPopup(); 