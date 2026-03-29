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

const rowClassRules = {
    'row-approved': params => params.data.status === true,
    'row-rejected': params => params.data.status === false,
}

const columnDefs = ref([
    { field: 'codice', headerName: 'Codice', flex: 1 },
    { field: 'rimborso', headerName: 'Rimborso', flex: 1 },
    { field: 'dipendente', headerName: 'Dipendente', flex: 1 },
    { field: 'tipologia', headerName: 'Tipologia', flex: 1 },
    { field: 'fornitore', headerName: 'Fornitore', flex: 1 },
    { field: 'data-spesa', headerName: 'Data spesa', flex: 1 },
    {
        field: 'mese-rimborso', headerName: 'Mese Rimborso', flex: 1,
        cellRenderer: (params) => {
            return `<span class="badgeMonth">${params.value}</span>`
        }
    },
    {
        field: 'action', headerName: 'Azioni', cellClass: 'text-center', flex: 0.5, cellRenderer: (params) => {
            return `<a href="#" class=""><i class="bi bi-eye-fill"></i></a>`
        }
    },

])

const rowData = ref([
    { codice: 'NS001', rimborso: '150 €', dipendente: 'Mario Rossi', tipologia: 'Viaggio', fornitore: 'Trenitalia', 'data-spesa': '2024-05-10', 'mese-rimborso': 'Maggio 2024', status: true },
    { codice: 'NS002', rimborso: '80 €', dipendente: 'Luigi Bianchi', tipologia: 'Pasti', fornitore: 'Autogrill', 'data-spesa': '2024-05-12', 'mese-rimborso': 'Maggio 2024', status: true },
    { codice: 'NS003', rimborso: '200 €', dipendente: 'Giulia Verdi', tipologia: 'Alloggio', fornitore: 'Hotel Roma', 'data-spesa': '2024-05-15', 'mese-rimborso': 'Maggio 2024', status: true },
    { codice: 'NS004', rimborso: '50 €', dipendente: 'Francesca Neri', tipologia: 'Materiale', fornitore: 'Cartoleria XYZ', 'data-spesa': '2024-05-18', 'mese-rimborso': '--', status: false },
    { codice: 'NS005', rimborso: '120 €', dipendente: 'Alessandro Russo', tipologia: 'Viaggio', fornitore: 'Italo Treno', 'data-spesa': '2024-05-20', 'mese-rimborso': 'Maggio 2024', status: true },
])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mt-5">
            <div>
                <b>Lista Note Spese gestite</b>
                <div class="miniText">
                    Visualizza tutte le note spese gestite.
                </div>
            </div>
            <div class="inputGroup">
                <input v-model="search" placeholder="Cerca..." class=" mb-3" />
            </div>
        </div>
        <div class="containerNoteSpeseLegend">
            <div class="d-flex align-items-center miniText">
                <div class="colorBadge" style="background-color: #2fd89d3f;border: 1px solid #2FD89D;"></div>Approvate
            </div>
            <div class="d-flex align-items-center miniText">
                <div class="colorBadge" style="background-color: #d0342c30;border: 1px solid #D0342C;"></div>Respinte
            </div>
        </div>


        <div class="table-container">
            <ag-grid-vue :columnDefs="columnDefs" :paginationPageSize="20" :rowData="rowData" :quickFilterText="search"
                :pagination="true" :theme="myTheme" :rowClassRules="rowClassRules" style="width: 100%; height: 100%;">
            </ag-grid-vue>
        </div>
    </div>
</template>

<style>
.badgeMonth{
    font-size: 11px;
    padding: 5px 10px;
    background-color: #FFC302;
    border-radius: 5px;
    font-weight: 500;
}

.row-approved {
    background-color: #2fd89d28 !important;
}

.row-rejected {
    background-color: #d0342c26 !important;
}

.colorBadge {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin-right: 8px;
}

.containerNoteSpeseLegend {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
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