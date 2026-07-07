<template>
  <div class="calendar-container">
    <!-- Header: Navigazione e Filtri -->
    <div class="calendar-header mt-5">

      <div
        style="font-size: 20px; text-transform: capitalize; width: 200px; text-align: start; font-weight: 600; font-style: italic;">
        {{ currentMonthName }} {{ currentYear }}
      </div>
      <button @click="prevMonth" class="nav-btn"><i class="bi bi-arrow-left-short"></i></button>
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
          <tr v-for="room in rooms" :key="room.id" class="room-row">
            <td class="room-name">{{ room.name }}</td>
            <td class="room-type">{{ room.type }}</td>

            <td v-for="day in daysInMonth" :key="day" :class="[
              'status-cell',
              getBookingClass(getBooking(room.id, day)),
              {
                'booking-start': isFirstDayOfBooking(room.id, day),
                'booking-end': isLastDayOfBooking(room.id, day)
              }
            ]"  @click="openModal('BookingForm', 'Prenotazione: ' + (getBooking(room.id, day).guest || '⚠️ Bloccata'), 'Dettagli di prenotazione per '+ room.name)">
              <div v-if="isFirstDayOfBooking(room.id, day)" class="booking-text-wrapper"
                :style="getDynamicWidthStyle(room.id, day)">
                <span class="booking-text">
                  {{ getBooking(room.id, day).guest || '⚠️ Bloccata' }}
                  <div>
                    {{ getBooking(room.id, day).checkIn ?? '' }} <i class="bi bi-arrow-right-short"></i> {{
                      getBooking(room.id, day).checkOut ?? '' }}
                  </div>
                </span>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <Teleport to="body">
    <!-- 👇 Lega le props :title e :subtitle alle variabili del data -->
    <GeneralModal v-if="isModalOpen" :title="currentTitle" :subtitle="currentSubtitle" @close="closeModal">
      <component :is="activeComponent" />
    </GeneralModal>
  </Teleport>
</template>

