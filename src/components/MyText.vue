<template>
    <div>
        <input type="text" :value="value" @input="onInput">
    </div>
</template>

<script lang="ts">
import {Vue, Model, Emit, Component} from 'vue-property-decorator';

@Component
export default class MyText extends Vue {

    @Model('input', {type: String}) public value!: string;

    @Emit('input')
    public onInput(event: any) {
        return event.target.value;
    }

}
</script>

<style scoped>

</style>
