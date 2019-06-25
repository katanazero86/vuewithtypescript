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
    <div>
      <p>
        @Provide / @Inject
      </p>
      <InjectChild/>
    </div>
    <div>
      <p>
        @Model
      </p>
      <MyCheckbox v-model="checked"/>
      {{checked ? '동의합니다.' : '동의하지 않습니다.'}}
      <MyText v-model="value"/>
      {{value}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Message from '@/components/Message.vue';
import Children from '@/components/Children.vue';
import InjectChild from '@/components/InjectChild.vue';
import MyCheckbox from '@/components/MyCheckbox.vue';
import MyText from '@/components/MyText.vue';

@Component({
  components: {
    MyText,
    MyCheckbox,
    InjectChild,
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
  public checked: boolean = false;
  public value: string = '';
  @Provide('injectMessage') public provideMessage: string = 'provide/inject example'; // 부모 자식이 상태변수명이 다르므로 맵핑을 위해 데코레이터 파라미터로 inject 할 상태변수명을 작성.

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