<script>
import GeneralModal from "../../../components/GeneralModal.vue";
export default {
  data() {
    return {
      currentDate: new Date(),
      isModalOpen: false,
      activeComponent: null, // 3. Stato per tracciare QUALE componente mostrare
      currentTitle: "",
      currentSubtitle: "",
      rooms: [
        {
          id: 1,
          name: 'Camera 101',
          type: 'Monolocale',
          bookings: [
            { checkIn: '01/07/2026', checkOut: '05/07/2026', status: 'confirmed', source: 'booking', guest: 'Famiglia Rossi' },
            { checkIn: '05/07/2026', checkOut: '10/07/2026', status: 'confirmed', source: 'booking', guest: 'Famiglia Lec' }, // Consecutivo sito
            { checkIn: '14/07/2026', checkOut: '19/07/2026', status: 'confirmed', source: 'airbnb', guest: 'John Smith' },
            { checkIn: '22/07/2026', checkOut: '27/07/2026', status: 'confirmed', source: 'direct', guest: 'Mario Bianchi' }
          ]
        },
        {
          id: 2,
          name: 'Camera 102',
          type: 'Monolocale',
          bookings: [
            { checkIn: '02/07/2026', checkOut: '06/07/2026', status: 'confirmed', source: 'booking', guest: 'Luca Verdi' },
            { checkIn: '08/07/2026', checkOut: '12/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Emma Watson' },
            { checkIn: '15/07/2026', checkOut: '20/07/2026', status: 'confirmed', source: 'direct', guest: 'Liam Neeson' },
            { checkIn: '24/07/2026', checkOut: '29/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Oliver Brown' }
          ]
        },
        {
          id: 3,
          name: 'Camera 103',
          type: 'Bilocale',
          bookings: [
            { checkIn: '01/07/2026', checkOut: '06/07/2026', status: 'confirmed', source: 'direct', guest: 'Roberto Neri' },
            { checkIn: '06/07/2026', checkOut: '11/07/2026', status: 'confirmed', source: 'booking', guest: 'Fam. Esposito' }, // Consecutivo sito
            { checkIn: '13/07/2026', checkOut: '18/07/2026', status: 'confirmed', source: 'direct', guest: 'Pierre Dupont' },
            { checkIn: '20/07/2026', checkOut: '25/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Stefano Bruno' }
          ]
        },
        {
          id: 4,
          name: 'Camera 104',
          type: 'Bilocale',
          bookings: [
            // BLOCCO 1: Manutenzione breve (2 notti)
            { checkIn: '04/07/2026', checkOut: '06/07/2026', status: 'blocked', source: 'direct' },
            { checkIn: '07/07/2026', checkOut: '12/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Anna Geller' },
            { checkIn: '14/07/2026', checkOut: '19/07/2026', status: 'confirmed', source: 'booking', guest: 'C. Amendola' },
            { checkIn: '22/07/2026', checkOut: '27/07/2026', status: 'confirmed', source: 'booking', guest: 'Hansi Müller' }
          ]
        },
        {
          id: 5,
          name: 'Camera 201',
          type: 'Suite',
          bookings: [
            { checkIn: '02/07/2026', checkOut: '07/07/2026', status: 'confirmed', source: 'booking', guest: 'De Angelis' },
            { checkIn: '09/07/2026', checkOut: '14/07/2026', status: 'confirmed', source: 'airbnb', guest: 'E. Rostova' },
            { checkIn: '16/07/2026', checkOut: '21/07/2026', status: 'confirmed', source: 'direct', guest: 'Tom Cruise' },
            { checkIn: '23/07/2026', checkOut: '28/07/2026', status: 'confirmed', source: 'booking', guest: 'David Beckham' }
          ]
        },
        {
          id: 6,
          name: 'Camera 202',
          type: 'Suite',
          bookings: [
            { checkIn: '01/07/2026', checkOut: '05/07/2026', status: 'confirmed', source: 'direct', guest: 'Ing. Ferri' },
            { checkIn: '07/07/2026', checkOut: '12/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Sarah Connor' },
            { checkIn: '15/07/2026', checkOut: '20/07/2026', status: 'confirmed', source: 'booking', guest: 'Bruce Wayne' },
            { checkIn: '22/07/2026', checkOut: '27/07/2026', status: 'confirmed', source: 'direct', guest: 'Clark Kent' } // Consecutivo sito
          ]
        },
        {
          id: 7,
          name: 'Camera 203',
          type: 'Appartamento',
          bookings: [
            { checkIn: '03/07/2026', checkOut: '08/07/2026', status: 'confirmed', source: 'booking', guest: 'Fam. Franz' },
            { checkIn: '10/07/2026', checkOut: '15/07/2026', status: 'confirmed', source: 'booking', guest: 'Fam. Russo' },
            { checkIn: '17/07/2026', checkOut: '22/07/2026', status: 'confirmed', source: 'airbnb', guest: 'George Lucas' },
            { checkIn: '24/07/2026', checkOut: '29/07/2026', status: 'confirmed', source: 'booking', guest: 'Steven Spielberg' }
          ]
        },
        {
          id: 8,
          name: 'Camera 204',
          type: 'Appartamento',
          bookings: [
            { checkIn: '01/07/2026', checkOut: '05/07/2026', status: 'confirmed', source: 'booking', guest: 'D. Silvestri' },
            { checkIn: '07/07/2026', checkOut: '12/07/2026', status: 'confirmed', source: 'direct', guest: 'Mastroianni' },
            // BLOCCO 2: Controllo impianti breve (1 notte)
            { checkIn: '14/07/2026', checkOut: '15/07/2026', status: 'blocked', source: 'direct' },
            { checkIn: '17/07/2026', checkOut: '22/07/2026', status: 'confirmed', source: 'booking', guest: 'Sophia Loren' },
            { checkIn: '24/07/2026', checkOut: '29/07/2026', status: 'confirmed', source: 'direct', guest: 'Robert De Niro' }
          ]
        },
        {
          id: 9,
          name: 'Dependance A',
          type: 'Villa',
          bookings: [
            { checkIn: '02/07/2026', checkOut: '06/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Brad Pitt' },
            { checkIn: '06/07/2026', checkOut: '11/07/2026', status: 'confirmed', source: 'booking', guest: 'A. Jolie' }, // Consecutivo sito
            { checkIn: '14/07/2026', checkOut: '19/07/2026', status: 'confirmed', source: 'direct', guest: 'Matt Damon' },
            { checkIn: '21/07/2026', checkOut: '26/07/2026', status: 'confirmed', source: 'direct', guest: 'Ben Affleck' }
          ]
        },
        {
          id: 10,
          name: 'Dependance B',
          type: 'Villa',
          bookings: [
            { checkIn: '03/07/2026', checkOut: '08/07/2026', status: 'confirmed', source: 'booking', guest: 'G. Clooney' },
            { checkIn: '10/07/2026', checkOut: '15/07/2026', status: 'confirmed', source: 'direct', guest: 'Lady Gaga' },
            { checkIn: '17/07/2026', checkOut: '22/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Rihanna' },
            { checkIn: '24/07/2026', checkOut: '29/07/2026', status: 'confirmed', source: 'booking', guest: 'Katy Perry' }
          ]
        },
        {
          id: 11,
          name: 'Chalet Legno',
          type: 'Bungalow',
          bookings: [
            { checkIn: '01/07/2026', checkOut: '05/07/2026', status: 'confirmed', source: 'direct', guest: 'Paolo Rossi' },
            { checkIn: '05/07/2026', checkOut: '10/07/2026', status: 'confirmed', source: 'booking', guest: 'Fam. Huber' }, // Consecutivo sito
            { checkIn: '12/07/2026', checkOut: '17/07/2026', status: 'confirmed', source: 'direct', guest: 'K. Mitnick' },
            { checkIn: '19/07/2026', checkOut: '24/07/2026', status: 'confirmed', source: 'booking', guest: 'L. Torvalds' }
          ]
        },
        {
          id: 12,
          name: 'Stanza Deluxe 1',
          type: 'Camera Singola',
          bookings: [
            { checkIn: '02/07/2026', checkOut: '06/07/2026', status: 'confirmed', source: 'direct', guest: 'A. Cattelan' },
            { checkIn: '08/07/2026', checkOut: '13/07/2026', status: 'confirmed', source: 'airbnb', guest: 'Bill Gates' },
            { checkIn: '15/07/2026', checkOut: '20/07/2026', status: 'confirmed', source: 'direct', guest: 'Mark Zuckerberg' },
            // BLOCCO 3: Ritinteggiatura camera (2 notti)
            { checkIn: '22/07/2026', checkOut: '24/07/2026', status: 'blocked', source: 'direct' },
            { checkIn: '25/07/2026', checkOut: '29/07/2026', status: 'confirmed', source: 'booking', guest: 'Elon Musk' }
          ]
        }
      ]
    };
  },
  components: {
    GeneralModal
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

    // 👇 Aggiorna il metodo per accettare anche titolo e sottotitolo
    openModal(componentName, title, subtitle = "") {
      this.activeComponent = componentName;
      this.currentTitle = title;
      this.currentSubtitle = subtitle;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.activeComponent = null;
      this.currentTitle = "";
      this.currentSubtitle = "";
    },
    prevMonth() { this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1)); },
    nextMonth() { this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + 1)); },

    // Converte una stringa "GG/MM/AAAA" in un oggetto Date reale per fare i confronti
    parseDateStr(dateStr) {
      const [day, month, year] = dateStr.split('/').map(Number);
      return new Date(year, month - 1, day);
    },

    // Cerca se un determinato giorno del mese è coperto da una prenotazione/blocco
    getBooking(roomId, day) {
      const room = this.rooms.find(r => r.id === roomId);
      if (!room) return null;

      // Crea l'oggetto data per il giorno della cella corrente
      const targetDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);

      return room.bookings.find(b => {
        const start = this.parseDateStr(b.checkIn);
        const end = this.parseDateStr(b.checkOut);
        // Il giorno è occupato se è compreso tra check-in (incluso) e check-out (escluso)
        return targetDate >= start && targetDate < end;
      }) || null;
    },

    getBookingClass(booking) {
      if (!booking) return 'free';
      if (booking.status === 'blocked') return 'status-blocked';
      return `status-confirmed-${booking.source}`;
    },

    isFirstDayOfBooking(roomId, day) {
      const currentBooking = this.getBooking(roomId, day);
      if (!currentBooking) return false;

      const start = this.parseDateStr(currentBooking.checkIn);
      const currentCellDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);

      return currentCellDate.getTime() === start.getTime();
    },

    // Ritorna vero se è l'ULTIMO giorno reale di pernottamento (checkOut - 1)
    isLastDayOfBooking(roomId, day) {
      const currentBooking = this.getBooking(roomId, day);
      if (!currentBooking) return false;

      const checkOutDate = this.parseDateStr(currentBooking.checkOut);
      const lastNightDate = new Date(checkOutDate.setDate(checkOutDate.getDate() - 1));
      const currentCellDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);

      return currentCellDate.getTime() === lastNightDate.getTime();
    },

    // Calcola quante colonne deve occupare il testo in absolute per non essere troncato subito
    getDynamicWidthStyle(roomId, day) {
      const currentBooking = this.getBooking(roomId, day);
      if (!currentBooking) return {};

      const start = this.parseDateStr(currentBooking.checkIn);
      const end = this.parseDateStr(currentBooking.checkOut);
      // Durata in giorni
      const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

      return {
        // Moltiplica il 100% della larghezza della cella per la durata della prenotazione
        // Sottraiamo un piccolo margine per l'estetica dei bordi
        width: `calc(${duration * 100}% - 8px)`,
      };
    }
  }
};
</script>

