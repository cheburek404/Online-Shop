<template>
    <div class="catalog">
        <router-link
            :to="{
                name: 'Cart',
                params: { cart_data: CART }
            }">
            <div class="catalog__link">Cart: {{ CART.length }}</div>
        </router-link>
        <h1>Catalog</h1>
        <select-category 
            :selected="selected"
            :options="categories"
            @select="sortByCategories"
        />
        <div class="catalog__list">
            <catalog-item 
                v-for="product in filteredProducts"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import CatalogItem from '../catalog/CatalogItem.vue';
import { mapActions, mapGetters } from 'vuex';
import SelectCategory from '../SelectCategory.vue';

export default {
    name: "Catalog",
    components: {
        CatalogItem,
        SelectCategory
    },
    data() {
        return {
            categories: [
                {name: "All", value: "All"},
                {name: "Men's", value: "M"},
                {name: "Women's", value: "W"}
            ],
            selected: 'All',
            sortedProducts: [],
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
        filteredProducts() {
            if(this.sortedProducts.length) {
                return this.sortedProducts;
            } else { 
                return this.PRODUCTS;
            }
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data);
        },
        sortByCategories(option) {
            this.selected = option.name;
            this.sortedProducts = this.PRODUCTS.filter(function(product) {
                return product.category === option.name
            })
        },
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if (response.data) {
                console.log('Data arrived!')
            }
        })
    }
}
</script>

<style lang="scss">
    .catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

        &__link {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px;  
            border: 1px solid #cbcbcb;
            border-radius: 10px;
            color: #000;
            background-color: #fff;
            box-shadow: rgba(160, 160, 160, 0.15) 0px 5px 15px 0px;
        }
    }
</style>