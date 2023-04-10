<template>
    <div class="select">
            <button
                class="btn btn__select"
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{ option.name }}
            </button>
    </div>
</template>
<script>
export default {
    name: "Select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
    },
    data() {
        return {
           
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
        }
    },
    mounted() {
          
    },
}
</script>
<style></style>