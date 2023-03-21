<template>
    <div class="main-wrapper">
        <p>{{ title }}</p>
    </div>
    <catalog />
    <basket />
</template>
<script>
import Catalog from './Catalog.vue';
import Basket from './Basket.vue';

export default {
    name: 'MainWrapper',
    components: {
        Catalog,
        Basket
    },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },

}
</script>
<style>
    .main-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>