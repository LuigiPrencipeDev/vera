<template>
  <div style="max-width: 1920px;margin: auto;">
    <router-view />
  </div>

</template>

<style>
:root {
  --primary-color: #20986E;
  --positive: #2FD89D;
}

/* 1. Rosso Acceso (Red Hot) */
.gradient-rosso {
  background: linear-gradient(90deg, #ff416c 0%, #ff4b2b 100%);
}

/* 2. Verde Brillante (Electric Lime) */
.gradient-verde {
  background: linear-gradient(90deg, #11998e 0%, #38ef7c 100%);
}

/* 3. Arancione Fuoco (Fiery Orange) */
.gradient-arancione {
  background: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
}

/* 4. Grigio Scuro Metallico (Dark Steel) */
.gradient-grigio {
  background: linear-gradient(90deg, #2c3e50 0%, #4ca1af 100%);
}

/* 5. Viola Intenso (Deep Violet) */
.gradient-viola {
  background: linear-gradient(90deg, #834d9b 0%, #d04ed6 100%);
}

/* 6. Blu Elettrico (Electric Blue) */
.gradient-blu {
  background: linear-gradient(90deg, #485563 0%, #29323c 100%);
}

.numberStyleGeneral span {
  color: #b5b5b5;
}

.spacerTop {
  margin-top: 80px;
}

.bi-question-circle {
  color: #989898;
  cursor: pointer;
}

.miniText {
  font-size: 12px;
  color: #6d6d6d;
}

.greenButton,
.genericButton {
  font-size: 12px;
  color: #000;
  background-color: #f6f6f6;
  padding: 5px 25px;
  border: 1px solid #d1d1d1;
  border-radius: 100px;
  transition: all 0.2s ease-in-out;
  /* font-weight: 500; */
}

.greenButton:hover {
  background-color: var(--primary-color);
  color: #fff;
  border: 1px solid var(--primary-color);
}

.generalButton {
  background-color: #20986e;
  color: #fff;
  border: 0;
  border-radius: 100px;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 600;

  box-shadow:
    /* Ombra esterna più ampia e scura per sollevare il box */
    12px 12px 24px rgba(0, 0, 0, 0.2),
    /* Riflesso interno superiore più brillante */
    inset 3px 3px 6px rgba(255, 255, 255, 0.6),
    /* Ombra interna inferiore più marcata per il 3D */
    inset -3px -3px 6px rgba(0, 0, 0, 0.2);
}

.glassButton {
  /* Sfondo con gradiente semi-trasparente */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));

  /* Effetto vetro */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  /* Supporto Safari */

  /* Bordo sottile e luminoso */
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  /* Ombre per profondità 3D */
  box-shadow:
    8px 8px 16px rgba(0, 0, 0, 0.1),
    /* Ombra esterna per sollevare */
    inset 2px 2px 4px rgba(255, 255, 255, 0.4),
    /* Riflesso interno (effetto vetro) */
    inset -2px -2px 4px rgba(0, 0, 0, 0.1);
  /* Ombra interna per volume */

  /* Stile testo */
  padding: 5px 30px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

/* Effetto al passaggio del mouse */
.glassButton:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  box-shadow:
    10px 10px 20px rgba(0, 0, 0, 0.15),
    inset 2px 2px 6px rgba(255, 255, 255, 0.5);
}

.officineBoxData {
  width: 250px;
  height: 160px;
  border-radius: 40px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Box Shadow Potenziato */
  box-shadow:
    /* Ombra esterna più ampia e scura per sollevare il box */
    12px 12px 24px rgba(0, 0, 0, 0.2),
    /* Riflesso interno superiore più brillante */
    inset 3px 3px 6px rgba(255, 255, 255, 0.6),
    /* Ombra interna inferiore più marcata per il 3D */
    inset -3px -3px 6px rgba(0, 0, 0, 0.2);
}

.officineBoxData .numberData {
  font-size: 35px;
  font-weight: 900;
}

.officineBoxData b {
  font-size: 12px;
}
</style>