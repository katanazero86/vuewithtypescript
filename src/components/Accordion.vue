<template>
    <div class="card">
        <div class="card-header" @click="toggle">
            Featured
        </div>
        <div class="card-body" v-show="show">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Mixins} from 'vue-property-decorator';
    import Toggle from './Toggle.vue';

    @Component({
        components : {
            Toggle,
        },
    })
    export default class ToggleBtn extends Mixins(Toggle) {
        // public show: boolean = false;
        //
        // public toggle() {
        //     this.show = !this.show;
        // }
    }
</script>
<style>
    .card {
        width: 500px;
        margin: 10px;
    }
</style>
