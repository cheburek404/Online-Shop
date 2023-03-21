<template>
  <div class="catalog-item">
    <img
      :src="require('../assets/images/' + product_data.image)"
      class="catalog-item__img"
      alt="img"
    />
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">Price: {{ product_data.price }} KZT</p>
    <button 
        class="catalog-item__btn btn" 
        @click="sendDataToParent">
        Add to basket
    </button>
  </div>
</template>
<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    sendDataToParent() {
      this.$emit("sendDataToParent", this.product_data.article);
    },
  },
};
</script>
<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  background-color: #fff;
  padding: $padding * 3;
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
