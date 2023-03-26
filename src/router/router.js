import { createWebHistory, createRouter } from "vue-router";

import Catalog from '../components/catalog/Catalog';
import Cart from '../components/cart/Cart.vue';

const routes = [
    {
      path: "/",
      name: "Catalog",
      component: Catalog,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      props: true
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;