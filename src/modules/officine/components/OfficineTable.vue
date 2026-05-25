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
    { field: 'targa', headerName: 'Targa', flex: 1 },
    { field: 'cliente', headerName: 'Cliente', flex: 1 },
    { 
        field: 'avanzamento', 
        headerName: 'Avanzamento', 
        flex: 1.5, // Diamo un po' più di spazio alla barra
        cellRenderer: (params) => {
            // params.value è il numero (es. 80)
            const val = params.value || 0;
            
            // Ritorniamo l'HTML della barra di Bootstrap
            return `
            <div class="h-100 d-flex align-items-center w-100">
                <div class="progress w-100" style="height: 20px; background-color: #e9ecef; border-radius: 10px;">
                    <div class="progress-bar" role="progressbar" 
                        style="width: ${val}%;font-size:11px; background-color: #20986E; border-radius: 100px; height: 100%; display: flex; align-items: center; justify-content: center;" 
                        aria-valuenow="${val}" aria-valuemin="0" aria-valuemax="100">
                        <b>${val}%</b>
                    </div>
                </div>                
            </div>
            `;
        }
    },
    { field: 'Data presa in carico', headerName: 'Data presa in carico', flex: 1 },
    { field: 'Data prevista consegna', headerName: 'Data prevista consegna', flex: 1 },
        {
        headerName: 'Azione',
        flex: 1,
        cellRenderer: () => {
            const button = document.createElement('a')

            button.innerText = 'Dettagli'

            button.className = ''

            button.addEventListener('click', () => {
                alert('Dettagli preparazione')
            })

            return button
        }
    }

])

const rowData = ref([
    { targa: 'EC055ZY', cliente: 'Luigi Prencipe', avanzamento: 80, 'Data presa in carico': '01-10-2023', 'Data prevista consegna': '15-10-2023' },
    { targa: 'AB123CD', cliente: 'Maria Rossi', avanzamento: 50, 'Data presa in carico': '05-10-2023', 'Data prevista consegna': '20-10-2023' },
    { targa: 'XY987ZT', cliente: 'Giovanni Bianchi', avanzamento: 30, 'Data presa in carico': '10-10-2023', 'Data prevista consegna': '25-10-2023' },

])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mt-5">
            <div>
                <b>Auto in lavorazione</b>
                <div class="miniText">
                    Visualizza tutte le auto attualmente in lavorazione
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