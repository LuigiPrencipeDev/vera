<script>
</script>

<template>

    <div class="mt-4">

        <div class="inputGroup d-flex align-items-center gap-5">

            <div class="d-flex align-items-center justify-content-center gap-3">
                <div class="pt-3">
                    <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-tag"></i>
                </div>
                <div>
                    <label for="">Nome del tavolo</label>
                    <input type="text" id="tableName">
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-3">
                <div class="pt-3">
                    <i style="font-weight: 600; font-size: 20px; color: #000;" class="bi bi-people-fill"></i>
                </div>
                <div>
                    <label for="">Quantità</label>
                    <input type="number" id="tableName">
                </div>
            </div>


            <!-- <div class="pt-3">
                <button class="boxSmallAction" style="font-size:13px;">Blocca</button>
            </div> -->

        </div>


    </div>

    <div class="containerTableRooms mt-5">

        <div class="cardRoomsTable">
            <div>
                <b>Stanza 104 - Suite</b>
            </div>
            <div class="miniText">
                4 persone
            </div>
            <div class="miniText">
                Pensione Completa
            </div>
        </div>
        <div class="cardRoomsTable buttonToAddRooms inputGroup m-0">
            <div class="w-100">
                <select name="" id="">
                    <option value="">Aggiungi camera</option>
                    <option value="">Suite 122</option>
                    <option value="">Suite 123</option>
                    <option value="">Suite 124</option>
                    <option value="">Suite 125</option>
                </select>
            </div>
            <div class="pt-2 ">
                <button class="generalButton w-100">
                    Salva
                </button>
            </div>

        </div>

    </div>

</template>

<style>
.containerTableRooms {
    display: flex;
    align-items: stretch;
    gap: 25px;
    width: 100%;
}

.cardRoomsTable{
    min-width: 100px;
    width: calc(100% / 4 - 25px);
    background-color: #f6f6f6;
    padding: 15px;
    border: 1px dashed #d1d1d1;
    border-radius: 20px;
}

.buttonToAddRooms{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

</style>