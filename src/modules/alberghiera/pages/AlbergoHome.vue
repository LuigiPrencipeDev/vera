<script>
import AlbergoData from "../components/AlbergoDashboardData.vue";
import AlbergoDataPerformance from "../components/AlbergoDashboardDataPerformance.vue";
import AlbergoUtilizzoCamere from "../components/AlbergoUtilizzoCamere.vue";
import AlbergoPrenotazioniGrafico from "../components/AlbergoPrenotazioniGrafico.vue";
export default {
    name: "AlbergoHome",

    components: {
        AlbergoData,
        AlbergoDataPerformance,
        AlbergoUtilizzoCamere,
        AlbergoPrenotazioniGrafico
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Situazione Operativa (Stato Camere)</b>
            <div class="miniText">
                Gestisci i dati delle tue camere.
            </div>
        </div>

        <div>
            <AlbergoData />
        </div>

        <div class="mt-5">
            <b>Utilizzo Camere</b>
            <div class="miniText">
                Visualizza l'utilizzo delle camere.
            </div>
            <AlbergoUtilizzoCamere />
        </div>

        <div class="mt-5">
            <b>Performance Economica (Occupazione & Revenue)</b>
            <div class="miniText">
                Visualizza l'utilizzo delle camere.
            </div>
            <AlbergoDataPerformance />
        </div>
        
        <div class="mt-5">
            <b>Prenotazioni</b>
            <div class="miniText">
                Visualizza le prenotazioni.
            </div>
            <AlbergoPrenotazioniGrafico />
        </div>

    </div>

</template>