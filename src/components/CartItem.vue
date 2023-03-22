<template>
    <div class="cart-item">
        <img 
            :src="require('../assets/images/' + cart_item_data.image)" 
            alt=""
            class="cart-item__img"
        >
        <div class="cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>Price: {{ cart_item_data.price }} KZT</p>
            <p>Article: {{ cart_item_data.article }}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Quantity:</p>
            {{ cart_item_data.quantity }}
        </div>
        <button 
            @click="deleteFromCart"
            class="btn"
        >
            Delete
        </button>
    </div>
</template>
<script>
export default {
    name: "CartItem",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        const cartItemData = this.cart_item_data;
        cartItemData.quantity = 1;
    },

}
</script>
<style lang="scss">
    .cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: $padding * 3 50px;
        margin-bottom: $margin * 5;
        border-radius: 20px;
        transition: box-shadow 0.1s linear;

        &:hover {
            box-shadow: rgba(160, 160, 160, 0.15) 0px 5px 15px 0px;
        }

        &__img {
            height: 200px;
            width: 200px;
        }
    }
</style>