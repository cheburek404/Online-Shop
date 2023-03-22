<template>
    <div class="main-wrapper">
        <catalog />
        <cart 
            v-if="CART.length" 
            :cart_data="CART"    
        />
    </div>
</template>
<script>
import Catalog from './Catalog.vue';
import Cart from './Cart.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'MainWrapper',
    components: {
        Catalog,
        Cart
    },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }

}
</script>
<style lang="scss">
    .main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>