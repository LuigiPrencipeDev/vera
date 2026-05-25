<script>

</script>

<template>

    <div class="w-100">
        <div>
            <b>Movimenta merce tra magazzini</b>
            <div class="miniText">
                In questa sezione puoi movimentare la merce tra diversi magazzini, inserendo tutte le informazioni
                necessarie per gestirlo al meglio
            </div>
        </div>

        <div class="mt-5 d-flex align-items-center justify-content-between">
            <div class="boxMovimentaMerce" style="">
                <i class="bi bi-box-seam me-3"></i>
                <div>Scegli merce</div>
            </div>
            <div class="boxMovimentaMerce" style="">
                <i class="bi bi-house me-3"></i>
                <div>Scegli Magazzino di partenza</div>
            </div>

            <div class="d-flex align-items-center justify-content-center gap-5">
                <div class="lineBetween"></div>
                <i class="bi bi-truck" style="font-size: 50px;color: var(--primary-color);"></i>
                <div class="lineBetween"></div>
            </div>

            <div class="boxMovimentaMerce" style="">
                <i class="bi bi-house me-3"></i>
                <div>Scegli Magazzino di arrivo</div>
            </div>
        </div>

        <div class="mt-5">
            <div>
                <b>Riepilogo Movimentazione</b>
            </div>

            <div class="miniText">
                Qui puoi vedere un riepilogo della movimentazione, con tutte le informazioni inserite e la possibilità di confermare o modificare i dati prima di procedere con la movimentazione vera e propria.
            </div>
        </div>
    </div>

</template>

<style>
.lineBetween {
    width: 100px;
    height: 1px;
    background-color: #ccc;
}

.boxMovimentaMerce {
    width: 350px;
    height: 150px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 30px;
    font-size: 18px;
    color: #555;
}
</style>