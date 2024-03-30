const crewDragon=[
    {
        Nom:"DARRAS",
        Prenom:"Sacha",
       latitude:"48.0380024",
       longitude:"-4.4852118",
       
    
    },

    {
     Nom:"Herpoux",
     Prenom:"Franck",
     latitude: "43.656806",
     longitude: "1.277952",
    },
    {Nom:"Gorski",
    Prenom:"Anthony",
    latitude: "43.3304705",
    longitude: "5.4496847",
    },
    {

    },
    ]
    
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