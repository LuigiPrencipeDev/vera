<script>
import DipendentiData from "../components/DipendentiDashboardData.vue";
import DipendentiTable from "../components/DipendentiListTable.vue";
export default {
    name: "DipendentiHome",

    components: {
        DipendentiData,
        DipendentiTable
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Dipendenti</b>
            <div class="miniText">
                Gestisci i dati dei tuoi dipendenti.
            </div>
        </div>

        <div>
            <DipendentiData />
        </div>

        <div>
            <DipendentiTable />
        </div>

    </div>

</template>