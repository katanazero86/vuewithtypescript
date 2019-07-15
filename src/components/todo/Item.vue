<template>
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" @change="e => changeStatus(e, todoItem)" :checked="todoItem.status == 'clear'">
      </span>
        <input type="text" class="form-control" :value="todoItem.title" readonly>
        <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="removeItem(todoItem)">X</button>
      </span>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Item extends Vue {

    @Prop() public readonly todoItem!: object | undefined;

    public changeStatus(e: any, tagetTodoItem: any) {
        if (e.target.checked) {
            // clear
            tagetTodoItem.status = 'clear';
            this.$store.dispatch('updateTodo', tagetTodoItem);
        } else {
            // active
            tagetTodoItem.status = 'active';
            this.$store.dispatch('updateTodo', tagetTodoItem);
        }

    }

    public removeItem(targetTodoItem: any) {
        this.$store.dispatch('deleteTodo', targetTodoItem);
    }
}
</script>

<style scoped>

</style>
