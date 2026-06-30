<script>

</script>

<template>
    <div class="w-100">
        <div>
            <b>Aggiungi una nuova lavorazione</b>
            <div class="miniText">
                Compila i campi per aggiungere una nuova lavorazione al tuo calendario
            </div>
        </div>

        <div class="mt-5">
            <b>Dati Veicolo</b>

            <div class="d-flex align-items-start containerVehicleOfficina">
                <div class="inputGroup">
                    <label for="targa">Targa</label>
                    <input id="targa" type="text" class="" placeholder="Inserisci la targa del veicolo" />

                </div>
                <div class="inputGroup">
                    <label for="marca">Marca</label>
                    <input id="marca" type="text" class="form-control" placeholder="Inserisci la marca del veicolo" />
                </div>
                <div class="inputGroup">
                    <label for="modello">Modello</label>
                    <input id="modello" type="text" class="form-control"
                        placeholder="Inserisci il modello del veicolo" />
                </div>
                <div class="inputGroup">
                    <label for="motore">Motore</label>
                    <input id="motore" type="text" class="form-control" placeholder="Inserisci il motore del veicolo" />
                </div>
            </div>
            <div class="d-flex align-items-start containerVehicleOfficina">
                <div class="inputGroup">
                    <label for="colore">Colore</label>
                    <input id="colore" type="text" class="" placeholder="Inserisci il colore del veicolo" />
                </div>
                <div class="inputGroup">
                    <label for="anno">Anno</label>
                    <input id="anno" type="text" class="" placeholder="Inserisci l'anno del veicolo" />
                </div>
            </div>
        </div>

        <div class="mt-5">
            <b>Dati Cliente</b>

            <div class="d-flex align-items-start containerVehicleOfficina">
                <div class="inputGroup">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" class="" placeholder="Inserisci il nome del cliente" />

                </div>
                <div class="inputGroup">
                    <label for="cognome">Cognome</label>
                    <input id="cognome" type="text" class="" placeholder="Inserisci il cognome del cliente" />
                </div>
                <div class="inputGroup">
                    <label for="numero">Numero</label>
                    <input id="numero" type="text" class="" placeholder="Inserisci il numero del cliente" />
                </div>
                <div class="inputGroup">
                    <label for="email">Email</label>
                    <input id="email" type="text" class="" placeholder="Inserisci l'email del cliente" />
                </div>

            </div>
        </div>

        <div class="mt-5">
            <b>Dati Lavorazione</b>

            <div class="mt-3 d-flex justify-content-between align-items-start">
                <div class="d-flex flex-column align-items-start containerTaskVehicleOfficina ">
                    <div class="d-flex align-items-stretch justify-content-between w-100">
                        <div class="inputGroup">
                            <input id="nome" type="text" class="" placeholder="Es. Sostituzione pastiglie freni" />

                        </div>
                        <button class="addTaskVehicle generalButton">
                            Aggiungi
                        </button>
                    </div>

                    <div class="w-100 mt-3 containerAppendTaskVehicleOfficina" style="">
                        <div class="elementTaskVehicle">
                            <i class="bi bi-trash3-fill text-danger"></i> Sostituzione pastiglie freni
                        </div>
                        <div class="elementTaskVehicle">
                            <i class="bi bi-trash3-fill text-danger"></i> Cambio olio motore
                        </div>
                    </div>
                </div>

                <div style="width: 48%;" class="containerPriceDataOfficina">
                    <div class="inputGroup w-100">
                        <label for="price">Costo del preventivo</label>
                        <input id="price" type="text" class="" placeholder="Inserisci il costo del preventivo" />
                        <div>
                            <span class="miniText">
                                Il costo del preventivo è facoltativo: puoi inserirlo ora oppure aggiungerlo anche in un
                                secondo momento per tenere traccia delle lavorazioni.
                            </span>
                        </div>
                    </div>
                    <div class="inputGroup">
                        <label for="deliveryDate">Data di consegna</label>
                        <input id="deliveryDate" type="date" class="" placeholder="Inserisci la data di consegna" />
                    </div>
                    <div class="inputGroup">
                        <label for="deliveryTime">Orario di consegna</label>
                        <input id="deliveryTime" type="time" class="" placeholder="Inserisci l'orario di consegna" />
                    </div>
                    <div class="w-100 gap-2 d-flex justify-content-center mt-3">
                        <button class="greenButton">
                            Stampa preventivo
                        </button>
                        <button class="generalButton ">
                            Salva preventivo
                        </button>
                    </div>
                    <div class="miniText text-center">
                        I dettagli verranno inviati al cliente via email, se hai inserito un indirizzo email valido. In caso contrario, potrai sempre accedere a questi dati direttamente dal calendario delle lavorazioni o nella dashboard principale.
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style>
.containerPriceDataOfficina .inputGroup {
    width: 48%;
}

.containerPriceDataOfficina {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.containerAppendTaskVehicleOfficina {
    height: 200px;
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;
}

.elementTaskVehicle {
    width: 100%;
    background-color: #fff;
    font-size: 13px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.containerTaskVehicleOfficina {
    width: 48%;
    padding: 15px;
    border: 1px solid #d1d1d1;
    border-radius: 20px;
}

.addTaskVehicle {
    background-color: #20986E;
    color: #fff;
    border: none;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    border-radius: 100px;
}

.containerTaskVehicleOfficina .inputGroup {
    margin: 0;
    width: calc(100% - 100px);
}

.containerVehicleOfficina .inputGroup {
    width: calc(100% / 4 - 30px);
}

.containerVehicleOfficina {
    gap: 30px;
}
</style>