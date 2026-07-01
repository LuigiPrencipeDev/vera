<script>
import BookingForm from "../components/BookingForm.vue";
export default {
    name: "AlbergoHome",

    components: {
        BookingForm
    }
}

</script>

<template>

    <div class="w-100">
        <div>
            <b>Crea una prenotazione manuale</b>
            <div class="miniText">
                In questa sezione puoi creare una prenotazione manuale per un cliente. Compila i campi richiesti e conferma la prenotazione.
            </div>

            <BookingForm />

        </div>



    </div>

</template>