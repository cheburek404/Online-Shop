<template>
    <div class="cart">
        <h1>Cart</h1>
        <cart-item 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapActions } from 'vuex';

export default {
    name: "Cart",
    components: {
        CartItem
    },
    props: {
        cart_data: {
            type: Array,
            deafult() {
                return []
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        }
    }

}
</script> 

<style>
    
</style>