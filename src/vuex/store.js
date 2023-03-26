import { createStore } from "vuex";
import mutations from "./mutations/mutations";
import actions from "./actions/actions";
import getters from "./getters/getters";

const store = createStore({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters,
}); 

export default store;