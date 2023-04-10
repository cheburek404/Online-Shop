<template>
    <div class="popup-wrapper" ref="popup">
        <div class="popup">
            <div class="popup__header">
                <span>{{ popupTitle }}</span>
                <span>
                    <i 
                        class="material-icons"
                        @click="closePopup"
                    >
                        close
                    </i>
                </span>
            </div>
            <div class="popup__body">
                <slot></slot>
            </div>
            <div class="popup__footer">
                <button 
                    class="btn"
                    @click="btnAddToCartAction"
                >
                    {{ btnAddToCart }}
                </button>
                <button 
                    class="close btn"
                    @click="closePopup"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PopUp',
    props: {
        popupTitle: {
            type: String,
            default: 'Popup name'
        },
        btnAddToCart: {
            type: String,
            default: 'Ok'
        }
    },
    data() {
        return {

        }
    },
    methods: {
        btnAddToCartAction() {
            this.$emit('btnAddToCartAction');
        },
        closePopup() {
            this.$emit('closePopup');
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', function(item) {
            if(item.target === vm.$refs['popup']) {
                vm.closePopup();
            }
        });
    }  
}
</script>
<style></style>