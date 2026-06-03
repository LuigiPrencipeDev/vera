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
    { field: 'Targa', headerName: 'Targa', flex: 1 },
    { field: 'Marca', headerName: 'Marca', flex: 1 },
    { field: 'Modello', headerName: 'Modello', flex: 1 },
    { field: 'Descrizione', headerName: 'Descrizione', flex: 2 },
    { field: 'Stato', headerName: 'Stato', flex: 1.5 },
    

])

const rowData = ref([
    { Targa: 'AB123CD', Marca: 'Fiat', Modello: 'Panda', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'EF456GH', Marca: 'Toyota', Modello: 'Corolla', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'IJ789KL', Marca: 'Ford', Modello: 'Focus', Stato: 'Assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'AB123CD', Marca: 'Fiat', Modello: 'Panda', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'EF456GH', Marca: 'Toyota', Modello: 'Corolla', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'IJ789KL', Marca: 'Ford', Modello: 'Focus', Stato: 'Assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'AB123CD', Marca: 'Fiat', Modello: 'Panda', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'EF456GH', Marca: 'Toyota', Modello: 'Corolla', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'IJ789KL', Marca: 'Ford', Modello: 'Focus', Stato: 'Assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'AB123CD', Marca: 'Fiat', Modello: 'Panda', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'EF456GH', Marca: 'Toyota', Modello: 'Corolla', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'IJ789KL', Marca: 'Ford', Modello: 'Focus', Stato: 'Assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'EF456GH', Marca: 'Toyota', Modello: 'Corolla', Stato: 'Non assegnata', Descrizione: 'Auto sostitutiva' },
    { Targa: 'IJ789KL', Marca: 'Ford', Modello: 'Focus', Stato: 'Assegnata', Descrizione: 'Auto sostitutiva' },
])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mb-3">
            <div>
                <b>Auto Sostitutive</b>
                <div class="miniText">
                    Visualizza tutte le auto sostitutive
                </div>
            </div>
            <div class="inputGroup d-flex gap-2">
                <button class="greenButton">Aggiungi</button>
                <input v-model="search" placeholder="Cerca..." class="" />
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
    height: 600px;
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