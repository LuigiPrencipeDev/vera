<script setup>
import { computed } from 'vue'
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

// 👉 props
const props = defineProps({
  labels: Array,
  data: Array,
  label: {
    type: String,
    default: 'Dati'
  }
})

// 👉 usa computed così si aggiorna automaticamente
const chartData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: props.label,
      backgroundColor: '#2FD89D',
      data: props.data
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true
    }
  },
  datasets: {
    bar: {
      borderRadius: 20
    }
  }
}
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>