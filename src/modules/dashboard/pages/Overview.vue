<script setup>
import BarChart from '@/components/BarChart.vue';

const anni = ['2021', '2022', '2023', '2024', '2025', '2026']
const fatturato = [12000, 18000, 15000, 22000, 37450, 84500]
</script>

<template>

  <div class="containerBoxStatsDashboard">
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <div><b>Vendite YTD</b> <i class="bi bi-question-circle"></i></div>
        <div class="fatturatoYTD">
          <div class="numberStyleGeneral">
            &euro;84.500<span>,82</span>
          </div>
          <div class="scostamentoPercFatturatoYTD">
            <i class="bi bi-arrow-up-short"></i>4.2%
          </div>
        </div>
        <div class="compareFattuatoYTD">
          vs prev. €81.094,19 (1 gennaio 2024 al 27/08/2024)
        </div>
      </div>

      <div class="d-flex align-items-stratch gap-3">

        <div class="boxMainData">
          <b>Costo materiali</b> <i class="bi bi-question-circle"></i>
          <div class="numberStyleGeneral">
            €46.475<span>,82</span>
          </div>
          <div class="d-flex align-items-center justify-content-end">
            <div class="buttonArrow">
              <i class="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>

        <div class="boxMainData">
          <b>Totale ricavi</b> <i class="bi bi-question-circle"></i>
          <div class="numberStyleGeneral">
            €38.025<span>,82</span>
          </div>
          <div class="d-flex align-items-center justify-content-end">
            <div class="buttonArrow">
              <i class="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>

        <div class="boxMainData">
          <b>Magazzino con più valore</b> <i class="bi bi-question-circle"></i>
          <div class="numberStyleGeneral">
            €8.900<span>,82</span>
          </div>
          <div class="d-flex align-items-center justify-content-end">
            <div class="buttonArrow">
              <i class="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="spacerTop">
      <div><b>Servizi/prodotti più venduti YTD</b> <i class="bi bi-question-circle"></i></div>

      <div class="threeDataBar mt-2">
        <div class="d-flex align-items-center gap-2">
          <div class="pillowDataBar">
            <span class="pe-2">Consulenza Tecnica Spe...</span> <b>€28.400</b>
          </div>
          <div class="pillowDataBar">
            <span class="pe-2">Manutenzione Program...</span> <b>€19.250</b>
          </div>
          <div class="pillowDataBar">
            <span class="pe-2">Fornitura Materiali</span> <b>€12.600</b>
          </div>
        </div>

        <div class="totalPillowDatabar">
          Totale: <b style="color: var(--primary-color);">€60.250</b>
        </div>

        <button class="buttonBarData">
          Dettagli
        </button>
      </div>
    </div>

    <div class="containerGraficoFatturato spacerTop">
      <div><b>Grafico Vendite</b> <i class="bi bi-question-circle"></i></div>

      <div class="chartFatturatoContainer">
        <BarChart :labels="anni" :data="fatturato" label="Fatturato (€)" />
      </div>
    </div>


  </div>

</template>

<style>
.chartFatturatoContainer{
  height: 450px;
}

.containerGraficoFatturato {
  background-color: #f6f6f6;
  padding: 20px;
  border-radius: 20px;
}

.buttonBarData {
  background-color: var(--positive);
  border: 0;
  padding: 10px 20px;
  font-size: 13px;
  border-radius: 100px;
  color: #fff;
  font-weight: 600;
}

.totalPillowDatabar {
  font-size: 13px;
}

.pillowDataBar {
  padding: 10px;
  background-color: #fff;
  border-radius: 100px;
  font-size: 13px;
}

.threeDataBar {
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttonArrow {
  background-color: var(--positive);
  padding: 0 10px;
  border-radius: 7px;
  color: #fff;
  font-size: 12px;
}

.containerBoxStatsDashboard {
  width: 100%;
}

.scostamentoPercFatturatoYTD {
  font-size: 13px;
  background-color: var(--positive);
  color: #fff;
  padding: 2px 10px 2px 5px;
  border-radius: 10px;
}

.fatturatoYTD {
  font-size: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 20px;
}

.boxMainData {
  background-color: #f6f6f6;
  min-width: 220px;
  padding: 15px;
  border-radius: 20px;
}

.boxMainData .numberStyleGeneral {
  font-size: 20px;
  font-weight: 600;
}

.compareFattuatoYTD {
  color: #b5b5b5;
  font-weight: 600;
  font-size: 13px;
}
</style>