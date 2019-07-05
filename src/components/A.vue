<template>
    <div>
        <input type="text" v-model="busText">
        <button @click="onClick">B로 전송</button>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Bus from '@/bus/event-bus.ts';

    @Component
    export default class A extends Vue {
        public busText: string = '';

        public onClick() {
            Bus.$emit('send', this.busText);
        }
    }

</script>

<style scoped>

</style>
