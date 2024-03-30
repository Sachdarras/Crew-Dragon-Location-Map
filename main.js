const crewDragon=[
{
    Nom:"DARRAS",
    Prenom:"Sacha",
   latitude:"48.0380024",
   longitude:"-4.4852118",
   

}
]

function initMap() {
    const map = L.map('map').setView([sachaDarras.latitude, sachaDarras.longitude]);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
}

initMap();