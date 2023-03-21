<template>
    <div class="catalog">
        <h1>Catalog</h1>
        <catalog-item />
    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';

export default {
    name: "Catalog",
    components: {
        CatalogItem
    }
}
</script>

<style></style>