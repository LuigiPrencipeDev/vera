<script setup>
defineProps({
    title: {
        type: String,
        default: 'Titolo Modale' // Titolo di fallback se ti dimentichi di passarlo
    },
    subtitle: {
        type: String,
        default: ''
    }
})
console.log('test')

</script>

<template>

    <div class="overlayBlurModal">
        <div class="modalContainer"> 
            <div class="PulsanteriaModale">
                <div>
                    <button class="modalButtonPulsanteria" @click="$emit('close')"><i class="bi bi-x-lg"></i></button>
                </div>
                <div>
                    <button class="modalButtonPulsanteria">
                        <i class="bi bi-arrows-angle-expand"></i>
                    </button>
                </div>

            </div>
            <div>
                <div class="ModalTitle">
                    {{ title }}
                </div>
                <div v-if="subtitle" class="ModalUnderTitle miniText">
                    {{ subtitle }}
                </div>
            </div>

            <div class="modalBody mt-4">
                <slot></slot>
            </div>


        </div>
    </div>

</template>

<style>
.overlayBlurModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.144);
    backdrop-filter: blur(5px);
    z-index: 9999;
    display: flex;
    align-items: start;
    justify-content: center;
    overflow-y: auto;
}

.modalContainer {
    width: 100%;
    max-width: 1400px;
    margin: 20px;
    background-color: #fff;
    border-radius: 25px;
    padding: 45px;
    position: relative;
    font-family: "Montserrat", sans-serif;
}

.PulsanteriaModale {
    position: absolute;
    top: 0px;
    left: calc(100% + 20px);
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.ModalTitle {
    font-weight: 700;
}

.modalButtonPulsanteria {
    background-color: #fff;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    width: 80px;
    height: 40px;
}

.modalButtonPulsanteria:hover {
    background-color: #f0f0f0;
}
</style>