import axios from 'axios';
import { createApp } from 'vue'
import { createStore } from "vuex";
import App from './App.vue'

const store = createStore({
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios
                .get('http://localhost:3000/products')
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    },
}); 

createApp(App).use(store).mount('#app')
