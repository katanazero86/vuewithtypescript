<template>
    <div class="flex-box-row-nowrap flex-box-center">
        <div class="flex-item" style="border: 1px salmon solid" @click="increase">
            증가
        </div>
        <div class="flex-item" style="border: 1px salmon solid" @click="decrease">
            감소
        </div>
    </div>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class Increment extends Vue {

        public increase() {
            // this.$store.dispatch('increase');
            let count = this.$store.getters.count;
            this.$store.commit('setCount', {count : ++count});
        }

        public decrease() {
            // this.$store.dispatch('decrease');
            let count = this.$store.getters.count;
            this.$store.commit('setCount', {count : --count});
        }
    }

</script>

<style scoped>

    .flex-box-row-nowrap {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .flex-box-center {
        justify-content: center;
        align-items: center;
    }


    .flex-item {
        flex-grow: 1;
        flex-basis: auto;
    }

</style>