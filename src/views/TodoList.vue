<template>
    <div>
        <h2>
            TODO List 예제
        </h2>
        <div style="padding: 15px">
            <Header/>
            <ItemInput/>
            <Item/>
        </div>
    </div>
</template>

<script lang="ts">

    import {Vue, Component} from 'vue-property-decorator';
    import Header from '@/components/todo/Header.vue';
    import ItemInput from '@/components/todo/ItemInput.vue';
    import Item from '@/components/todo/Item.vue';

    @Component({
        components : {ItemInput, Header, Item},
    })
    export default class TodoList extends Vue {

    }

</script>

<style scoped>

</style>
