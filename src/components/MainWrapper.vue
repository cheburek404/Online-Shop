<template>
    <div class="main-wrapper">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>
<script>

export default {
    name: 'MainWrapper',
    components: {},
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {}

}
</script>
<style lang="scss">
    .main-wrapper{
        max-width: 900px;
        margin: 0 auto;
    }
</style>