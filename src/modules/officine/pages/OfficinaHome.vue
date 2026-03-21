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

.officineBoxData{
    width: 220px;
    height: 140px;
    border-radius: 20px;
    border: 1px solid #d1d1d1;
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.officineBoxData .numberData{
    font-size: 30px;
    font-weight: 600;
}

.officineBoxData b{
    font-size: 12px;
}

</style>