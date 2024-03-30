const crewDragon=[
    {
        Nom:"DARRAS",
        Prenom:"Sacha",
       latitude:"48.0380024",
       longitude:"-4.4852118",
       
    
    }
    ]
    
    function initMap() {
        const map = L.map('map').setView([crewDragon[0].latitude, crewDragon[0].longitude], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        L.marker([crewDragon[0].latitude, crewDragon[0].longitude]).addTo(map)
            .bindPopup('Sacha Darras')
            .openPopup();
    }
    
    initMap();