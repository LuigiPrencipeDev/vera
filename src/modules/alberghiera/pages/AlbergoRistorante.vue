<script>
import ListRestaurantTable from "../components/ListRestaurantTable.vue";
export default {
    name: "AlbergoRistorante",

    components: {
        ListRestaurantTable
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Gestisci il ristorante</b>
            <div class="miniText">
                Qui puoi gestire le prenotazioni del ristorante e gestire il menu.
            </div>
        </div>


        <ListRestaurantTable />


    </div>

</template>