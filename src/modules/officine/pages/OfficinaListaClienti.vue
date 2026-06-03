<script>
import OfficineData from "../components/OfficineData.vue";
import OfficineClientList from "../components/OfficineClientList.vue";
export default {
    name: "ContainerOfficina",

    components: {
        OfficineData,
        OfficineClientList
    }

}

</script>

<template>

    <div style="width: 100%;">
        <!-- <div>
            <b>Lista Clienti</b>
            <div class="miniText">
                Gestisci i tuoi clienti e tieni tutto sotto controllo in un unico spazio
            </div>
        </div> -->


         <div class="containerTable w-100">
            <OfficineClientList />
         </div>

    </div>

</template>

<style>



</style>