<script>
import NoteSpeseData from "./components/NoteSpeseData.vue";
import NoteSpeseTable from "./components/NoteSpeseTable.vue";
export default {
    name: "NoteSpeseHome",

    components: {
        NoteSpeseData,
        NoteSpeseTable
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Note spese</b>
            <div class="miniText">
                Gestisci le note spese dei tuoi dipendenti, approva o rifiuta le richieste e tieni traccia delle spese
                aziendali in modo efficiente.
            </div>
        </div>

        <div>
            <NoteSpeseData />
        </div>

        <div>
            <NoteSpeseTable />
        </div>

    </div>

</template>