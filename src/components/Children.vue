<template>
    <div>
        부모에게 받은 메세지 : {{parentMessage}}
        <br>
        부모에게 받은 동적 메세지 : {{parentMessage2}}
        <div>
            <button v-on:click="passDataToParent">
                부모에게 데이터 전달하기(emit)
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';

@Component
export default class Children extends Vue {
    // @Prop() public parentMessage: string;
    // Type error: Property 'parentMessage' has no initializer
    // and is not definitely assigned in the constructor
    @Prop() public parentMessage: string | undefined;  // 엄격모드 시, 클래스 속성은 초기화 해줘야한다.

    public childNum: number = 0;
    @Prop() private parentMessage2!: string; // ! ?


    @Emit('passData') // 이름이 같으면, 데코레이터에 굳이 명시해주지 않아도 된다.
    public passDataToParent() {
        return this.childNum++;
    }



}
</script>

<style scoped>

</style>
