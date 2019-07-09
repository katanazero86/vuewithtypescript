<template>
    <ol class="breadcrumb">
        <li><a href="#">All</a></li>
        <li><a href="#">Active</a></li>
        <li class="active">Clear</li>
    </ol>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Header extends Vue {

    }

</script>

<style scoped>

</style>
