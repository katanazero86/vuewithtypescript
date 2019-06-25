<template>
    <div>
        저는 자식입니다. inject<br>
        {{injectMessage}}
    </div>
</template>

<script lang="ts">
    // export default {
    //     name: "InjectChild"
    // }

    import {Component, Inject, Vue} from 'vue-property-decorator';

    @Component
    export default class InjectChild extends Vue {
        // ! : optional parameter 사용
        @Inject() public injectMessage!: string; // readonly : 변경불가 -> readonly 상태에서 초기화를 해두면 주입해줘도 변경이 안되니 주의.
    }

</script>

<style scoped>

</style>
