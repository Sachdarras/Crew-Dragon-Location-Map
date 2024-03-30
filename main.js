const crewDragon=[
{
    Nom:"DARRAS",
    Prenom:"Sacha",
    Adresse:"12,venelle des pommiers 29790 Pont-Croix",
   latitude:"48.0380024",
   longitude:"-4.4852118",
    photo:"./asset/photo/Darrassacha.jpeg",

}
]
const sachaDarras = crewDragon[0]
function initMap() {
    const map = L.map('map').setView([sachaDarras.latitude, sachaDarras.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([sachaDarras.latitude, sachaDarras.longitude]).addTo(map)
        .bindPopup('Sacha Darras')
        .openPopup();
}

initMap();