<script>
import OfficineData from "../components/OfficineData.vue";
import OfficineTable from "../components/OfficineTable.vue";
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
            <b>Auto sostitutive</b>
            <div class="miniText">
                Gestisci le auto sostitutive, visualizza lo status di ognuna e tieni tutto sotto controllo in un unico spazio
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