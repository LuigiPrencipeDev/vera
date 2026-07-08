<script>
</script>

<template>

    <div class="inputGroup ">
        <label for="">Prompt</label>
        <textarea name="" rows="15" id="promptAi" placeholder="Es. Devo ospitare un gruppo di 20 persone per 3 giorni, mi serve un preventivo per il soggiorno in hotel con colazione e cena inclusa. 
Organizzali in 5 camere suite e 5 camere matrimoniali, con check-in il 10 luglio e check-out il 13 luglio.
Nome della prenotazione: Gruppo Spagna.
Pagamento acconto personalizzato di 1.000 euro su Unicredit.
Telefono: 333 1234567.
Email: cliente@esempio.com.
Arrivo previsto dopo le ore 20:00.
Intolleranza al glutine comunicata in fase di prenotazione.
"></textarea>
    </div>

    <div class="d-flex flex-column align-items-center justify-content-center mt-3">
        <button class="generalButton">
            Genera Preventivo
        </button>
        <div class="miniText mt-2">
            Questa operazione genererà un preventivo <b>da revisionare</b> basato sulle informazioni fornite.
        </div>
    </div>

    <div class="mt-5">
        <!-- Qui puoi aggiungere la logica per visualizzare il preventivo generato dall'IA, genera card dove mostrare le informazioni del preventivo e un pulsante per confermare o modificare il preventivo. -->

        <div>
            <b>Risultato del prompt</b>
            <div class="miniText">
                Risultato generato dall'IA basato sul prompt fornito. Puoi visualizzare le informazioni del preventivo e
                decidere se confermare o modificare il preventivo.
            </div>
        </div>

        <div class="boxPrompResultConfiguration d-flex flex-column mt-3">
            <div class="checkConfigurationBox"></div>
            <div class="titleConfigurations">
                <div><i class="bi bi-dot"></i> Configurazione 1</div>
            </div>
            <div class="d-flex align-items-start justify-content-between w-100 mt-3">
                <div class="d-flex flex-column gap-3 w-50" style="font-size:13px;">
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Nome Prenotazione:</b> Gruppo Spagna
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Telefono:</b> 333 1234567
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Email:</b> cliente@esempio.com
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Check-in:</b> 10 luglio 2024
                    </div>
                    <div>
                        <i class="bi bi-exclamation" style="color: #ff0000; font-size:18px;"></i>
                        <b>Check-out:</b> 13 luglio 2024
                        <div class="miniText" style="color: #ff0000;">
                            2 camera/e non disponibile/i per il periodo selezionato
                        </div>
                    </div>


                </div>
                <div class="d-flex flex-column gap-3 w-50" style="font-size:13px;">
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Camere:</b> 5 suite, 5 matrimoniali
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Formula:</b> Mezza pensione
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Pagamento Acconto:</b> 1.000 euro su Unicredit
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Note:</b> Arrivo previsto dopo le ore 20:00.
                        Intolleranza al glutine comunicata in fase di prenotazione.
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Importo totale dovuto:</b> 5.000 euro (Acconto escluso)
                    </div>
                </div>
            </div>

        </div>
        <div class="boxPrompResultConfiguration d-flex flex-column mt-3">
            <div class="checkConfigurationBox"></div>
            <div class="titleConfigurations">
                <div><i class="bi bi-dot"></i> Configurazione 2</div>
            </div>
            <div class="d-flex align-items-start justify-content-between w-100 mt-3">
                <div class="d-flex flex-column gap-3 w-50" style="font-size:13px;">
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Nome Prenotazione:</b> Gruppo Spagna
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Telefono:</b> 333 1234567
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Email:</b> cliente@esempio.com
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Check-in:</b> 10 luglio 2024
                    </div>
                    <div>
                        <i class="bi bi-exclamation" style="color: #ff0000; font-size:18px;"></i>
                        <b>Check-out:</b> 13 luglio 2024
                    </div>


                </div>
                <div class="d-flex flex-column gap-3 w-50" style="font-size:13px;">
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Camere:</b> 5 suite, 5 matrimoniali
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Formula:</b> Mezza pensione
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Pagamento Acconto:</b> 1.000 euro su Unicredit
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Note:</b> Arrivo previsto dopo le ore 20:00.
                        Intolleranza al glutine comunicata in fase di prenotazione.
                    </div>
                    <div>
                        <i class="bi bi-check" style="color: #20986e; font-size:18px;"></i>
                        <b>Importo totale dovuto:</b> 5.000 euro (Acconto escluso)
                    </div>
                </div>
            </div>

        </div>
        <div class="d-flex align-items-center justify-content-center mt-3">
            <button class="generalButton">
                Conferma Preventivo
            </button>
        </div>
    </div>

</template>

<style>
.boxPrompResultConfiguration {
    background-color: #f8f9fa;
    border-radius: 12px;
    border: 1px dashed #e2e8f0;
    padding: 20px;
    position: relative;
    cursor:pointer;
}

.checkConfigurationBox{
    position:absolute;
    top:20px;
    right:20px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fff;
    border: 2px solid #20986e;
}

.titleConfigurations div{
    background-color: #fff;
    display: inline-block; 
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 14px;
    color: #20986e;
    font-weight: 600;
}
</style>