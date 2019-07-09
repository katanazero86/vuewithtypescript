<template>
    <div class="form-group">
        <label>할일입력:</label>
        <input type="text" class="form-control" placeholder="할일을 입력해주세요." @keyup.enter="addItem">
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class ItemInput extends Vue {

        public addItem() {

        }

    }

</script>

<style scoped>

</style>
