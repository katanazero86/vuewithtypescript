<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>
      <p>@Component</p>
      <Message/>
    </div>
    <div>
      <p>
        @Prop
      </p>
      <Children parentMessage="부모에서 전달해준 문자열" :parentMessage2="message"/>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Message from '@/components/Message.vue';
import Children from '@/components/Children.vue';

@Component({
  components: {
    HelloWorld,
    Message,
    Children,
  },
})
export default class Home extends Vue {
  public message: string = 'hello children';
}

</script>
