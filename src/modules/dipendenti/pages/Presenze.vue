<script>
import DipendentiTablePresenze from '../components/DipendentiTablePresenze.vue';

export default {
    components: {
        DipendentiTablePresenze
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Gestione Presenze</b>
            <div class="miniText">
                In questa sezione è possibile gestire le presenze dei dipendenti.
            </div>
        </div>

        <div>
            <DipendentiTablePresenze />
        </div>
    </div>

</template>

<style>

</style>