<style scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: start;
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

/* Colore verde simile a image_291f7b.jpg */
.nav-btn {
  cursor: pointer;
  padding: 5px 15px;
  border: none;
  background: #f6f6f6;
  border-radius: 100px;
}

.status-cell.booking-end {
  position: relative;
  /* Crea una linea divisoria bianca netta di 3px sul lato destro della cella */
  /* box-shadow: inset -5px 0 0 0 #000000 !important; */
}

.room-row {
  height: 48px;
}

.status-cell {
  position: relative;
  padding: 0 !important;
  border: 1px solid #e0e0e0;
  /* Mantiene la griglia allineata */
}

.status-cell:not(.free) {
  border: 0 !important;
}

/* Colori di sfondo per l'intera cella */
.status-confirmed-booking {
  background-color: #1d63b8;
}

.status-confirmed-airbnb {
  background-color: #e61e4d;
}

.status-confirmed-direct {
  background-color: #247a3a;
}

.status-cell.status-blocked {
  background-color: #d1d1d17e;
}

/* Arrotondiamo solo i bordi esterni del blocco prenotazione */
.status-cell.booking-start:not(.status-blocked) {
  box-shadow: inset 20px 0 0 0 #dbdbdb !important;
}

.status-cell.booking-end {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

/* Contenitore del testo in Absolute */
.booking-text-wrapper {
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;
  /* Evita di bloccare i click sulla tabella */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
}

/* Stile del Testo */
.booking-text {
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  padding-left: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
}

.status-blocked .booking-text {
  padding-left: 4px !important;
}

/* Testo scuro per le stanze bloccate */
.status-blocked .booking-text {
  color: #444444;
}
</style>