<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
    name: 'MapOverview',

    mounted() {

        // Creazione mappa
        const map = L.map('map').setView([41.9028, 12.4964], 13)

        // Tile layer OpenStreetMap
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map)

        const customIcon = L.icon({
            iconUrl: './images/Visit.png',

            iconSize: [40, 40], // larghezza, altezza
            iconAnchor: [20, 40], // punto dell'icona sulla coordinata
            popupAnchor: [0, -40] // posizione popup
        })

        // Marker esempio
        L.marker([41.9028, 12.4964], { icon: customIcon })
            .addTo(map)
        /* .bindPopup('Roma')
        .openPopup() */
    }
}
</script>

<template>
    <div class="MapOverviewContainer">
        <div id="map"></div>
    </div>
</template>

<style>
.MapOverviewContainer {
    width: 50%;
    height: 350px;
    background-color: #f6f6f6;
    border-radius: 20px;
    overflow: hidden;
}

#map {
    width: 100%;
    height: 100%;
}
</style>