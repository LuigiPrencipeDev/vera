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
    { field: 'nome-magazzino', headerName: 'Nome Magazzino', flex: 1 },
    { field: 'indirizzo', headerName: 'Indirizzo', flex: 1 },
    { field: 'valore', headerName: 'Valore', flex: 1 },
    { field: 'numero-prodotti', headerName: 'Numero Prodotti', flex: 1 },
])

const rowData = ref([
    { codice: 'MAG001', 'nome-magazzino': 'Magazzino Centrale', indirizzo: 'Via Roma 1, Milano', valore: '1.250.000€', 'numero-prodotti': 120 },
    { codice: 'MAG002', 'nome-magazzino': 'Magazzino Est', indirizzo: 'Corso Italia 2, Torino', valore: '800.000€', 'numero-prodotti': 80 },
    { codice: 'MAG003', 'nome-magazzino': 'Magazzino Ovest', indirizzo: 'Piazza della Libertà 3, Genova', valore: '650.000€', 'numero-prodotti': 65 },
    { codice: 'MAG004', 'nome-magazzino': 'Magazzino Nord', indirizzo: 'Viale Europa 4, Napoli', valore: '950.000€', 'numero-prodotti': 95 },
    { codice: 'MAG005', 'nome-magazzino': 'Magazzino Sud', indirizzo: 'Largo Verdi 5, Firenze', valore: '750.000€', 'numero-prodotti': 75 },
])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mt-5">
            <div>
                <b>Lista Magazzini</b>
                <div class="miniText">
                    Visualizza tutti i magazzini
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