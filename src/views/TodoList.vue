<template>
    <div>
        <h2>
            TODO List 예제
        </h2>
        <div style="padding: 15px">
            <Header/>
            <ItemInput/>
            <template v-if="todoData.length">
                <Item v-for="todo in todoData" :todoItem="todo"/>
            </template>
        </div>
    </div>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator';
    import Header from '@/components/todo/Header.vue';
    import ItemInput from '@/components/todo/ItemInput.vue';
    import Item from '@/components/todo/Item.vue';

    @Component({
        components: {ItemInput, Header, Item},
    })
    export default class TodoList extends Vue {

        public todoData: any[] = [{id: 0, title: 'test', status: 'active'}, {id: 1, title: 'test', status: 'clear'}, {id: 2, title: 'test', status: 'clear'}];
    }

</script>

<style scoped>

</style>
