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

const columnDefs = ref([
    { field: 'codice', headerName: 'Codice', flex: 1 },
    { field: 'rimborso', headerName: 'Rimborso', flex: 1 },
    { field: 'dipendente', headerName: 'Dipendente', flex: 1 },
    { field: 'tipologia', headerName: 'Tipologia', flex: 1 },
    { field: 'fornitore', headerName: 'Fornitore', flex: 1 },
    { field: 'data-spesa', headerName: 'Data spesa', flex: 1 },

])

const rowData = ref([
    { codice: 'NS001', rimborso: '150 €', dipendente: 'Mario Rossi', tipologia: 'Viaggio', fornitore: 'Trenitalia', 'data-spesa': '2024-05-10' },
    { codice: 'NS002', rimborso: '80 €', dipendente: 'Luigi Bianchi', tipologia: 'Pasti', fornitore: 'Autogrill', 'data-spesa': '2024-05-12' },
    { codice: 'NS003', rimborso: '200 €', dipendente: 'Giulia Verdi', tipologia: 'Alloggio', fornitore: 'Hotel Roma', 'data-spesa': '2024-05-15' },
    { codice: 'NS004', rimborso: '50 €', dipendente: 'Francesca Neri', tipologia: 'Materiale', fornitore: 'Cartoleria XYZ', 'data-spesa': '2024-05-18' },
    { codice: 'NS005', rimborso: '120 €', dipendente: 'Alessandro Russo', tipologia: 'Viaggio', fornitore: 'Italo Treno', 'data-spesa': '2024-05-20' },
    

])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mt-5">
            <div>
                <b>Note spese</b>
                <div class="miniText">
                    Visualizza tutte le note spese
                </div>
            </div>
            <div class="inputGroup">
                <input v-model="search" placeholder="Cerca..." class=" mb-3" />
            </div>
        </div>
        

        <div class="table-container">
            <ag-grid-vue 
                :columnDefs="columnDefs" 
                :paginationPageSize="20"
                :rowData="rowData" 
                :quickFilterText="search"
                :pagination="true"
                :theme="myTheme" 
                style="width: 100%; height: 100%;">
            </ag-grid-vue>
        </div>
    </div>
</template>

<style>
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
  --ag-grid-size: 3px; /* controlla la densità (padding) */
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