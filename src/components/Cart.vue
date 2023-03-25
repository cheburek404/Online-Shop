<template>
    <div class="cart">
        <router-link
            :to="{ name: 'Catalog' }">
            <div class="catalog__link">Back to catalog</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!CART.length">There are no products in the cart...</p> 
        <cart-item 
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="cart__total">
            <p class="total__name">Total:</p>
            <p>{{ cartTotalCost }} KZT</p>
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapActions, mapGetters } from 'vuex';

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
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM',
            'DELETE_FROM_CART'
        ]),
        increment(index) {
            this.INCREMENT_CART_ITEM(index);
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index);
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ]),
        cartTotalCost() {
            return this.CART.map(el => Math.floor(el.price) * el.quantity).reduce((acc, el) => acc = acc + el, 0);
        }
    },

}
</script> 

<style lang="scss">
    .cart {
        margin-bottom: 100px;
        &__total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: 12px;
            display: flex;
            justify-content: center;
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            background-color: #3bbc46;
        }
        .total__name {
            margin-right: $margin * 2;

        }
    }


</style>