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
          <option value="">Mese</option>
          <option value="6">Giugno</option>
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
  name: 'AlbergoDashboardData',
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        // Date di esempio (Giugno 2026)
        labels: [
          '01/06/2026', '02/06/2026', '03/06/2026', '04/06/2026', '05/06/2026',
          '06/06/2026', '07/06/2026', '08/06/2026', '09/06/2026', '10/06/2026',
          '11/06/2026', '12/06/2026', '13/06/2026', '14/06/2026', '15/06/2026',
          '16/06/2026', '17/06/2026', '18/06/2026', '19/06/2026', '20/06/2026',
          '21/06/2026', '22/06/2026', '23/06/2026', '24/06/2026', '25/06/2026',
          '26/06/2026', '27/06/2026', '28/06/2026', '29/06/2026', '30/06/2026'
        ],
        datasets: [
          {
            label: 'Camere Occupate',
            backgroundColor: '#2E7D32',
            data: [
              4500, 4200, 4000, 4600, 5000, 5500, 5200, 4800, 4700, 4900,
              5100, 5300, 5600, 5800, 5400, 5000, 4900, 5100, 5300, 5800,
              6000, 6100, 5700, 5400, 5500, 5800, 6200, 6300, 5900, 5200
            ]
          },
          {
            label: 'Non occupate (Pronte)',
            backgroundColor: '#1565C0', // Blu
            data: [
              2000, 2300, 2500, 2100, 1800, 1500, 1700, 2000, 2100, 1900,
              1800, 1700, 1400, 1200, 1500, 2000, 2200, 2000, 1800, 1400,
              1200, 1100, 1500, 1800, 1700, 1500, 1100, 1000, 1300, 1800
            ]
          },
          {
            label: 'Non occupate (Da pulire / Housekeeping)',
            backgroundColor: '#9E9E9E', // Grigio
            data: [
              1500, 1500, 1500, 1300, 1200, 1000, 1100, 1200, 1200, 1200,
              1100, 1000, 1000, 1000, 1100, 1000, 900, 900, 900, 800,
              800, 800, 800, 800, 800, 700, 700, 700, 800, 1000
            ]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 15,
              padding: 20,
              font: {
                size: 13
              }
            }
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            stacked: true, // Impila i 3 dataset uno sopra l'altro
            grid: {
              display: false
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45
            }
          },
          y: {
            stacked: true, // Mantiene l'effetto "somma" verticale delle barre
            min: 0,
            max: 9000,
            ticks: {
              stepSize: 1000
            }
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
  margin-bottom: 25px;
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