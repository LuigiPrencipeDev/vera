<script>
import DipendentiListMansioniTable from '../components/DipendentiListMansioniTable.vue';

export default {
    components: {
        DipendentiListMansioniTable
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Crea Mansioni</b>
            <div class="miniText">
                In questa sezione è possibile creare e gestire le mansioni dei dipendenti.
            </div>
        </div>
        
        <div style="width: 500px;">
            <div class="d-flex align-items-center gap-3 mt-4 inputGroup">
                <input placeholder="Nome mansione" class="" />
                <button class="generalButton">Aggiungi</button>
            </div>
        </div>

        <div>
            <DipendentiListMansioniTable />
        </div>
    </div>

</template>

<style>

</style>