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
