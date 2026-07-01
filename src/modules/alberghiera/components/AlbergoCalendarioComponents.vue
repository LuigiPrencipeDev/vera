<template>
  <div class="calendar-container">
    <!-- Header: Navigazione e Filtri -->
    <div class="calendar-header">
      <button @click="prevMonth" class="nav-btn"><i class="bi bi-arrow-left-short"></i></button>
      <div style="font-size: 20px; text-transform: capitalize; width: 200px; text-align: center;">
        {{ currentMonthName }} {{ currentYear }}
      </div>

      <button @click="nextMonth" class="nav-btn"><i class="bi bi-arrow-right-short"></i></button>
    </div>

    <!-- Tabella Occupazione -->
    <div class="table-wrapper">
      <table class="room-table">
        <thead>
          <tr>
            <th>Camera</th>
            <th>Tipo</th>
            <th v-for="day in daysInMonth" :key="day" class="day-cell">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.id">
            <td class="room-name">{{ room.name }}</td>
            <td class="room-type">{{ room.type }}</td>
            <td v-for="day in daysInMonth" :key="day"
              :class="['status-cell', getBookingClass(getBooking(room.id, day))]">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      // Elenco delle date occupate per tutte le camere
      // Esempio nei data
      rooms: [
        {
          id: 1,
          name: 'Numero 1',
          type: 'Appartamento',
          bookings: [
            { date: '12/07/2026', status: 'confirmed', source: 'direct' },
            { date: '13/07/2026', status: 'pending', source: 'direct' }
          ]
        },
        {
          id: 2,
          name: 'Numero 2',
          type: 'Appartamento',
          bookings: [
            { date: '12/07/2026', status: 'confirmed', source: 'booking' },
            { date: '13/07/2026', status: 'pending', source: 'direct' }
          ]
        },
        {
          id: 3,
          name: 'Numero 3',
          type: 'Appartamento',
          bookings: [
            { date: '12/07/2026', status: 'confirmed', source: 'direct' },
            { date: '13/07/2026', status: 'pending', source: 'direct' }
          ]
        },
        {
          id: 4,
          name: 'Numero 4',
          type: 'Appartamento',
          bookings: [
            { date: '12/07/2026', status: 'confirmed', source: 'airbnb' },
            { date: '13/07/2026', status: 'pending', source: 'direct' }
          ]
        },
        {
          id: 5,
          name: 'Numero 3',
          type: 'Appartamento',
          bookings: [
            { date: '12/07/2026', status: 'confirmed', source: 'direct' },
            { date: '13/07/2026', status: 'pending', source: 'direct' }
          ]
        }
      ]
    };
  },
  computed: {
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      return new Date(year, month + 1, 0).getDate();
    },
    currentMonthName() {
      return this.currentDate.toLocaleString('it-IT', { month: 'long' });
    },
    currentYear() { return this.currentDate.getFullYear(); }
  },
  methods: {
    prevMonth() { this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1)); },
    nextMonth() { this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1)); },

    getBooking(roomId, day) {
      const room = this.rooms.find(r => r.id === roomId);
      if (!room) return null;

      const d = String(day).padStart(2, '0');
      const m = String(this.currentDate.getMonth() + 1).padStart(2, '0');
      const y = this.currentDate.getFullYear();
      const formattedDate = `${d}/${m}/${y}`;

      return room.bookings.find(b => b.date === formattedDate) || null;
    },

    getBookingClass(booking) {
      if (!booking) return 'free';
      if (booking.status === 'pending') return 'status-pending';
      return `status-confirmed-${booking.source}`;
    }

  }
};
</script>

<style scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.room-name,
.room-type {
  font-size: 12px;
  background-color: #f6f6f6;
}

.room-table {
  width: 100%;
  border-collapse: collapse;
}

.room-table th,
.room-table td {
  border: 1px solid #e0e0e0;
  padding: 8px;
  text-align: center;
}

.day-cell {
  min-width: 30px;
  font-size: 0.8rem;
}

/* Stato in attesa: Grigio, bordo tratteggiato */
.status-pending {
  background-color: #e0e0e0 !important;
  border: 2px dashed #9e9e9e !important;
}

/* Colori sorgenti confermate */
.status-confirmed-direct {
  background-color: #2E7D32;
}

/* Verde */
.status-confirmed-booking {
  background-color: #1565C0;
}

/* Blu */
.status-confirmed-airbnb {
  background-color: #E91E63;
}

/* Rosa/Airbnb */

.status-cell {
  transition: all 0.3s;
}

/* Colore verde simile a image_291f7b.jpg */
.nav-btn {
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  background: #2fd89d41;
  border-radius: 100px;
}
</style>