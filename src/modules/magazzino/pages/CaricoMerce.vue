<script>
export default {
    name: "CaricoMerce",

    data() {
        return {
            ean: '',
            prodotto: null
        }
    },

    methods: {
        async SearchArticle() {
            if (!this.ean) {
                alert("Inserisci un codice");
                return;
            }

            try {
                const response = await fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${this.ean}`);
                const data = await response.json();

                console.log("RISPOSTA:", data);

                if (data.items && data.items.length > 0) {
                    this.prodotto = data.items[0];
                } else {
                    alert("Prodotto non trovato");
                }

            } catch (error) {
                console.error("Errore:", error);
            }
        }
    }
}
</script>

<template>

    <div class="w-100">
        <div>
            <b>Inserisci merce</b>
            <div class="miniText">
                In questa sezione puoi gestire il carico della merce in magazzino, inserendo tutte le informazioni necessarie per tenere traccia dei movimenti e delle giacenze
            </div>
        </div>
        <div class="d-flex align-items-end gap-2">
            <div class="inputGroup mt-5">
                <label for="">Codice articolo</label>
                <input type="text" style="width: 350px;" v-model="ean"  id="" placeholder="Inserisci il codice dell'articolo">
            </div>        
            <div>
                <button class="generalButton" @click="SearchArticle">Cerca</button>
            </div>    
        </div>


        <div class="mt-5">
            <div style="width:300px; height:300px;border-radius: 20px;overflow: hidden;">
                <img src="/images/placeholderIMG.png" style="width: 100%;height: 100%;object-fit: cover;" alt="Carico Merce">
            </div>
        </div>

        <div>

        </div>
    </div>

</template>

<style>

</style>