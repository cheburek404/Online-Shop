<template>
    <div class="main-wrapper">
        <catalog />
    </div>
    
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
<style lang="scss">
    .main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>