<script>

</script>

<template>

    <div class=" w-100">
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <b>Agenda</b>
                <div class="miniText">
                    Organizza i tuoi impegni e tieni tutto sotto controllo in un unico spazio
                </div>

            </div>
            <div>
                <button class="greenButton">
                    <i class="bi bi-plus"></i> Aggiungi evento
                </button>
            </div>
        </div>

        <div>
            <div class="d-flex align-items-center justify-content-between w-100 mt-4 containerEventoAgenda">
                <div>
                    <b>21 Marzo 2026</b>
                    <div class="miniText">
                        Descrizione dell'evento 1
                    </div>

                </div>
                <div>
                    <button class="greenButton">
                        Modifica
                    </button>
                </div>
            </div>

            <div class="d-flex align-items-center justify-content-between w-100 mt-4 containerEventoAgenda">
                <div>
                    <b>22 Marzo 2026</b>
                    <div class="miniText">
                        Descrizione dell'evento 2
                    </div>

                </div>
                <div>
                    <button class="greenButton">
                        Modifica
                    </button>
                </div>
            </div>
        </div>        
    </div>


</template>

<style>

.containerEventoAgenda{
    padding: 20px;
    /* background-color: #f6f6f6; */
    border-radius: 25px;
    border: 1px solid #d1d1d1;
}

</style>