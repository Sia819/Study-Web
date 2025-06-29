/*====================================================================================================
[ 2강 ] 타입스크립트 기본 타입 정리 (primitive types)

본격적으로 따라해보면서 해보자.

1. 최신 Node.js 설치
2. 터미널에서 TypeScript 전역 설치
    npm install -g typescript
3. 기본 `tsconfig.json` 생성
    npx tsc --init
4. `index.ts` 파일을 만들고 코딩 준비
5. TypeScript 컴파일러를 워치 모드로 실행
    tsc -w

*/ //====================================================================================================
// 변수 생성하는 방법

// 변수 만드는 방법에는 3가지가 존재. let, var, const
let name1 = "kim";
var name2 = "kim";
const name3 = "kim";

// 타입 지정 가능
let test: string = "test";
//       ^^^^^^^^(변수에 타입 지정)

// 사용 가능한 타입들 : string, number, boolean, null, undefined 등...

// 지정된 타입 이외에 값을 대입하려고 할 때 컴파일 에러 발생.
// name4 = 123;
// ^^^^^ Type 'number' is not assignable to type 'string'.ts(2322)

// 이처럼 변수에 타입을 지정하는것을 실드를 씌우는 것이라고 생각하면 됨.

//====================================================================================================
// 자주 사용하는 타입

let myName1: string = "kim"; //                        string 타입, 문자열 값
let age: number = 50; //                               number 타입, 숫자 값
let married: boolean = null; //                        boolean 타입, true/false(참/거짓) 값

let job: null = null; //                               null 타입, 비어있는 값
let pet: undefined = null; //                          undefined 타입, 정의되지 않은 값 (null, undefined 값 대입가능)

let users1: number[] = [123, 123]; //                  number형 Array 타입
let users2: string[] = ["333", "444"]; //              string형 Array 타입

// users1 = [123, "abc"];
//                ^^^^^ Type 'string' is not assignable to type 'number'.ts(2322)
// 지정된 타입이 아니면 컴파일 에러가 발생함.

// 컴파일 에러는 안좋은·골치아픈 신호가 아니라
// 버그를 미연에 방지해줄 수 있는 **좋은 신호**이다.
// 왜 에러가 나는지 이유를 친절하게 설명해줌. 컴파일 에러가 런타임 에러보다 100만배 좋다.

//====================================================================================================
// Array 타입에 다양한 자료형을(문자, 숫자) 동시에 대입

let myMembers1: (string | number)[] = ["kim", 123];
//              ^^^^^^^^^^^^^^^^^ Array에 string과 number 타입을 지원한다.

//====================================================================================================
// Object 타입에 다양한 자료형을(문자, 숫자) 동시에 대입
let myMembers2 = { member1: "kim", member2: "park" };

let myMembers3: { member1: string; member2: string };
//              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ myMembers3 변수에 대한 Object 형 타입 지정
myMembers3 = { member1: "kim", member2: "park" }; // (O)
// myMembers3 = { member1: "kim", member2: "park", member3: "lee" }; // (X)
//                                                 ^^^^^^^^^^^^^^ Object literal may only specify known properties,
//                                                                but 'member3' does not exist in type '{ member1: string; member2: string; }'.
//                                                                Did you mean to write 'member1'?ts(2561)

// 지원하는 타입이 아니면 대입이 불가능함.

//====================================================================================================
// 결론은, 변수를 만들고 값을 대입할 때 항상 타입 지정을 해두면 TypeScript의 장점을 활용할 수 있다.
// 하지만 초보자들은 모든 변수에 타입 지정을 남발하는데, 굳이 그렇게 할 필요는 없다.

let myMember1 = "park"; // TypeScript는 모든 변수에 자동으로 타입이 지정된다.
//  ^^^^^^^^ (let 회원들5: string)    (변수에 마우스를 올려보면, 자동으로 타입이 지정된 것을 확인할 수 있다)

let myMember2 = 123;
//  ^^^^^^^^^ (let myMember2: number)

let myMember3 = [1, 2, 3];
//  ^^^^^^^^^ (let myMember3: number[])

// 대부분은 type 지정을 귀찮게 하지 않아도 ok

//====================================================================================================
// (숙제1) 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let 이름1 = "미소녀";
let 나이1 = 17;
let 출생지역1 = "이세계";

//====================================================================================================
// (숙제2) 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let song: { 가수명: string; 곡명: string } = {
  가수명: "아이유",
  곡명: "좋은날",
};

//====================================================================================================
// (숙제3) 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
/*
let project = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
*/

let project: {
  member: string[];
  days: number;
  started: boolean;
};

project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
