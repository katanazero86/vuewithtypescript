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
      <Children parentMessage="부모에서 전달해준 문자열" :parentMessage2="message" v-on:passData="passDataToParent($event)"/>
    </div>
    <div>
      <p>
        @Emit
      </p>
      <div>부모에게 전달된 내용 : {{receiveMessage}}</div>
    </div>
    <div>
      <p>
        @Watch
      </p>
      <button @click="changeMessage">메세지 변경</button>
      <div>{{cMsg}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
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
  public cMsg: string | undefined = '';
  public alertMsg: string = '변경이 감지되었습니다.';
  public receiveMessage: string | number = '';

  // immediate : 즉시 호출하겠다는 의미.
  // deep : object 내의 속성값까지 감시.
  // @Watch('cMsg', {immediate: true, deep: true})
  @Watch('cMsg')
  public watchAlertMsg(value: string | undefined, oldValue: string | undefined) {
    console.log(value);
    console.log(oldValue);
    alert(this.alertMsg);
  }

  public changeMessage() {
    this.cMsg = 'change';
  }

  public passDataToParent(value: number | string) {
    console.log('passDataToParent..');
    this.receiveMessage = value;
  }

}
</script>
