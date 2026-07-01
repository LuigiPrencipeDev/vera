<template>

    <div class="mt-5">


        <div class="d-flex align-items-center gap-5">
            <div>
                <input type="checkbox"> Il cliente ha già pagato? (Contanti/Bonifico)
            </div>
            <div>
                <input type="checkbox"> Genera link di pagamento
            </div>            
        </div>


        <div class="mt-5">
            <b>Informazioni di prenotazione</b>
            <div class="d-flex align-items-center containerDipendentiInput">
                <div class="inputGroup">
                    <label for="nominativo">Nominativo</label>
                    <input id="nominativo" type="text" class=""
                        placeholder="Inserisci il nominativo della prenotazione" />
                </div>
                <div class="inputGroup">
                    <label for="telefono">Telefono</label>
                    <input id="telefono" type="number" class="" placeholder="Inserisci il numero di telefono" />
                </div>
                <div class="inputGroup">
                    <label for="bambini">Email</label>
                    <input id="bambini" type="email" class="" placeholder="Inserisci l'email" />
                </div>
            </div>
        </div>

        <div class="mt-5">
            <b>Gestione camera</b>
            <div class="d-flex align-items-center containerDipendentiInput">
                <div class="inputGroup">
                    <label for="animali">Camera</label>
                    <select id="animali" class="">
                        <option value="app1">Appartamento 1</option>
                        <option value="app2">Appartamento 2</option>
                        <option value="app3">Appartamento 3</option>
                        <option value="app4">Appartamento 4</option>
                        <option value="app5">Appartamento 5</option>
                    </select>
                </div>
                <div class="inputGroup">
                    <label for="adulti">Adulti</label>
                    <input id="adulti" type="number" class="" placeholder="Inserisci il numero di adulti" />
                </div>
                <div class="inputGroup">
                    <label for="bambini">Bambini</label>
                    <input id="bambini" type="number" class="" placeholder="Inserisci il numero di bambini" />
                </div>
                <div class="inputGroup">
                    <label for="animali">Animali</label>
                    <select id="animali" class="">
                        <option value="">Seleziona</option>
                        <option value="no">Nessuno</option>
                        <option value="small">Piccola taglia</option>
                        <option value="medium">Media taglia</option>
                        <option value="big">Grande taglia</option>
                    </select>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style scoped>
* {
    font-size: 14px;
}
</style>