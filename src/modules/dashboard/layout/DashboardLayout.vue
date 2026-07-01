<script>
export default {
  name: 'DashboardLayout',
  data() {
    return {
      openModules: {
        OFFICINE: false,
        DIPENDENTI: false,
        MAGAZZINO: false,
        ALBERGO: false
      }
    }
  },
  methods: {
    toggleModule(module) {
      this.openModules[module] = !this.openModules[module]
    }
  }
}

</script>

<template>

  <div class="dashboard">

    <aside class="sidebar">
      <div class="d-flex align-items-center gap-3" style="padding-top: 20px;">
        <img src="/images/veraLogoPng.png" width="30px" alt="">
        <div>
          <b>Nome azienda</b>
        </div>
      </div>

      <div class="d-flex flex-column containerAsideMenu ps-4 pb-5 pe-3"
        style="margin-top: 80px; overflow: auto; height: calc(100vh - 150px);">
        <div class="mb-5">
          <span style="font-size: 20px;font-weight: 800; color: var(--primary-color) !important;">
            Dashboard <i class="bi bi-question-circle"></i>
          </span>
          <div>
            17/10/2025 - 10:20
          </div>
        </div>
        <router-link to="/dashboard" class="activeRouter">
          <div class="dotActive"></div>Dashboard
        </router-link>
        <div>
          Moduli <i class="bi bi-arrow-down-short"></i>
          <div class="d-flex flex-column mt-2 ps-2">


            <div class="moduleList OFFICINE" :class="{ activeModule: openModules.OFFICINE }">
              <div @click="toggleModule('OFFICINE')" style="cursor: pointer;">
                <i class="bi pe-2" :class="openModules.OFFICINE ? 'bi-arrow-90deg-up' : 'bi-arrow-return-right'"></i>Gestionale Officine
              </div>
              <router-link to="/officina">
                Dashboard
              </router-link>
              <router-link to="/officina/calendario" class="mt-1">
                Calendario
              </router-link>
              <router-link to="/officina/clienti" class="mt-1">
                Lista Clienti
              </router-link>
              <router-link to="/officina/auto-sostitutiva" class="mt-1">
                Auto sostitutiva
              </router-link>
              <router-link to="/officina/lavorazione" class="mt-1">
                + Agg. lavorazione
              </router-link>
            </div>


            <div class="moduleList DIPENDENTI" :class="{ activeModule: openModules.DIPENDENTI }">
              <div @click="toggleModule('DIPENDENTI')" style="cursor: pointer;">
                <i class="bi pe-2" :class="openModules.DIPENDENTI ? 'bi-arrow-90deg-up' : 'bi-arrow-return-right'"></i> Gestionale Dipendenti
              </div>
              <router-link to="/dipendenti">
                Dashboard
              </router-link>
              <router-link to="/dipendenti/presenze" class="mt-1">
                Presenze
              </router-link>
              <router-link to="/dipendenti/calendario-ferie-permessi" class="mt-1">
                Calendario ferie permessi
              </router-link>
              <router-link to="/dipendenti/note-spese" class="mt-1">
                Note spese
              </router-link>
              <router-link to="/dipendenti/timbratore" class="mt-1">
                Timbratore
              </router-link>
              <router-link to="/dipendenti/nuovo-dipendente" class="mt-1">
                + Nuovo dipendente
              </router-link>
              <router-link to="/dipendenti/mansioni" class="mt-1">
                + Crea mansioni
              </router-link>
            </div>

            <div class="moduleList ALBERGO" :class="{ activeModule: openModules.ALBERGO }">
              <div @click="toggleModule('ALBERGO')" style="cursor: pointer;">
                <i class="bi pe-2" :class="openModules.ALBERGO ? 'bi-arrow-90deg-up' : 'bi-arrow-return-right'"></i> Gestione Alberghiera
              </div>
              <router-link to="/albergo">
                Dashboard
              </router-link>
              <router-link to="/albergo/calendario" class="mt-1">
                Calendario
              </router-link>
              <router-link to="/albergo/nuova-prenotazione" class="mt-1">
                Nuova Prenotazione
              </router-link>
              
            </div>


            <!-- <div class="moduleList MAGAZZINO" :class="{ activeModule: openModules.MAGAZZINO }">
              <div @click="toggleModule('MAGAZZINO')" style="cursor: pointer;">
                <i class="bi pe-2" :class="openModules.MAGAZZINO ? 'bi-arrow-90deg-up' : 'bi-arrow-return-right'"></i> Gestionale Magazzino
              </div>
              <router-link to="/magazzino">
                Dashboard
              </router-link>
              <router-link to="/magazzino/crea-magazzino" class="mt-1">
                + Crea magazzino
              </router-link>
              <router-link to="/dipendenti/nuovo-dipendente" class="mt-1">
                Magazzini e merce
              </router-link>
              <router-link to="/magazzino/movimenta-merce" class="mt-1">
                Movimenta merce tra magazzini
              </router-link>
              <router-link to="/magazzino/carico-merce" class="mt-1">
                Carico merce
              </router-link>
            </div> -->

          </div>
        </div>
        <router-link to="/agenda" class="mt-2">
          <div class="dotActive"></div>Agenda
        </router-link>
        <router-link to="/notifiche">
          <div class="dotActive"></div>Notifiche
        </router-link>
        <router-link to="/ticket">
          <div class="dotActive"></div>Ticket assistenza
        </router-link>
      </div>


    </aside>

    <main class="content">
      <div class="d-flex align-items-center justify-content-between pb-4">
        <div class="inputGroup d-flex align-items-center"
          style="background-color: #fff;border-radius: 100px;padding-left: 20px;">
          <i class="bi bi-search"></i>
          <input type="text" style="width: 400px;border: 0;padding: 10px 10px;"
            placeholder="Cerca qualcosa usando parole chiave...">
        </div>
        <div>

        </div>
      </div>
      <div style="color: #656565;font-size: 12px;" class=" pb-2">
        Ultimo aggiornamento: 18/03/2026 - 23:57:12 <i class="bi bi-arrow-clockwise"></i>
      </div>
      <div class="containerModule">
        <router-view />
      </div>

    </main>

  </div>

</template>

<style>
.moduleList>a:not(a:first-child) {
  display: none;
}

.moduleList.activeModule>a {
  display: block !important;
}

/* .moduleList{
  background-color: transparent;
  transition: all 0.3s ease;
} */

.activeModule {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}

.containerAsideMenu a {
  display: flex;
  align-items: center;
  gap: 10px;
}

.activeRouter .dotActive {
  display: block;
}

.dotActive {
  display: none;
  width: 6px;
  height: 6px;
  background-color: var(--positive);
  border-radius: 100px;
}

.dashboard {
  display: flex;
  height: 100vh;
  background: #F6F6F6;
}

.sidebar {
  width: 300px;
  padding: 20px;
  height: 100vh;
  overflow: hidden;
}

.content {
  flex: 1;
  height: 100%;
  padding: 30px;
  overflow: auto;
}

.containerModule {
  background-color: #fff;
  display: flex;
  flex: 1;
  padding: 40px;
  border-radius: 30px;
  min-height: 80vh;
}

.containerAsideMenu * {
  color: #6b6b6b !important;
  text-decoration: none !important;
  font-weight: 500;
  font-size: 14px;
}

.containerAsideMenu *:not(.containerAsideMenu *:last-child) {
  margin-bottom: 10px;
}

.containerAsideMenu *.activeRouter {
  color: #000000 !important;
  font-weight: 600;
}
</style>