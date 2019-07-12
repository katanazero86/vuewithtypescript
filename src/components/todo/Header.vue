<template>
    <ol class="breadcrumb">
        <li @click.prevent="onClickLink('list-all')"><a href="#">All</a></li>
        <li @click.prevent="onClickLink('list-active')"><a href="#">Active</a></li>
        <li><a href="#">Clear</a></li>
    </ol>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {

        public onClickLink(path : string) {
            // console.log(path);
            this.$router.push(`/todo/${path}`);
        }
    }

</script>

<style scoped>

</style>
