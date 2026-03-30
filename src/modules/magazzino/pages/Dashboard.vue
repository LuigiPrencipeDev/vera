<script>
import BoxDataDashboard from "../components/BoxDataDashboard.vue";
import TabellaMagazziniList from "../components/TabellaMagazziniList.vue";
export default {
    name: "ContainerOfficina",

    components: {
        BoxDataDashboard,
        TabellaMagazziniList
    }

}

</script>

<template>

    <div style="width: 100%;">
        <div>
            <b>Modulo Magazzino</b>
            <div class="miniText">
                Gestisci il tuo magazzino e tieni tutto sotto controllo in un unico spazio
            </div>
        </div>

         <BoxDataDashboard />

         <div class="containerTable w-100">
            <TabellaMagazziniList />
         </div>

    </div>

</template>

<style>



</style>