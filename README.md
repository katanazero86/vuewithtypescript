
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

### 컴포넌트 생성
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
