<template>
    <div class="form-group">
        <label>할일입력:</label>
        <input type="text" class="form-control" placeholder="할일을 입력해주세요." @keyup.enter="addItem" ref="todoInput">
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ItemInput extends Vue {

    public addItem(e: any) {
        if (e.target.value.trim()) {
            const lastIndex = this.$store.getters.todoItem.length;
            this.$store.commit('setTodo', {id : lastIndex, title : e.target.value, status : 'active' });
            e.target.value = '';
        } else {
            alert('할일을 입력해주세요.');
            return false;
        }
    }

}
</script>

<style scoped>

</style>
