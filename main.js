import crewDragon from './CD.js';


    
    function initMap() {
        const map = L.map('map').setView([46.603354, 1.888334], 6);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        crewDragon.forEach(person => {
            L.marker([(person.latitude), (person.longitude)]).addTo(map)
                .bindPopup(`${person.Nom} ${person.Prenom}`)
                .openPopup();
        });
    }
    initMap();