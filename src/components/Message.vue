<template>
    <div>
        <input type="text" v-model="message">
        <div>
            {{message}}
        </div>
    </div>
</template>

<script lang="ts">
    /* script 구문안에 lang 속성을 ts로 지정 */
    /* 기본적인 vue 컴포넌트 정의 방법 */
    import {Component, Vue} from 'vue-property-decorator';
    @Component
    export default class Message extends Vue {
        public message: string = '메시지';
    }
</script>

<style scoped>

</style>