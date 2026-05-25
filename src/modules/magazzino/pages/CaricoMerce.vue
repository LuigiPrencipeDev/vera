<script>
import ModalSearchProduct from "../components/ModalSearchProduct.vue";
export default {
    name: "CaricoMerce",
    components: {
        ModalSearchProduct
    },
    data() {
        return {
            ean: '',
            prodotto: null,
            loading: false, // Aggiunto per dare feedback all'utente
            searchType: 'ean',
            prodottiList: [], // 👈 LISTA per modale
            searchModalVisible: false
        }
    },
    computed: {
        currentProduct() {
            if (!this.prodotto) return null;

            // caso API raw
            if (this.prodotto.items && this.prodotto.items.length > 0) {
                return this.prodotto.items[0];
            }

            // caso selezione modale
            return this.prodotto;
        }
    },
    methods: {
        handleSelectProduct(item) {
            this.prodotto = item;
            this.searchModalVisible = false;
        },
        async SearchArticle() {
            if (!this.ean) {
                alert("Inserisci un codice");
                return;
            }

            this.loading = true;
            this.prodotto = null;
            let url = '';

            if (this.searchType === 'ean') {
                url = `/api/barcode.php?ean=${this.ean}`;
            } else {
                url = `/api/searchProduct.php?q=${encodeURIComponent(this.ean)}`;
            }

            try {
                const response = await fetch(url);

                /* if (!response.code) {
                    throw new Error(`Errore: ${response.status}`);
                } */

                const data = await response.json();
                console.log("RISPOSTA:", data);

                if (data.items && data.items.length > 0) {

                    if (this.searchType === 'ean') {
                        // 👉 QUI: assegni direttamente l'oggetto
                        this.prodotto = data.items[0];
                    } else {
                        // 👉 lista per modale
                        this.prodottiList = data.items;
                        this.searchModalVisible = true;
                    }

                } else {
                    alert("Nessun prodotto trovato");
                }


            } catch (error) {
                console.error("Errore durante la ricerca:", error);
                alert("Si è verificato un errore durante la chiamata API.");
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<template>
    <ModalSearchProduct :visible="searchModalVisible" :products="prodottiList" @close="searchModalVisible = false"
        @select="handleSelectProduct" />
    <div class="w-100">
        <div>
            <b>Inserisci merce</b>
            <div class="miniText">
                In questa sezione puoi gestire il carico della merce in magazzino...
            </div>
        </div>

        <div class="d-flex align-items-end gap-3 mt-5">
            <div class="inputGroup" style="width: 200px;">
                <label for="">Tipologia ricerca</label>
                <select name="" id="" v-model="searchType">
                    <option value="ean">EAN</option>
                    <option value="name">Nome</option>
                </select>
            </div>
            <div class="inputGroup mt-1">
                <label for="eanInput">Codice articolo</label>
                <input type="text" id="eanInput" style="width: 350px;" v-model="ean"
                    placeholder="Inserisci il codice dell'articolo" @keyup.enter="SearchArticle">
            </div>
            <div>
                <button class="generalButton" @click="SearchArticle" :disabled="loading">
                    {{ loading ? 'Ricerca...' : 'Cerca' }}
                </button>
            </div>
        </div>

        <div v-if="currentProduct">

            <img :src="currentProduct.images?.[0] || '/images/placeholderIMG.png'"
                style="width: 300px; height: 300px; object-fit: contain;">

            <h3>{{ currentProduct.title }}</h3>
            <p><strong>Marca:</strong> {{ currentProduct.brand || 'N/D' }}</p>
            <p><strong>Modello:</strong> {{ currentProduct.model || 'N/D' }}</p>
            <p><strong>Prezzo min:</strong> {{ currentProduct.lowest_recorded_price || 'N/D' }}</p>
            <p><strong>Prezzo max:</strong> {{ currentProduct.highest_recorded_price || 'N/D' }}</p>

        </div>

        <div class="mt-5" v-else-if="!loading">
            <div style="width:300px; height:300px; border-radius: 20px; overflow: hidden; opacity: 0.5;">
                <img src="/images/placeholderIMG.png" style="width: 100%; height: 100%; object-fit: cover;"
                    alt="Placeholder">
            </div>
        </div>
    </div>
</template>

<style></style>