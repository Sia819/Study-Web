/*====================================================================================================
[ 0강 ] Typescript 필수문법 10분 정리와 설치 셋팅 (Vue, React 포함)

# TypeScript란?
요즘 웹 개발자 채용 공고 같은곳에 TypeScript가 항상 보임.
규모가 있는 기업에서는 웬만하면 JavaScript가 아니라 TypeScript 개발 수준을 요구함.

TypeScript는 JavaScript에서 Type을 엄격하게 제한하는 언어.
JavaScript와 1:1 대응이 되며, TypeScript를 컴파일 하면 JavaScript파일이 생성됨.
결국 HTML/CSS/JavaScript 베이스는 고정인데, JavaScript를 업그레이드 하기 위한 언어.

## 왜 TypeScript를 써야 하는가?
JavaScript로도 충분하지만, JavaScript로 발생할 수 있는 실수를 방지하기 위해
일종의 제약을 걸어서 타입을 엄격하게 체크할 수 있도록 함.

## 무슨 실수가 발생할 수 있나?
JavaScript는 Dynamic Typing 기능을 제공해서, 아래와 같은 코드를 실행할 수 있음.
```javascript
5 - '3'
```
=> 결과는 8 (숫자를 문자로 바꾸어서 실행해줌)
편리한 기능처럼 보일 수 있지만, 프로젝트 규모가 커질수록
이러한 높은 유연성을 제공하는 기능은 프로젝트 관리에 악영향을 줌.

TypeScript에서는 위 코드는 컴파일 에러가 발생해서 실수를 미연에 방지 가능.
Q : 나는 똑똑해서 JavaScript로도 충분한데?
A : 나중에 협업하다가 다른사람이 짜놓은 몇천, 몇만줄 JavaScript 코드에서 발생하는
    알수 없는 버그를 잡으려다보면, 자연스럽게 TypeScript를 찾게 될것임.

## TypeScript의 장점
JavaScript를 쓰면 추상적인 에러 메시지가 많이 발생하는데,
에러가 발생하면 에러가 정확히 어디에서 발생하는지 잘 짚어줌.

---
# 설치하기

1. Node.js 설치
구글에 Node.js 검색하고 최신 LTS 버전으로 설치해야 함.
(최신 버전이 아니면 에러가 날 수 있음)

2. Visual Studio Code 설치

VSCode 터미널(powershell)에
npm install -g typescript

만약 에러가 나면, 에러메시지를 ChatGPT한테 그대로 복사 붙혀넣기 해서 문제를 해결해보자.

3. VSCode에서 OpenFolder로 워크 스페이스 폴더 잡아주고, 작업 폴더에 TypeScript 파일 생성
- "index.ts" 파일 생성
- "tsconfig.json" 파일 생성

tsconfig.json에 아래를 작성
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS"
  }
}
```

4. index.ts 파일을 작성

---

내가 짠 .ts 파일은 브라우저에서 인식할 수 없음.
브라우저는 HTML/CSS/JavaScript 기반으로만 작동하기 때문에
TypeScript를 JavaScript로 컴파일을 해줘야함.

# 컴파일 하기
새 터미널을 오픈하고 cd 명령어 등으로 내 TypeScript가 있는 폴더로 이동
tsc -w
명령어 입력하면 입력한 터미널이 살아있는 동안에는
TypeScript를 저장할 때 마다, JavaScript 파일로 변환이 됨.
*/ //====================================================================================================
// 변수에 타입 지정하기
let myName1 = "abc"; // JavaScript 방식, 아무 타입이나 변수에 저장가능.
let myName2 = "abc"; // TypeScript 방식, 여기에는 string 타입만 대입가능.
// myName2 = 123;               // string 변수에 number를 입력할 수 없음.
// ^^^^^^^ Type 'number' is not assignable to type 'string'.ts(2322)
// myName1 = 123;               // myName1에도 되는데요? => 현재 파일이 .ts파일이라서 걸러줌.
//====================================================================================================
// 어떤 타입들이 존재?
// 1. 자주 쓰는 타입들
let myVar1;
let myVar2;
let myVar3;
let myVar4;
let myVar5;
let myVar6;
let myVar7;
let myVar8;
// 맨 마지막에 다른 타입들도 소개
//====================================================================================================
// Array 타입 변수 선언
let myNames1 = ["kim", "park"]; // 이 변수 안에는 array 만 들어올 수 있고, 배열 안에는 string 타입만 들어올 수 있음.
let myNames2 = ["kim", "park"]; // 표현은 동일하지만, Array는 타입이 아니라 interface임. 기능상 100% 동일, 성향은 팀 컨벤션 차이 등
//====================================================================================================
// Object 타입 변수 선언
let myName3;
myName3 = { name: "kim" };
// myName3 = {}; // 불가능
// ? 속성으로 선택사항 지정 가능.
let myName4;
myName4 = { name: "kim" };
myName4 = {};
//====================================================================================================
// Union 타입(동시 타입) 지정
let myName5;
myName5 = "kim";
myName5 = 123;
let myName6;
let myName7;
//====================================================================================================
// 함수도 타입 지정가능
function MyFunc1(x) {
    return x * 2;
}
function MyFunc2(x) {
    //  (파라미터 타입)^^^^^^   ^^^^^^(리턴 타입)
    return x * 2;
}
MyFunc2(123);
let john = [123, true];
let myJohn1 = { name: "john" };
let myJohn3;
myJohn3 = { name: "kim", age: '123', phone: '123456' };
//====================================================================================================
// Class 문법
class User1 {
    constructor() {
    }
}
// 생성자에도 파라미터 지정 가능, 단 클래스 필드에 변수로 선언되어 있어야 함.
class User2 {
    constructor(name) {
        this.name = name;
    }
}
// 생성자에 type 지정을 하려면?
class User3 {
    constructor(name) {
        this.name = name;
    }
}
//====================================================================================================
// 이처럼 TypeScript를 사용하면 ts에서만 사용하는 코딩규칙 같은것도 있고,
// 타입 문법 이외에 다양한 기능이 있음.
// 이런것들은 실제로 코드 작성하면서 배우는것이 좋을듯.
//====================================================================================================
//====================================================================================================
//====================================================================================================
// 아까 100번째 줄에서 설명한다고 했었던 기타 타입
// 자주 사용하지 않지만, 응용할 수 있는 지원 타입 등
// 2. 추가 원시(primitive) 타입
const myVar10 = Symbol("id"); // ES2015 이후 등장한 심볼 값, unique symbol은 "단일 값" 심볼 상수에 사용
let myVar9;
// 3. 특수(top/bottom) 타입
let myVar11; // 반환값 없음
let myVar12; // 절대 도달 불가
let myVar13; // 안전한 any 타입
let myVar14;
let httpMethod = "GET";
let color = "#ff00ff";
// 5. Union(조합형) 타입
let myUnion1;
myUnion1 = "abc";
myUnion1 = 123;
const origin1 = [0, 0];
// 7. 열거(enum) 타입
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let padding = Direction.Up;
const add = (a, b) => a + b;
// 9. 생성자·제네릭 타입
class Box {
    constructor(value) {
        this.value = value;
    }
}
const boxedString = new Box("Hello");
function unwrapPromise(p) {
    // TypeScript 4.5+ Utility
    return p;
}
