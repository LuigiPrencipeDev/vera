<script>
</script>

<template>

    <div>
        <div class="inputGroup d-flex align-items-center gap-5">

            <div class="d-flex align-items-center justify-content-center gap-3">
                <div class="pt-3">
                    <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-calendar2-check"></i>
                </div>
                <div>
                    <label for="">Check-in</label>
                    <input type="date" id="checkin">
                </div>
                <div class="pt-3">
                    <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-arrow-right-short"></i>
                </div>
                <div>
                    <label for="">Check-out</label>
                    <input type="date" id="checkout">
                </div>
            </div>

            <div class="d-flex align-items-center gap-3">
                <div class="pt-3">
                    <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-list-check"></i>
                </div>
                <div>
                    <label for="">Stanza</label>
                    <select style="width: 250px;">
                        <option value="">Seleziona</option>
                        <option value="116">116</option>
                        <option value="117">117</option>
                        <option value="118">118</option>
                    </select>
                </div>
            </div>
            <div class="d-flex align-items-center gap-3">
                <div class="pt-3">
                    <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-ban"></i>
                </div>
                <div>
                    <label for="">Motivazione</label>
                    <select style="width: 250px;">
                        <option value="">Seleziona</option>
                        <option value="Manutenzione">Manutenzione</option>
                        <option value="Eventi speciali">Eventi speciali</option>
                        <option value="Prenotazione">Prenotazione</option>
                    </select>
                </div>
            </div>


            <div class="pt-3">
                <button class="boxSmallAction" style="font-size:13px;">Blocca</button>
            </div>

        </div>

    </div>

</template>

<style></style>