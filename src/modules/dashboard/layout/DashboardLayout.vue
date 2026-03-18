<template>

  <div class="dashboard">

    <aside class="sidebar">
      <div class="d-flex align-items-center gap-3" style="padding-top: 20px;">
        <img src="/images/veraLogoPng.png" width="30px" alt="">
        <div>
          <b>Nome azienda</b>
        </div>
      </div>

      <div class="d-flex flex-column containerAsideMenu ps-4" style="margin-top: 80px;">
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
            <router-link to="/magazzino"><i class="bi bi-arrow-return-right pe-2"></i>Magazzino</router-link>
            <router-link to="/officina"><i class="bi bi-arrow-return-right pe-2"></i>Officina</router-link>
          </div>
        </div>
        <router-link to="/magazzino" class="mt-3">
          <div class="dotActive"></div>Notifiche
        </router-link>
        <router-link to="/officina">
          <div class="dotActive"></div>Agenda
        </router-link>
        <router-link to="/officina">
          <div class="dotActive"></div>Promemoria
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
  width: 250px;
  padding: 20px;
}

.content {
  flex: 1;
  height: 100%;
  padding: 30px;
}

.containerModule {
  background-color: #fff;
  display: flex;
  flex: 1;
  padding: 40px;
  border-radius: 30px;
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