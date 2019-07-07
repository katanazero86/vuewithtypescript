
# Vue with Typescript
- Vue with Typescript

### why Typescript ?
```
1. 대규모 프로젝트에서 강력하다 (생산성 및 유지보수 유리).
2. 최신 JS 문법 지원.
3. ts 가 컴파일 되면, 결국은 JS이기 때문에, 동떨어진 언어가 아니다.

TS는 정적타입언어.
JS는 동적타입언어.

정적타입언어 이기때문에, runtime(실행환경) 에서 에러를 최소화 시킬 수 있다.

TS 장점
- 정적타입 (컴파일 단계에서 오류를 포착 + 명확한 코드)
- 최신 JS 지원(ES6, ES7 등)
- 강력한 도구의 지원(IDE에서 고급자동완성 기능 및 탐색기능 등을 제공)
- 타입스크립트는 JS 상위집합(superset)(결국은 컴파일이 되면, JS가 된다.)
- 인터페이스를 통해, 명시적으로 추상화 할 수 있다.(객체지향적 코딩 가능)

function sum(a, b) {
  return a + b;
}
sum('x', 'y'); // 'xy'

function sum(a: number, b: number) {
  return a + b;
}
sum('x', 'y'); // error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.

```

### project create
```
@vue/cli 설치
vue create <app-name>

Vue CLI v3.8.3
? Please pick a preset: Manually select features
? Check the features needed for your project: TS, Router, Vuex, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: TSLint
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No

위와 같이 메뉴얼로 선택하여 구성.

```

### project 구성 및 구조
```
/node_modules : npm 으로 관리되는 모듈들이 있는 폴더
/public : 정적인 파일들 위치
/src : 실제 코드 및 컴포넌트들이 있는 폴더
/src/assets : 이미지 및 CSS 같은 자원들이 있는 폴더
/src/components : vue 공통 컴포넌트
/src/views : : vue 화면 컴포넌트

/src/main.ts : entry point.
/src/router.ts : router 설정 파일
/src/store.ts : vuex 설정 파일

tsconfig.json : typeScript 설정 파일
tslint.json : typeScript 코딩 규약 설정(코드 규칙 설정)

```

### Decorator(데코레이터)
- 데코레이터는 함수다.
- 코드 조각을 장식해주는 역할을 하는 특별한 선언법
- @expression  -> 이런식으로 선언
- runtime 때 실행이 된다.


### 컴포넌트 생성(@Component)
```
@Component 데코레이터를 이용하여, 컴포넌트 생성 및 컴포넌트 import 예제 코드.

- Message.vue
<template>
    <div>
        <input type="text" v-model="message">
        <div>
            {{message}}
        </div>
    </div>
</template>

<script lang="ts">
    /* script 구문안에 lang 속성을 ts로 지정 */
    /* 기본적인 vue 컴포넌트 정의 방법 */
    import {Component, Vue} from 'vue-property-decorator';
    @Component
    export default class Message extends Vue {
        public message: string = '메시지';
    }
</script>

<style scoped>

</style>

- Home.vue
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Message/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Message from '@/components/Message.vue';

@Component({
  components: {
    HelloWorld,
    Message,
  },
})
export default class Home extends Vue {}
</script>


```

### 부모컴포넌트에서 자식컴포넌트에게 Data 전달(props / @Prop)
```
@Prop 데코레이터를 이용.

- Children.vue
<template>
    <div>
        부모에게 받은 메세지 : {{parentMessage}}
        <br>
        부모에게 받은 동적 메세지 : {{parentMessage2}}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Children extends Vue {
        // @Prop() public parentMessage: string;
        // Type error: Property 'parentMessage' has no initializer
        // and is not definitely assigned in the constructor
        @Prop() public parentMessage: string | undefined;  // 엄격모드 시, 클래스 속성은 초기화 해줘야한다.
        @Prop() private parentMessage2!: string; // ! ?
    }
</script>

- Home.vue
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

```

### Data 변화 감지하기(watch / @Watch)
```
@Watch 데코레이터 이용

public cMsg: string | undefined = '';

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

값을 변경하면, watch 동작.
TypeScript에서  = undefined 로 초기화 시키면 watch가 정상동작을 하지 않는다.

```


### 자식에서 부모에게 Data 전달하기(emit / @Emit)
```
@Emit 데코레이터 이용

@Emit('passData') // 이름이 같으면, 데코레이터에 굳이 명시해주지 않아도 된다.
public passDataToParent() {
  return this.childNum++;
}

<Children parentMessage="부모에서 전달해준 문자열" :parentMessage2="message" v-on:passData="passDataToParent($event)"/>

위와같이 사용.

```

### provide/inject Data 전달하기(@Provide / @Inject)
```
- vue 2.2 부터 추가가 되었다.
- 기본적으로 props 처럼 부모->자식 컴포넌트로 데이터 전달을 하기 위한 기능임.
- inject 는 받고자 하는 속성 / provide 는 전달하고자 하는 속성을 기입한다.
- 기본적으로 provide/inject 는 반응형(reactive)을 지원하지 않는다.

* 직계 부모보다 더 상위의 부모로부터도 데이터를 주입을 받을 수 있다.
따라서 템플릿에 속성으로 데이터 전달을 명시하는 props와는 달리 provide/inject는 데이터 흐름을 직관적으로 알 수 없고, devtools 에서도 확인할 수 없다.

<div id="app">
  <child />
</div>

<script>
var child = {
  inject : ['age'],
  template: `<div>I am {{ age }} years old.</div>`
}
new Vue({
  el: "#app",
  components: { child },
  provide: {
    age: 20
  },
})
</script>

```

### v-model(양방향 바인딩 / @Model)
```
v-model : value 보조 변수 사용 / input 이벤트 사용

@Model('change', {type: Boolean}) public readonly checked!: boolean;

@Model('event명', {type: propType}) prop명


```

### mixins
```
mixins : []
->

import {Vue, Component, Mixins} from 'vue-property-decorator';
    import Toggle from './Toggle.vue';

    @Component({
        components : {
            Toggle,
        },
    })
    export default class ToggleBtn extends Mixins(Toggle) {
        // Mixins 헬퍼함수를 이용
        // Mixins 최고 5개까지 지정가능
    }

```

### Vuex
```
컴포넌트간 데이터를 전달하는방식
1. props/emit
2. provide/eject
3. event bus

애플리케이션 규모가 커지면 커질수록 위 방법으로는 어려움이 발생
상태관리패턴을 고려해야함 -> Vuex

state : 상태
actions : state 변경을 알림
mutations : state 변경

Vuex.Store() 를 이용하여, 새로운 스토어를 생성

store 상태값을 변경해서 모든 컴포넌트에서 공유한다.
엄격모드에서는 외부변이(mutation) 핸들러에서는 저장소 상태를 변경할 수 없다는 에러가 발생을 한다.
보통 콜백함수에서 변이를 시도했을때 발생(actions 에서 변이시킬라하면 발생한다)


```




---



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
