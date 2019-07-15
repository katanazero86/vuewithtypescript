<template>
    <ol class="breadcrumb">
        <li @click.prevent="$router.push('/todo')">All</li>
        <li @click.prevent="onClickLink('list-active')">Active</li>
        <li @click.prevent="onClickLink('list-clear')">Clear</li>
    </ol>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Header extends Vue {

    public onClickLink(path: string) {
        this.$router.push(`/todo/${path}`);
    }
}
</script>

<style scoped>
    li {
        cursor: pointer;
    }

    li:hover {
        color: salmon;
    }
</style>
