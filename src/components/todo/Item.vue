<template>
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" @change="changeStatus" :checked="todoItem.status == 'clear'">
      </span>
        <input type="text" class="form-control" :value="todoItem.title" readonly>
        <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="removeItem">X</button>
      </span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    export default class Item extends Vue {

        @Prop() public readonly todoItem!: object | undefined;

        public changeStatus() {
            console.log(this.todoItem);
        }

        public removeItem() {

        }
    }

</script>

<style scoped>

</style>
