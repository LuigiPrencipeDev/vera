<script>
import AlbergoCalendarioComponents from "../components/AlbergoCalendarioComponents.vue";
import GeneralModal from "../../../components/GeneralModal.vue";
import BookingForm from "../components/BookingForm.vue";
export default {
    name: "AlbergoCalendario",

    components: {
        AlbergoCalendarioComponents,
        GeneralModal,
        BookingForm
    },

    data() {
        return {
            isModalOpen: false,
            activeComponent: null, // 3. Stato per tracciare QUALE componente mostrare
            currentTitle: "",
            currentSubtitle: ""
        };
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
        }
    }
}

</script>

<template>

    <div class="w-100">
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <b>Calendario occupazione camere</b>
                <div class="miniText">
                    Gestisci i dati delle tue camere.
                </div>
            </div>

            <div class="d-flex align-items-center gap-2">
                <button class="boxSmallAction gradient-viola text-white"
                    @click="openModal('BookingForm', 'Descrivi la prenotazione', 'Descrivi i dettagli della prenotazione e lascia che l\'IA crei la configurazione ottimale')">
                    Ai <i class="bi bi-stars"></i>
                </button>
                <button class="boxSmallAction gradient-blu text-white"
                    @click="openModal('BookingForm', 'Nuovo Preventivo', 'Compila i dettagli per la nuova prenotazione')">+
                    Preventivo
                </button>
                <button class="boxSmallAction gradient-rosso text-white">Blocca camere</button>
                <button class="boxSmallAction gradient-arancione text-white">Attesa di conferma</button>
            </div>

        </div>
        <AlbergoCalendarioComponents />

        <Teleport to="body">
            <!-- 👇 Lega le props :title e :subtitle alle variabili del data -->
            <GeneralModal v-if="isModalOpen" :title="currentTitle" :subtitle="currentSubtitle" @close="closeModal">
                <component :is="activeComponent" />
            </GeneralModal>
        </Teleport>
    </div>

</template>