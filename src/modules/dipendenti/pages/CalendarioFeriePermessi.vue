<script>

import DipendentiCalendarFerie from '../components/DipendentiCalendarFerie.vue';

export default {
    components: {
        DipendentiCalendarFerie
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Calendario Ferie Permessi</b>
            <div class="miniText">
                In questa sezione è possibile gestire le ferie e i permessi dei dipendenti.
            </div>
        </div>

        <div class="mt-5">
            <DipendentiCalendarFerie />
        </div>
    </div>

</template>

<style>

</style>