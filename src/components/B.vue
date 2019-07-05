<template>
    <div>
        A에서 작성한 메세지는? => {{busText}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import Bus from '@/bus/event-bus.ts';

    @Component
    export default class B extends Vue {
        public busText: string = '';
        public created() {
         Bus.$on('send', (text: string) => {
             this.busText = text;
         });
        }
    }

</script>

<style scoped>

</style>
