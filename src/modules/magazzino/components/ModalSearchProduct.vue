<script>

export default {
    name: "ModalSearchProduct",
    props: {
        visible: Boolean,
        products: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}

</script>

<template>

    <div class="blurredBg" v-if="visible" @click="$emit('close')">
        <div class="modalInner container">
            <div>
                <b class="mb-4" style="font-size: 20px;">Seleziona un prodotto</b>
                <p class="miniText">Seleziona un prodotto dal database globale.</p>
            </div>
            <div style="max-height: 60vh; overflow-y: auto;">
                <div v-for="item in products" :key="item.ean" class="d-flex gap-3 align-items-center p-2"
                    style="cursor:pointer; border-bottom:1px solid #eee;" @click="$emit('select', item)">

                    <img :src="item.images?.[0] || '/images/placeholderIMG.png'"
                        style="width:60px; height:60px; object-fit:cover;">

                    <div>
                        <div><b v-html="item.title"></b></div>
                        <div class="miniText" v-html="item.brand"></div>
                    </div>

                </div>
            </div>

        </div>


    </div>

</template>

<style></style>