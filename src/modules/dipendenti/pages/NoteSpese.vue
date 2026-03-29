<script>

import DipendentiNoteSpeseData from '../components/DipendentiNoteSpeseData.vue';
import DipendentiNoteSpeseTable from '../components/DipendentiNoteSpeseTable.vue';
import NoteSpesePendingTable from '../components/NoteSpesePendingTable.vue';

export default {
    components: {
        DipendentiNoteSpeseData,
        DipendentiNoteSpeseTable,
        NoteSpesePendingTable
    },
    data() {
        const today = new Date()

        return {
            selectedYear: today.getFullYear(),
            selectedMonth: today.getMonth() + 1,

            years: [
                today.getFullYear() - 1,
                today.getFullYear(),
                today.getFullYear() + 1
            ],

            months: [
                { value: 1, label: 'Gennaio' },
                { value: 2, label: 'Febbraio' },
                { value: 3, label: 'Marzo' },
                { value: 4, label: 'Aprile' },
                { value: 5, label: 'Maggio' },
                { value: 6, label: 'Giugno' },
                { value: 7, label: 'Luglio' },
                { value: 8, label: 'Agosto' },
                { value: 9, label: 'Settembre' },
                { value: 10, label: 'Ottobre' },
                { value: 11, label: 'Novembre' },
                { value: 12, label: 'Dicembre' }
            ]
        }
    }
}

</script>

<template>

    <div class="w-100 noteSpeseContainer">
        <div>
            <b>Note Spese</b>
            <div class="miniText">
                In questa sezione è possibile gestire le note e le spese dei dipendenti.
            </div>
        </div>

        <div>
            <DipendentiNoteSpeseData />
        </div>
        <div class="mt-5">
            <b>Scarica spese da rimborsare a:</b>
            <div class="miniText">
                Usa i filtri per indicare il mese di rimborso e scarica il file Excel con tutte le note spese approvate.
            </div>
            <div class="inputGroup d-flex gap-2">
                <select v-model="selectedMonth" name="noteSpeseMonth">
                    <option v-for="month in months" :key="month.value" :value="month.value">
                        {{ month.label }}
                    </option>
                </select>
                <select v-model="selectedYear" name="noteSpeseYear">
                    <option v-for="year in years" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>
                <button class="generalButton"><i class="bi bi-file-earmark-arrow-down"></i> Esporta Excel</button>
            </div>
        </div>
        <div class="mt-5">
            <NoteSpesePendingTable />
        </div>
        <div class="mt-5">
            <DipendentiNoteSpeseTable />
        </div>


    </div>

</template>

<style>
.noteSpeseContainer select {
    width: 200px;
}
</style>