<template>
    <div>
        부모에게 받은 메세지 : {{parentMessage}}
        <br>
        부모에게 받은 동적 메세지 : {{parentMessage2}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        // @Prop() public parentMessage: string;
        // Type error: Property 'parentMessage' has no initializer
        // and is not definitely assigned in the constructor
        @Prop() public parentMessage: string | undefined;  // 엄격모드 시, 클래스 속성은 초기화 해줘야한다.
        @Prop() private parentMessage2!: string; // ! ?
    }
</script>

<style scoped>

</style>