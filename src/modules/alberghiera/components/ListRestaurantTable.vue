<script setup>
import { ref, computed } from 'vue';
import GeneralModal from '@/components/GeneralModal.vue';
import RestaurantOrderRooms from './RestaurantOrderRooms.vue';
import EditTableRestaurant from './EditTableRestaurant.vue';

const currentDate = ref(new Date());
const isModalOpen = ref(false);
const activeComponent = ref(null); 
const currentTitle = ref("");
const currentSubtitle = ref("");


const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonthName = computed(() => {
    return currentDate.value.toLocaleString('it-IT', { month: 'long' });
});
const prevMonth = () => {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() - 1);
    currentDate.value = newDate;
};
const nextMonth = () => {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() + 1);
    currentDate.value = newDate;
};


// Gestione Modale Dinamica
const openModal = (componentName, title, subtitle = "") => {
  activeComponent.value = componentName;
  currentTitle.value = title;
  currentSubtitle.value = subtitle;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  activeComponent.value = null;
  currentTitle.value = "";
  currentSubtitle.value = "";
};
</script>


<template>

    <GeneralModal v-if="isModalOpen" :title="currentTitle" :subtitle="currentSubtitle" @close="closeModal">
        <component :is="activeComponent" />
    </GeneralModal>

    <div class="calendar-header mt-5">

        <div
            style="font-size: 20px; text-transform: capitalize; width: 200px; text-align: start; font-weight: 600; font-style: italic;">
            {{ currentMonthName }} {{ currentYear }}
        </div>
        <button @click="prevMonth" class="nav-btn"><i class="bi bi-arrow-left-short"></i></button>
        <button @click="nextMonth" class="nav-btn"><i class="bi bi-arrow-right-short"></i></button>
    </div>

    <div class="mt-5 d-flex align-items-center gap-4">

        <div class="d-flex align-items-center gap-2">
            <div class="sphereLegend fullBoard"></div>
            <div class="miniText">Stanza pensione completa</div>
        </div>
        <div class="d-flex align-items-center gap-2">
            <div class="sphereLegend halfBoard"></div>
            <div class="miniText">Stanza mezza pensione</div>
        </div>
        <div class="d-flex align-items-center gap-2">
            <div class="sphereLegend bedAndBreakfastBoard"></div>
            <div class="miniText">Stanza B&B</div>
        </div>

    </div>

    <div class="w-100 containerRoomsTableRestaurant mt-4">

        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 12</b>
                    <div class="miniText">4 persone</div>
                </div>
                <div class="buttonEditTable"
                @click="openModal(EditTableRestaurant, 'Modifica Tavolo', 'Modifica le condizioni generali del tavolo')">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>


            <div class="roomInnerRestaurant fullBoard mt-2"
            @click="openModal(RestaurantOrderRooms, 'Mario Rossi - Suite n.104', 'Pensione Completa')">
                <b>Suite n.104</b>
                <div>
                    Mario Rossi
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 13</b>
                    <div class="miniText">2 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>

            <div class="roomInnerRestaurant halfBoard mt-2">
                <b>Suite n.105</b>
                <div>
                    Ludovca Pagani
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 14</b>
                    <div class="miniText">5 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>

            <div class="roomInnerRestaurant bedAndBreakfastBoard mt-2">
                <b>Suite n.106</b>
                <div>
                    Mario Verdi
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 15</b>
                    <div class="miniText">4 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>

            <div class="roomInnerRestaurant halfBoard  mt-2">
                <b>Suite n.107</b>
                <div>
                    Mario Verdi
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 16</b>
                    <div class="miniText">3 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>


            <div class="roomInnerRestaurant fullBoard mt-2">
                <b>Suite n.104</b>
                <div>
                    Mario Rossi
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 17</b>
                    <div class="miniText">4 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>

            <div class="roomInnerRestaurant bedAndBreakfastBoard mt-2">
                <b>Suite n.106</b>
                <div>
                    Mario Verdi
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 18</b>
                    <div class="miniText">8 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>

            <div class="roomInnerRestaurant halfBoard mt-2">
                <b>Suite n.107</b>
                <div>
                    Mario Verdi
                </div>
            </div>
            <div class="roomInnerRestaurant fullBoard mt-2">
                <b>Suite n.108</b>
                <div>
                    Mario Verdi
                </div>
            </div>

        </div>
        <div class="TableSingleRoom">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <b>Tavolo 19</b>
                    <div class="miniText">6 persone</div>
                </div>
                <div class="buttonEditTable">
                    <i class="bi bi-pencil-fill"></i>
                </div>
            </div>

            <div class="roomInnerRestaurant fullBoard mt-2">
                <b>Suite n.107</b>
                <div>
                    Mario Verdi
                </div>
            </div>
            <div class="roomInnerRestaurant fullBoard mt-2">
                <b>Suite n.108</b>
                <div>
                    Mario Verdi
                </div>
            </div>

        </div>

    </div>


</template>



<style>
.calendar-header {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.nav-btn {
    cursor: pointer;
    padding: 5px 15px;
    border: none;
    background: #f6f6f6;
    border-radius: 100px;
}


.sphereLegend {
    width: 15px;
    height: 15px;
    border-radius: 50%;

}

.fullBoard {
    background-color: #a955f71a;
    border: 1px solid #a855f7;
}

.halfBoard {
    background-color: #3b83f61f;
    border: 1px solid #3b82f6;
}

.bedAndBreakfastBoard {
    background-color: #ff9e4317;
    border: 1px solid #ff9f43;
}

.containerRoomsTableRestaurant {
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
}

.TableSingleRoom {
    width: calc(100% / 6 - 20px);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #d1d1d1;
}

.TableSingleRoom div:first-child b{
    font-size: 13px;
    padding: 5px 10px;
    background-color: #2fd89d2a;
    color: #20986e !important;
    border-radius: 100px;
}

.roomInnerRestaurant {
    font-size: 14px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.buttonEditTable {
    font-size: 10px;
    width: 20px;
    height: 20px;
    background-color: #f6f6f6;
    border: 1px solid #d1d1d1;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>