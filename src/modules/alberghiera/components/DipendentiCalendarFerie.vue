<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    height: 800,
    firstDay: 1,

    events: [
        { title: 'Ferie Luigi Prencipe', start: '2026-03-25', end: '2026-03-28' },
        { title: 'Uscita anticipata Davide Prencipe', date: '2026-03-27' }
    ],

    dateClick: (info) => {
        /* alert('Hai cliccato: ' + info.dateStr) */
    }
}
</script>

<template>
    <FullCalendar :options="calendarOptions" />
</template>

<style>
.fc-prev-button,
.fc-next-button {
    background-color: #20986E !important;
    border-radius: 100% !important;
    width: 40px !important;
    height: 40px !important;
    padding: 0 !important;
    border: none !important;
    margin-left: 10px !important;
}

.fc-daygrid-day-top a,
.fc-scrollgrid-sync-inner a {
    font-size: 13px !important;
    text-decoration: none !important;
    color: #6d6d6d !important;
}

.fc-today-button {
    font-size: 13px !important;
    text-transform: capitalize !important;
    background-color: #f6f6f6 !important;
    color: #000 !important;
}

.fc-col-header thead {
    background-color: #00ffa620 !important;
    color: #111827 !important;
    font-weight: 600 !important;
}

.fc-day-today {
    background-color: #00ffa620 !important;
}

.fc-event,
.fc-event-main {
    background-color: #20986E !important;
    border: none !important;
    border-radius: 5px !important;
    padding: 2px 3px !important;
    font-size: 11px;
}

.fc-day-sat,
.fc-day-sun {
    background-color: #f9fafb;
}
</style>