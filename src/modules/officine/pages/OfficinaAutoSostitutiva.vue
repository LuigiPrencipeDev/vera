<script>
import OfficineData from "../components/OfficineData.vue";
import OfficineAutoSostitutivaList from "../components/OfficineAutoSostitutivaList.vue";
export default {
    name: "ContainerOfficina",

    components: {
        OfficineData,
        OfficineAutoSostitutivaList
    }

}

</script>

<template>

    <div style="width: 100%;">

         <div class="containerTable w-100">
            <OfficineAutoSostitutivaList />
         </div>

    </div>

</template>

<style>



</style>