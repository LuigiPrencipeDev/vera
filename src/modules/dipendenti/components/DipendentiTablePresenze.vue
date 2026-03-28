<script setup>
import { ref } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
// Importa l'oggetto del tema specifico
import { themeQuartz } from 'ag-grid-community'

// Definiamo il tema in una variabile
const myTheme = themeQuartz.withParams({
    // Se vuoi personalizzare i colori qui (opzionale, altrimenti usa il CSS)
    accentColor: '#2FD89D',
    headerBackgroundColor: '#f9fafb',
    fontSize: '13px',
});

const getPercent = (value) => {
    if (!value) return 0
    return parseInt(value.replace('%', ''))
}

const percentClassRules = {
    'cell-red': (params) => getPercent(params.value) < 90,
    'cell-yellow': (params) => {
        const val = getPercent(params.value)
        return val >= 90 && val <= 95
    },
    'cell-green': (params) => {
        const val = getPercent(params.value)
        return val > 95 && val <= 100
    },
    'cell-blue': (params) => getPercent(params.value) > 100
}

const columnDefs = ref([
    { field: 'dipendente', headerName: 'Dipendente', flex: 5 },
    { field: 'gennaio', headerName: 'G', flex: 1, cellClassRules: percentClassRules },
    { field: 'febbraio', headerName: 'F', flex: 1, cellClassRules: percentClassRules },
    { field: 'marzo', headerName: 'M', flex: 1, cellClassRules: percentClassRules },
    { field: 'aprile', headerName: 'A', flex: 1, cellClassRules: percentClassRules },
    { field: 'maggio', headerName: 'M', flex: 1, cellClassRules: percentClassRules },
    { field: 'giugno', headerName: 'G', flex: 1, cellClassRules: percentClassRules },
    { field: 'luglio', headerName: 'L', flex: 1, cellClassRules: percentClassRules },
    { field: 'agosto', headerName: 'A', flex: 1, cellClassRules: percentClassRules },
    { field: 'settembre', headerName: 'S', flex: 1, cellClassRules: percentClassRules },
    { field: 'ottobre', headerName: 'O', flex: 1, cellClassRules: percentClassRules },
    { field: 'novembre', headerName: 'N', flex: 1, cellClassRules: percentClassRules },
    { field: 'dicembre', headerName: 'D', flex: 1, cellClassRules: percentClassRules },
])

const rowData = ref([
    { dipendente: 'Mario Rossi', gennaio: '100%', febbraio: '94%', marzo: '99%', aprile: '87%', maggio: '88%', giugno: '100%', luglio: '66%', agosto: '66%', settembre: '100%', ottobre: '110%', novembre: '105%', dicembre: '80%' },
    { dipendente: 'Luigi Bianchi', gennaio: '100%', febbraio: '100%', marzo: '100%', aprile: '100%', maggio: '100%', giugno: '100%', luglio: '100%', agosto: '100%', settembre: '100%', ottobre: '100%', novembre: '100%', dicembre: '100%' },
    { dipendente: 'Giulia Verdi', gennaio: '90%', febbraio: '85%', marzo: '95%', aprile: '80%', maggio: '90%', giugno: '95%', luglio: '85%', agosto: '85%', settembre: '90%', ottobre: '95%', novembre: '90%', dicembre: '85%' },
])

const mesi = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
]

const mesiFiltro = ref([])
const selectedMonth = ref(null)

const generaMesiFiltro = () => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    mesiFiltro.value = []

    for (let i = 2; i >= 0; i--) {
        let monthIndex = currentMonth - i
        let year = currentYear

        // gestione anno precedente
        if (monthIndex < 0) {
            monthIndex += 12
            year -= 1
        }

        mesiFiltro.value.push({
            label: `${mesi[monthIndex]} ${year}`,
            value: {
                month: monthIndex,
                year: year
            }
        })
    }

    // default = mese corrente
    selectedMonth.value = mesiFiltro.value[mesiFiltro.value.length - 1].value
}

generaMesiFiltro()

const search = ref('')
</script>
<template>
    <div class="mt-5">
        <div class="inputGroup" style="width: 200px;">
            <label for="">Mese</label>
            <select v-model="selectedMonth">
                <option v-for="mese in mesiFiltro" :key="mese.value" :value="mese.value">
                    {{ mese.label }}
                </option>
            </select>
        </div>
        <div class="d-flex align-items-center justify-content-between mt-4">
            <div>
                <b>Lista mansioni</b>
                <div class="miniText">
                    Visualizza tutte le mansioni
                </div>
            </div>
            <div class="inputGroup">
                <input v-model="search" placeholder="Cerca..." class=" mb-3" />
            </div>
        </div>


        <div class="table-container">
            <ag-grid-vue :columnDefs="columnDefs" :paginationPageSize="20" :rowData="rowData" :quickFilterText="search"
                :pagination="true" :theme="myTheme" style="width: 100%; height: 100%;">
            </ag-grid-vue>
        </div>
    </div>
</template>

<style>
.cell-red {
    background-color: #ff6a004d;
}

.cell-yellow {
    background-color: #fbff003c;
}

.cell-green {
    background-color: #2FD89D20;
    /* border: 1px solid #2FD89D; */
}

.cell-blue {
    background-color: #0091ff3c;
}


.table-container {
    height: 400px;
    width: 100%;
}

/* Sostituisci .ag-theme-alpine con .ag-theme-quartz */
.ag-theme-quartz {
    --ag-header-background-color: #f9fafb;
    --ag-header-foreground-color: #111827;
    --ag-border-color: #e5e7eb;
    --ag-row-hover-color: #f3f4f6;
    --ag-font-size: 13px;
    --ag-grid-size: 3px;
    /* controlla la densità (padding) */
}

/* Per rendere le righe più alte come volevi tu */
.ag-theme-quartz .ag-row {
    --ag-line-height: 55px;
}

.inputSearchTable {
    width: 300px;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
    transition: all 0.2s ease;
}

.inputSearch:focus {
    border-color: #2FD89D;
    box-shadow: 0 0 0 3px #2FD89D20;
}
</style>