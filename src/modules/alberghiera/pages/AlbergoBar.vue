<script>


</script>


<template>

    <div class="w-100">
        <div class="d-flex align-items-center justify-content-between">
            <div>
                <b>Gestione del bar</b>
                <div class="miniText">
                    Gestisci il bar dell'hotel addebitando in camera.
                </div>
            </div>

        </div>

        <div class="d-flex align-items-stretch flex-wrap mt-4" style="gap:20px">
            <div class="boxCategoryFood gradient-arancione">
                <div>
                    <b>Alcolici</b>
                </div>
                <div>
                    12 prodotti
                </div>
            </div>
            <div class="boxCategoryFood gradient-blu">
                <div>
                    <b>Analcolici</b>
                </div>
                <div>
                    12 prodotti
                </div>
            </div>
            <div class="boxCategoryFood gradient-verde">
                <div>
                    <b>Snack</b>
                </div>
                <div>
                    12 prodotti
                </div>
            </div>
            <div class="boxCategoryFood gradient-viola">
                <div>
                    <b>Gelati</b>
                </div>
                <div>
                    12 prodotti
                </div>
            </div>
            <div class="boxCategoryFood gradient-rosso">
                <div>
                    <b>Caldi</b>
                </div>
                <div>
                    12 prodotti
                </div>
            </div>

        </div>


        <div class="containerProductAndChart mt-5">

            <div class="productSide">

                <div class="cardProduct activeCardProduct">

                    <div>
                        <div>
                            <b>Spritz</b>
                        </div>
                        <div class="miniText">
                            Prezzo: 10€
                        </div>
                    </div>

                    <div class="containerButtonChoseQtaProduct">
                        <button class="sphereChooseQtaProduct"><i class="bi bi-plus"></i></button>
                        <div class="sphereChooseQtaProduct">2</div>
                        <button class=" sphereChooseQtaProduct"><i class="bi bi-dash"></i></button>
                    </div>

                </div>
                <div class="cardProduct activeCardProduct">

                    <div>
                        <div>
                            <b>Negroni</b>
                        </div>
                        <div class="miniText">
                            Prezzo: 10€
                        </div>
                    </div>

                    <div class="containerButtonChoseQtaProduct">
                        <button class="sphereChooseQtaProduct"><i class="bi bi-plus"></i></button>
                        <div class="sphereChooseQtaProduct">1</div>
                        <button class=" sphereChooseQtaProduct"><i class="bi bi-dash"></i></button>
                    </div>

                </div>
                <div class="cardProduct">

                    <div>
                        <div>
                            <b>Calice di Prosecco</b>
                        </div>
                        <div class="miniText">
                            Prezzo: 10€
                        </div>
                    </div>

                    <div class="containerButtonChoseQtaProduct">
                        <button class="sphereChooseQtaProduct"><i class="bi bi-plus"></i></button>
                        <div class="sphereChooseQtaProduct">0</div>
                        <button class=" sphereChooseQtaProduct"><i class="bi bi-dash"></i></button>
                    </div>

                </div>

            </div>

            <div class="chartSide">

                <div>
                    <b>
                        Carrello
                    </b>
                </div>

                <div class="bodyChartProduct">

                    <div class="pt-4">
                        <div class="categoryProductChart">
                            Alcolici
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <div >
                                Spritz
                                <div class="miniText">
                                    10€/cad
                                </div>
                            </div>
                            <div>
                                x2
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <div >
                                Negroni
                                <div class="miniText">
                                    10€/cad
                                </div>
                            </div>
                            <div>
                                x1
                            </div>
                        </div>
                    </div>

                    <div class="pt-4">
                        <div class="categoryProductChart">
                            Snack
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-2">
                            <div >
                                Patatine SanCarlo
                                <div class="miniText">
                                    1€/cad
                                </div>
                            </div>
                            <div>
                                x2
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div class="w-100 inputGroup m-0">
                        <select name="" id="">
                            <option value="">Scegli camera</option>
                            <option value="">Suite 122</option>
                            <option value="">Suite 123</option>
                            <option value="">Suite 124</option>
                            <option value="">Suite 125</option>
                        </select>
                    </div>
                    <div class="mt-2">
                        <button class="generalButton w-100">Addebita 32€</button>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<style>


.boxCategoryFood {
    width: calc(100% / 5 - 20px);
    height: 130px;
    min-width: 250px;
    padding: 20px;
    border-radius: 25px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255, 255, 255, 0.6), inset -3px -3px 6px rgba(0, 0, 0, 0.2);
}

.boxCategoryFood b {
    font-size: 25px;
}

.containerProductAndChart {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.productSide,
.chartSide {
    padding: 20px;
    border: 1px solid #d1d1d1;
    border-radius: 25px;
}

.chartSide {
    width: 300px;
}

.productSide {
    flex: 1;
    margin-right: 20px;
    display: flex;
    align-items:start;
    gap: 20px;
    overflow: auto;
    flex-wrap: wrap;
    max-height: 650px;
}

.bodyChartProduct {
    height: 500px;
    overflow: auto;
}

.cardProduct {
    width: calc(100% / 5 - 20px);
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #d1d1d1;
}
.containerButtonChoseQtaProduct {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.containerButtonChoseQtaProduct button{
    background-color: #fff;
    border: 1px solid #d1d1d1;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
    color: #000;
    border-radius: 5px;
}
.containerButtonChoseQtaProduct div{
    font-size: 25px;
    font-weight: 600;
    color: #929292;
}

.activeCardProduct{
    background-color: #2fd89d2a;
    border: 1px solid #2fd89d;
}

.activeCardProduct .containerButtonChoseQtaProduct div{
    color: #000;
}

.categoryProductChart{
    background-color: #2fd89d27;
    color: #00a86d;
    font-weight: 600;
    font-size: 14px;
    padding: 3px 10px;
    border-radius: 10px;
}

</style>