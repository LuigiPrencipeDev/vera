<script>
import CalendarOfficine from './components/CalendarOfficine.vue';
export default {
    name: 'OfficinaCalendario',
    components: {
        CalendarOfficine
    }
}
</script>

<template>

    <div class="w-100">
        <div>
            <b>Calendario</b>
            <div class="miniText">
                Organizza i tuoi impegni e tieni tutto sotto controllo in un unico spazio
            </div>
        </div>
        <div class="w-100 mt-5">
            <CalendarOfficine />
        </div>
    </div>

</template>

<style>

</style>