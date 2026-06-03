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
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'Nome', headerName: 'Nome', flex: 1 },
    { field: 'Cognome', headerName: 'Cognome', flex: 1 },
    { field: 'Email', headerName: 'Email', flex: 1.5 },
    { field: 'Telefono', headerName: 'Telefono', flex: 1.5 },


])

const rowData = ref([
    { id: 1, Nome: 'Luigi', Cognome: 'Prencipe', Email: 'luigi.prencipe@example.com', Telefono: '1234567890' },
    { id: 2, Nome: 'Maria', Cognome: 'Rossi', Email: 'maria.rossi@example.com', Telefono: '0987654321' },
    { id: 3, Nome: 'Giovanni', Cognome: 'Bianchi', Email: 'giovanni.bianchi@example.com', Telefono: '1122334455' }
])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between ">
            <div>
                <b>Lista clienti</b>
                <div class="miniText">
                    Visualizza tutti i clienti
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