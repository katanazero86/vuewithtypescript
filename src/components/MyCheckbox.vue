<template>
    <div>
        <input type="checkbox" :checked="checked" @change="change">
    </div>
</template>

<script lang="ts">
    import {Component, Model, Emit, Vue} from 'vue-property-decorator';

    @Component
    export default class MyCheckbox extends Vue {
        @Model('change', {type: Boolean}) public readonly checked!: boolean;

        @Emit()
        public change(event: any) {
            return event.target.checked;
        }

    }

    // 기존 방식
    // model: {
    //     prop: 'checked',
    //     event: 'change'
    // },
    // props: {
    //     // 다른 목적을 위해 `value` prop를 사용할 수 있습니다.
    //     checked: Boolean,
    //     value: String
    // },

</script>

<style scoped>

</style>
