<template>
  <div class="dashboard-container">
    <div class="filters-panel">
      <div class="filter-group inputGroup">

        <select class="" style="width: 200px;">
          <option value="">Tipologia Camera</option>
          <option value="single">Singola</option>
          <option value="double">Doppia</option>
          <option value="triple">Tripla</option>
          <option value="suite">Suite</option>
        </select>
        
        <select class="" style="width: 200px;">
          <option value="">Anno</option>
          <option value="2026">2026</option>
        </select>
        
        <select class="" style="width: 200px;">
          <option value="">Sede / Struttura</option>
        </select>
      </div>
    </div>

    <div class="chart-card">
      <div class="chart-wrapper">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AlbergoDashboardAnnuale',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
          'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
        ],
        datasets: [
          {
            label: 'Sito Web',
            backgroundColor: '#2E7D32', // Verde
            data: [1200, 1100, 1500, 1800, 2200, 2800, 3500, 3800, 2500, 1900, 1300, 1500]
          },
          {
            label: 'Booking',
            backgroundColor: '#1565C0', // Blu
            data: [2000, 1800, 2500, 3000, 3500, 4500, 5500, 5800, 4000, 3200, 2200, 2500]
          },
          {
            label: 'Airbnb',
            backgroundColor: '#E91E63', // Rosa
            data: [800, 900, 1200, 1500, 1800, 2500, 3200, 3500, 2000, 1500, 1000, 1200]
          },
          {
            label: 'Telefono/Email',
            backgroundColor: '#FF9800', // Arancione
            data: [500, 600, 700, 800, 900, 1200, 1500, 1600, 1000, 900, 700, 800]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: { stacked: true },
          y: { 
            stacked: true,
            ticks: { stepSize: 2000 } 
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 10px;
}

/* Pannello Filtri */
.filters-panel {
  /* background-color: #f8f9fa; */
  border-radius: 12px;
  padding: 20px;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.filter-input, .filter-select {
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #4a5568;
  background-color: #fff;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.filter-input:focus, .filter-select:focus {
  border-color: #3182ce;
}

/* Box del Grafico */
.chart-card {
  border-radius: 12px;
  padding: 24px;
}

.chart-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2d3748;
}

.chart-wrapper {
  position: relative;
  height: 450px;
  width: 100%;
}
</style>