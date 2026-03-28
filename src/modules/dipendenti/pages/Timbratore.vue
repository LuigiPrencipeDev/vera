<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const currentTime = ref("")

let interval = null

const updateTime = () => {
  const now = new Date()

  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const seconds = String(now.getSeconds()).padStart(2, "0")

  currentTime.value = `${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>

    <div class="w-100 d-flex align-items-center justify-content-center">
        <div class="text-center">
            <div>
                <div>
                    <img src="/images/veraLogoPng.png" style="width: 40px;" alt="">
                </div>
                <div class="mt-1" style="font-size: 22px;font-weight: 600; color: #20986E;">
                    <b>Vera</b>
                </div>
                <div style="font-size: 12px; color: #6B7280; font-weight:500;">
                    Un prodotto a cura di <a href="https://prensys.it/">Prensys</a>
                </div>
                <div style="font-size: 65px; font-weight: 600;">
                    {{ currentTime }}
                </div>
            </div>

            <div class="inputGroup d-flex gap-4">
                <input type="text" class="timbratoreInput" />
                <input type="text" class="timbratoreInput" />
            </div>
            <div class="mt-3" style="font-size: 20px; font-weight: 600;">
                --
            </div>
        </div>
    </div>

</template>

<style>
.inputGroup .timbratoreInput {
    width: 300px;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    outline: none;
    text-align: center;
    font-size: 40px;
}
</style>