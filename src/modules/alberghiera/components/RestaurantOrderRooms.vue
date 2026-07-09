<script></script>

<template>


    <div class="mt-5">

        <div class="containerMenuRestaurant">

            <div class="SingleMenuBlox">
                <div>
                    <b>Antipasti</b> <span class="miniText">(HB, FB)</span>
                </div>

                <div class="rowSingleMenuVoice">
                    <div>
                        <b>Parmigiana di melanzane</b>
                        <div class="miniText">
                            base di melanzane fritte e gratinate in forno con passata di pomodoro, basilico, aglio e formaggio.
                        </div>
                    </div>

                    <div class="containerButtonChoseQta">
                        <button class=" sphereChooseQta"><i class="bi bi-dash"></i></button>
                        <div class="sphereChooseQta">0</div>
                        <button class="sphereChooseQta"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="SingleMenuBlox">
                <div>
                    <b>Primi</b> <span class="miniText">(HB, FB)</span>
                </div>

                <div class="rowSingleMenuVoice">
                    <div>
                        <b>Parmigiana di melanzane</b>
                        <div class="miniText">
                            base di melanzane fritte e gratinate in forno con passata di pomodoro, basilico, aglio e formaggio.
                        </div>
                    </div>

                    <div class="containerButtonChoseQta">
                        <button class=" sphereChooseQta"><i class="bi bi-dash"></i></button>
                        <div class="sphereChooseQta">0</div>
                        <button class="sphereChooseQta"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
            </div>
            <div class="SingleMenuBlox">
                <div>
                    <b>Secondi</b> <span class="miniText">(HB, FB)</span>
                </div>

                <div class="rowSingleMenuVoice">
                    <div>
                        <b>Cotoletta di maiale</b>
                        <div class="miniText">
                            base di melanzane fritte e gratinate in forno con passata di pomodoro, basilico, aglio e formaggio.
                        </div>
                    </div>

                    <div class="containerButtonChoseQta">
                        <button class=" sphereChooseQta"><i class="bi bi-dash"></i></button>
                        <div class="sphereChooseQta">0</div>
                        <button class="sphereChooseQta"><i class="bi bi-plus"></i></button>
                    </div>
                </div>
            </div>


        </div>

    </div>


</template>

<style>

.containerMenuRestaurant{
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.SingleMenuBlox{
    background-color: #f6f6f6;
    padding: 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap:10px;
}

.rowSingleMenuVoice{
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    display: flex;
    align-items: start;
    justify-content: space-between;
}

.rowSingleMenuVoice b{
    font-style: italic;
}

.containerButtonChoseQta{
    display: flex;
    align-items: center;
    justify-content: center;
}

.containerButtonChoseQta .sphereChooseQta{
    border: 0;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 100%;
    padding: 0;
}
.containerButtonChoseQta button.sphereChooseQta:first-child{
    background-color: #b91d3728;
}
.containerButtonChoseQta button.sphereChooseQta{
    background-color: #34d0583a;
}
</style>