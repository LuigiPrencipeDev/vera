<script>
import OfficineData from "./components/OfficineData.vue";
import OfficineTable from "./components/OfficineTable.vue";
export default {
    name: "ContainerOfficina",

    components: {
        OfficineData,
        OfficineTable
    }

}

</script>

<template>

    <div style="width: 100%;">
        <div>
            <b>Modulo Officine</b>
            <div class="miniText">
                Gestisci le tue officine e tieni tutto sotto controllo in un unico spazio
            </div>
        </div>

         <OfficineData />

         <div class="containerTable w-100">
            <OfficineTable />
         </div>

    </div>

</template>

<style>



</style>