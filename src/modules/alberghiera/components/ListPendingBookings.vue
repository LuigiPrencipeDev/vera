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
    { field: 'cliente', headerName: 'Cliente', flex: 1 },
    { field: 'checkin', headerName: 'Check-in', flex: 1 },
    { field: 'checkout', headerName: 'Check-out', flex: 1 },
    { field: 'stanza', headerName: 'Stanza', flex: 1 },
    {
        field: 'giorniattesi',
        headerName: 'Giorni attesi',
        flex: 1,
        cellRenderer: (params) => {
            // Creiamo un contenitore badge per il testo
            const container = document.createElement('span');
            const giorni = parseInt(params.value);

            // Stampiamo il testo (aggiungendo 'gg' se vuoi mantenere lo stile di prima)
            container.innerText = `${giorni} giorno/i`;

            // Assegniamo una classe base per lo stile (es. padding, allineamento)
            container.className = 'badge-giorni';

            // Applichiamo le classi di colore in base ai giorni
            if (giorni >= 3) {
                container.classList.add('ritardo-rosso');
            } else if (giorni === 2) {
                container.classList.add('ritardo-giallo');
            }

            return container;
        }
    },
    { field: 'acconto', headerName: 'Acconto', flex: 0.5 },
    { field: 'totale', headerName: 'Totale', flex: 0.7 },
    {
        headerName: 'Azione',
        flex: 1,
        cellRenderer: () => {
            const button = document.createElement('a')

            button.innerText = 'Conferma'

            button.className = 'buttonShadowGreen'

            button.addEventListener('click', () => {
                alert('Conferma prenotazione')
            })

            return button
        }
    }
])

const rowData = ref([
    { codice: 'VP1', cliente: 'Mario Rossi', checkin: '01/01/2020', checkout: '05/01/2020', stanza: 'Suite con patio', giorniattesi: 2, acconto: '250€', totale: '500€' },
    { codice: 'VP2', cliente: 'Mario Rossi', checkin: '05/01/2020', checkout: '10/01/2020', stanza: 'Suite con patio', giorniattesi: 5, acconto: '250€', totale: '900€' },
    { codice: 'VP3', cliente: 'Mario Rossi', checkin: '01/01/2020', checkout: '15/01/2020', stanza: 'Suite con patio', giorniattesi: 1, acconto: '250€', totale: '1500€' }
])

const search = ref('')
</script>
<template>
    <div>
        <div class="d-flex align-items-center justify-content-between mt-5">

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
.table-container {
    height: 65vh;
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

/* Stile base per il contenuto della cella */
.badge-giorni {
    display: inline-block;
    align-items: center;
    line-height: 1.5;
    padding: 4px 10px;
    border-radius: 12px;
}

.ritardo-rosso {
    background-color: #ff00003b !important;
    color: #ff0000 !important;
    font-weight: bold;
}

.ritardo-giallo {
    background-color: #ffeb3b54 !important;
    color: #ffa600 !important;
    font-weight: bold;
}

.buttonShadowGreen {
    background-color: #2fd89d2a;
    padding: 5px 15px;
    border-radius: 10px;
    color: #2FD89D;
    font-weight: 600;
    text-decoration: none;
}
</style>