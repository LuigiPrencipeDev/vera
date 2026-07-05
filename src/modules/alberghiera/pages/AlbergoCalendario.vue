<script>
import AlbergoCalendarioComponents from "../components/AlbergoCalendarioComponents.vue";
export default {
    name: "AlbergoCalendario",

    components: {
        AlbergoCalendarioComponents
    }
}

</script>

<template>

    <div class="w-100">
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <b>Calendario occupazione camere</b>
                <div class="miniText">
                    Gestisci i dati delle tue camere.
                </div>                
            </div>

            <div class="d-flex align-items-center gap-2">
                <button class="boxSmallAction">+ Prenotazione/Preventivo</button>
                <button class="boxSmallAction">Blocca camere</button>
                <button class="boxSmallAction">Attesa di conferma</button>
            </div>

        </div>
        <AlbergoCalendarioComponents />


    </div>

</template>