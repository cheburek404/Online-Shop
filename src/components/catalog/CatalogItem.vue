<template>
  <div class="catalog-item">

    
    <pop-up 
      v-if="isPopupVisible"
      btnAddToCart="Add to Cart"
      :popupTitle="product_data.name"
      @closePopup="closePopupInfo"
      @btnAddToCartAction="addToCart"
    >
      <div class="popup-item">
        <img
          :src="require('../../assets/images/' + product_data.image)"
          class="catalog-item__img"
          alt="img"
        />
        <div>
          <p class="catalog-item__name">{{ product_data.name }}</p>
          <p class="catalog-item__price">{{ product_data.price }} <span>KZT</span></p>
          <p class="catalog-item__category">{{ product_data.category }}</p>
        </div>
      </div>
    </pop-up>


    <div 
      class="catalog-item__body"
      @click="showPopupInfo"
    >
      <img
        :src="require('../../assets/images/' + product_data.image)"
        class="catalog-item__img"
        alt="img"
      />
      <p class="catalog-item__name">{{ product_data.name }}</p>
      <p class="catalog-item__price">{{ product_data.price }} <span>KZT</span></p>
    </div>
    <button 
        class="catalog-item__btn btn" 
        @click="addToCart">
        Add to Cart
    </button>
  </div>
</template>
<script>
import PopUp from '../PopUp.vue'; 

export default {
  name: "CatalogItem",
  components: { PopUp },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isPopupVisible: false,
    }
  },
  methods: {
    showPopupInfo() {
      this.isPopupVisible = true;
    },
    closePopupInfo() {
      this.isPopupVisible = false;
    },  
    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
  },
  mounted() {
        const cartItemData = this.product_data;
        cartItemData.quantity = 1;
    },
};
</script>
<style></style>
