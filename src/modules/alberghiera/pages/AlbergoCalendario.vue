<script>
import AlbergoCalendarioComponents from "../components/AlbergoCalendarioComponents.vue";
export default {
    name: "AlbergoHome",

    components: {
        AlbergoCalendarioComponents
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Calendario occupazione camere</b>
            <div class="miniText">
                Gestisci i dati delle tue camere.
            </div>

            <AlbergoCalendarioComponents />
        </div>



    </div>

</template>