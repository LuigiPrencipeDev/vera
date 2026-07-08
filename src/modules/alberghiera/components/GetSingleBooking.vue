<template>

    <div>

        <div class="mt-5 Vdisable">
            <b>Modalità di Pagamento</b>
            <div class="miniText">
                Aggiungi eventuali note alla prenotazione.
            </div>
            <div class="d-flex align-items-center gap-5 inputGroup">
                <div class="d-flex align-items-center gap-3">
                    <div class="pt-3">
                        <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-cash-coin"></i>
                    </div>
                    <div>
                        <label for="">Pagamento</label>
                        <select style="width: 250px;">
                            <option value="">Seleziona</option>
                            <option value="Bonifico BPM">Bonifico BPM</option>
                            <option value="Bonifico Unicredit">Bonifico Unicredit</option>
                            <option value="Contanti">Contanti (già saldato)</option>

                        </select>
                    </div>
                </div>

                <div class="d-flex align-items-center gap-3">
                    <div class="pt-3">
                        <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-stopwatch"></i>
                    </div>
                    <div>
                        <label for="">Scadenza</label>
                        <input type="date" id="checkin">
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div class="pt-3">
                        <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-currency-euro"></i>
                    </div>
                    <div>
                        <label for="">Acconto</label>
                        <select style="width: 250px;">
                            <option value="no">No</option>
                            <option value="Acconto 30%">Acconto 30%</option>
                            <option value="Acconto 50%">Acconto 50%</option>
                            <option value="personalizzato">Acconto personalizzato</option>
                        </select>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <div>
                        <label for="">Importo</label>
                        <input type="number" id="checkin" placeholder="0.00">
                    </div>
                </div>

            </div>

            <div>
                <div class="boxDetailsPayment">
                    <div><b>Bonifico BPM</b></div>
                    <div>
                        <div class="miniText">
                            IBAN: IT12A1234567890123456789012 (Banca BPM)
                        </div>
                        <div class="miniText">
                            Intestato a: Rossi Mario
                        </div>
                        <div class="miniText">
                            Causale: Prenotazione camera 103 - Suite
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="boxedResume">

            <div>
                <b>Riepilogo</b>
                <div class="miniText">
                    Puoi ancora fare piccole modifiche o correzioni di prezzo prima di inviare la prenotazione.
                </div>
            </div>

            <div class="row mt-4 containerAllTableResume">

                <div class="col-md-6 p-0">

                    <table class="table table-borderless mb-0">
                        <tbody>

                            <tr>
                                <td><b>Camera</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="103 - Suite" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Check-in</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="date" value="2026-08-12" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Check-out</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="date" value="2026-08-16" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Notti</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="4" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Ospiti</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="2 Adulti - 1 Bambino" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Formula</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="Pensione Completa" readonly>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <!-- COLONNA DESTRA -->
                <div class="col-md-6 p-0">

                    <table class="table table-borderless mb-0">
                        <tbody>

                            <tr>
                                <td><b>Cliente</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="Mario Rossi" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Telefono</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="333 1234567" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Email</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="mario.rossi@email.it" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Fonte</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="Prenotazione diretta" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Prezzo camera</b></td>
                                <td>
                                    <div class="inputGroup">
                                        <input type="text" value="€ 150,00 / notte" readonly>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td><b>Totale soggiorno</b></td>
                                <td>
                                    <div class="inputGroup position-relative">
                                        <input type="text" value="720,00" readonly>
                                        <i class="bi bi-currency-euro"
                                            style="position:absolute;right:15px;top:50%;transform:translateY(-50%);"></i>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <!-- NOTE -->
                <div class="col-12 mt-4 p-0">

                    <label class="mb-2">
                        <b>Note prenotazione</b>
                    </label>

                    <div class="inputGroup">
                        <textarea rows="10" readonly>
Cliente richiede una camera ai piani alti con vista mare.
Arrivo previsto dopo le ore 20:00.
Intolleranza al glutine comunicata in fase di prenotazione.
                        </textarea>
                    </div>

                </div>

                <div class="d-flex align-items-center justify-content-center gap-3 mt-4">
                    <button class="boxSmallAction" >Annulla</button>
                    <button class="generalButton">Salva Modifiche</button>
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

.tableCustom {
    border:0 !important;
    border-radius: 10px;
    overflow: hidden;
    outline: 1px solid #dadada;
}

.tableCustom button {
    font-size: 12px;
}

.tableCustom td,
.tableCustom th {
    min-width: 140px;
    padding: 8px 10px;
    font-size: 12px;
}

.tableCustom tr:not(:last-child) {
    border-bottom: 1px solid #dadada;
}

.theadCustom {
    background-color: #f8f9fa;
    color: #000;
    font-weight: 600;
}

.availableStatus {
    color: #28a745;
    font-weight: 600;
}

.selectedRow button {
    background-color: #28a745 !important;
    color: #fff !important;

}

.selectedRow {
    background-color: #e0f7e9;
}

.unavailableStatus {
    color: #dc3545;
    font-weight: 600;
}

.needsReviewStatus {
    color: #ffc107;
    font-weight: 600;
}

.boxedResume {
    width: 100%;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 15px;
    margin-top: 50px;
}

.boxedResume td {
    background-color: #f5f5f500 !important;
}

.containerAllTableResume {
    background: #fff;
    padding: 30px;
    border-radius: 15px;
    margin: 0 10px 10px 10px;
}

.boxedResume .inputGroup {
    margin: 0;
}

.boxDetailsPayment {
    background-color: #f8f9fa;
    padding: 20px 30px;
    border-radius: 10px;
    display: inline-block;
    border: 1px dashed #d1d1d1;
    margin-top: 15px;
}

.boxDetailsPayment b {
    font-size: 12px;
}
</style>