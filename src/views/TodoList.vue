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

            <hr>
            <div>
                getters 맵핑해서 뿌려보는 방식?
            </div>
            <template v-if="$route.params.path">
                <Item v-for="todo in todoActiveItem" :todoItem="todo" v-if="$route.params.path == 'list-active'"/>
                <Item v-for="todo in todoClearItem" :todoItem="todo" v-if="$route.params.path == 'list-clear'"/>
            </template>
            <template v-else>
                <Item v-for="todo in todoItem" :todoItem="todo"/>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import Header from '@/components/todo/Header.vue';
import ItemInput from '@/components/todo/ItemInput.vue';
import Item from '@/components/todo/Item.vue';
import { mapGetters } from 'vuex'; // vuex getters 를 편리하게 사용하게 해주는 헬퍼함수

@Component({
    components: {ItemInput, Header, Item},
    computed : {
        // 전개연산자를 이용하여 추가.
        ...mapGetters([
            'todoItem',
            'todoActiveItem',
            'todoClearItem',
        ]),
    },
})
export default class TodoList extends Vue {

    // public todoData: any[] = [{id: 0, title: 'test', status: 'active'}, {id: 1, title: 'test', status: 'clear'}, {id: 2, title: 'test', status: 'clear'}];
    public todoData: any[] = this.$store.getters.todoItem;

    @Watch('$route')
    public watchRouteParam(after: any, before: any) {
        if (after.params.hasOwnProperty('path')) {
            switch (after.params.path) {
                case 'list-active' :
                    this.todoData = this.$store.getters.todoActiveItem;
                    break;
                case 'list-clear' :
                    this.todoData = this.$store.getters.todoClearItem;
                    break;
            }
        } else {
            this.todoData = this.$store.getters.todoItem;
        }
    }

}
</script>

<style scoped>

</style>
