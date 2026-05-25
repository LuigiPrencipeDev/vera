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
    { field: 'dipendente', headerName: 'Dipendente', flex: 1 },
    { field: 'ruolo', headerName: 'Ruolo', flex: 1 },
    { field: 'RAL', headerName: 'RAL', flex: 1 },
    { field: 'data-assunzione', headerName: 'Data assunzione', flex: 1 },
    {
        headerName: 'Azione',
        flex: 1,
        cellRenderer: () => {
            const button = document.createElement('a')

            button.innerText = 'Dettagli'

            button.className = ''

            button.addEventListener('click', () => {
                alert('Dettagli dipendente')
            })

            return button
        }
    }
])

const rowData = ref([
    { codice: 'DIP001', dipendente: 'Mario Rossi', ruolo: 'Sviluppatore', RAL: '35.000€', 'data-assunzione': '01/01/2020' },
    { codice: 'DIP002', dipendente: 'Luigi Bianchi', ruolo: 'Designer', RAL: '30.000€', 'data-assunzione': '15/03/2021' },
    { codice: 'DIP003', dipendente: 'Giulia Verdi', ruolo: 'Project Manager', RAL: '40.000€', 'data-assunzione': '10/06/2019' },
    { codice: 'DIP004', dipendente: 'Francesca Neri', ruolo: 'Analista', RAL: '32.000€', 'data-assunzione': '20/11/2020' },
    { codice: 'DIP005', dipendente: 'Alessandro Russo', ruolo: 'Sviluppatore', RAL: '36.000€', 'data-assunzione': '05/02/2022' },
])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mt-5">
            <div>
                <b>Lista dipendenti</b>
                <div class="miniText">
                    Visualizza tutti i dipendenti
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