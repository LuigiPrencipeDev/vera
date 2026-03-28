<script setup>
import { ref } from "vue"

const giorniLavorativi = ref([])
</script>

<template>

    <div class="w-100">
        <div>
            <b>Nuovo Dipendente</b>
            <div class="miniText">
                In questa sezione è possibile aggiungere un nuovo dipendente.
            </div>
        </div>

        <div class="mt-5">
            <b>Informazioni Personali</b>
            <div class="d-flex align-items-start containerDipendentiInput">
                <div class="inputGroup">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" class="" placeholder="Inserisci il nome del dipendente" />

                </div>
                <div class="inputGroup">
                    <label for="cognome">Cognome</label>
                    <input id="cognome" type="text" class="" placeholder="Inserisci il cognome del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="dataNascita">Data di Nascita</label>
                    <input id="dataNascita" type="text" class=""
                        placeholder="Inserisci la data di nascita del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="sesso">Sesso</label>
                    <input id="sesso" type="text" class="" placeholder="Inserisci il sesso del dipendente" />
                </div>
            </div>
            <div class="d-flex align-items-start containerDipendentiInput">
                <div class="inputGroup">
                    <label for="codiceFiscale">Codice fiscale</label>
                    <input id="codiceFiscale" type="text" class=""
                        placeholder="Inserisci il codice fiscale del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="email">Email</label>
                    <input id="email" type="text" class="" placeholder="Inserisci l'email del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="telefono">Telefono</label>
                    <input id="telefono" type="text" class="" placeholder="Inserisci il telefono del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="indirizzo">Indirizzo</label>
                    <input id="indirizzo" type="text" class="" placeholder="Inserisci l'indirizzo del dipendente" />
                </div>
            </div>
        </div>

        <div class="mt-5">
            <b>Informazioni lavorative</b>
            <div class="d-flex align-items-start containerDipendentiInput">
                <div class="inputGroup">
                    <label for="nome">Contratto</label>
                    <select id="nome" class="">
                        <option value="">Seleziona il contratto</option>
                        <option value="tempoIndeterminato">Tempo indeterminato</option>
                        <option value="tempoDeterminato">Tempo determinato</option>
                        <option value="partTime">Part-time</option>
                        <option value="apprendistato">Apprendistato</option>
                        <option value="Altro">Altro</option>
                    </select>
                </div>
                <div class="inputGroup">
                    <label for="nome">Mansione</label>
                    <select id="nome" class="">
                        <option value="">Seleziona la mansione</option>
                    </select>
                </div>
                <div class="inputGroup">
                    <label for="dataAssunzione">Data di Assunzione</label>
                    <input id="dataAssunzione" type="text" class=""
                        placeholder="Inserisci la data di assunzione del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="giorniFerie">Giorni ferie annuali</label>
                    <input id="giorniFerie" type="number" class=""
                        placeholder="Inserisci i giorni di ferie annuali del dipendente" />
                </div>
            </div>
        </div>

        <div class="mt-5">
            <b>Dati economici</b>
            <div class="d-flex align-items-start containerDipendentiInput">
                <div class="inputGroup">
                    <label for="ral">RAL</label>
                    <input id="ral" type="number" class="" placeholder="Inserisci il RAL del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="livello">Livello contrattuale</label>
                    <input id="livello" type="number" class="" placeholder="Inserisci il livello contrattuale" />
                </div>
                <div class="inputGroup">
                    <label for="iban">IBAN</label>
                    <input id="iban" type="text" class="" placeholder="Inserisci l'IBAN del dipendente" />
                </div>
            </div>
        </div>

        <div class="mt-5">
            <b>Orario di lavoro</b>
            <div class="d-flex align-items-start containerDipendentiInput">
                <div class="inputGroup">
                    <label for="oreSettimanali">Ore settimanali</label>
                    <input id="oreSettimanali" type="number" class=""
                        placeholder="Inserisci le ore settimanali del dipendente" />
                </div>
                <div class="inputGroup">
                    <label for="timbrature">Timbrature</label>
                    <select name="timbrature" id="timbrature">
                        <option value="">Seleziona le timbrature</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div class="inputGroup">
                    <label>Giorni lavorativi</label>
                    <div class="d-flex gap-4 pt-2">
                        <label><input type="checkbox" value="lunedì" v-model="giorniLavorativi"> Lunedì</label>
                        <label><input type="checkbox" value="martedì" v-model="giorniLavorativi"> Martedì</label>
                        <label><input type="checkbox" value="mercoledì" v-model="giorniLavorativi"> Mercoledì</label>
                        <label><input type="checkbox" value="giovedì" v-model="giorniLavorativi"> Giovedì</label>
                        <label><input type="checkbox" value="venerdì" v-model="giorniLavorativi"> Venerdì</label>
                        <label><input type="checkbox" value="sabato" v-model="giorniLavorativi"> Sabato</label>
                        <label><input type="checkbox" value="domenica" v-model="giorniLavorativi"> Domenica</label>
                    </div>
                </div>

            </div>
        </div>

        <div class="mt-5 d-flex justify-content-center gap-3">

            <button class="generalButton">
                Salva dipendente
            </button>
            <button class="greenButton">
                Annulla
            </button>

        </div>
    </div>

</template>

<style>
.containerDipendentiInput .inputGroup {
    width: calc(100% / 4 - 30px);
}

.containerDipendentiInput {
    gap: 30px;
}
</style>