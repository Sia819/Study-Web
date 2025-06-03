/*====================================================================================================
[ 3강 ] 타입을 미리 정하기 애매할 때 (union type, any, unknown)

이전 시간에 잘 공부했다면 이런 의문이 들 것입니다.
"숫자와 문자를 동시에 담을 수 있는 변수는 어떻게 만들지?"
이럴 때 Union 타입을 사용해서 원하는 타입을 조합할 수 있습니다.

*/ //====================================================================================================
// Union Type
// 숫자와 문자를 동시에 대입할 수 있는 변수
let myMember1; //      여러 타입은 | 기호로 구분
let myMember2; //    타입이 여러개이면 괄호로 묶어도 ok
myMember1 = 123;
myMember1 = "123";
//====================================================================================================
// Array에 문자와 숫자를 동시에 저장
// 기존의 숫자만 들어가는 Array는?
let myNumbers;
myNumbers = [1, 2, 3];
// 그렇다면 숫자와 문자가 동시에 들어가는 Array는?
let myMembers;
myMembers = [1, "2", 3];
// 주의사항
let myMembers2; // 이와 같이 괄호를 하지 않고 타입을 지정했다면?
myMembers2 = 123;
myMembers2 = ["a", "b", "c"];
// "숫자" 또는 "문자 배열" 이므로 의도와 다른 타입이 될 수 있으므로 주의해야 한다.
//====================================================================================================
// Object에 문자와 숫자를 동시에 저장
// 기존의 문자만 들어가는 Object는?
let myObj1;
myObj1 = { data: "abc" };
// 그렇다면 숫자와 문자가 동시에 들어가는 Object는?
let myObj2;
myObj2 = { data: 123 };
myObj2 = { data: "abc" };
//====================================================================================================
// Any 타입
// Any 타입은 모든 자료형을 허용하는 타입이다.
let myAny1;
myAny1 = 123;
myAny1 = true;
myAny1 = [];
// 하지만 Any타입을 사용하면 타입스크립트를 작성하는 의미가 없어진다.
// Any는 타입이 아니라 **type 실드를 해제**하는 문법이다.
// 일반 JavaScript 변수처럼 작동한다. (다른 언어의 unsafe 같은 부류의 흑마법이라고 생각하면 된다)
//====================================================================================================
// Unknown 타입
// Unknown 타입은 기존의 Any 타입 보다는 안전하다.
let myUnknown1;
myUnknown1 = 123;
myUnknown1 = true;
myUnknown1 = [];
// 기존 Any가 할 수 있는 행동을 전부 할 수 있어 보이는데요?
let myVar1;
myVar1 = "abc";
// string 변수에 any 타입을 대입
myVar1 = myAny1; // 컴파일 오류가 발생하지 않음 !!!
// string 변수에 unknown 타입을 대입
//myVar1 = myUnknown1;
//^^^^^^ Type 'unknown' is not assignable to type 'string'.ts(2322)
// unknown 타입에 뺄셈 시도
// myUnknown1 - 1
// ^^^^^^^^^^ The left-hand side of an arithmetic operation must be of
//            type 'any', 'number', 'bigint' or an enum type.ts(2362)
// any, number, bigint 타입만 덧셈/뺄셈 연산자 사용 가능하다고 컴파일 에러가 남.
//====================================================================================================
// 타입별 연산
// + 1 이라는 연산자를 써보자.
let age;
// age + 1;
// ^^^^^^^ Operator '+' cannot be applied to types 'string | number' and 'number'.ts(2365)
// 위에서 만약 JavaScript를 사용해봤었던 사람이라면 이상함을 느낄 것이다.
// + 연산자는 number에서도 가능, string에서도 가능하다. 예시를 보자.
let myNumber1;
myNumber1 = 1;
myNumber1 + 1;
// 결과 : 2
let myString1;
myString1 = "abc";
myString1 + 1;
// 결과 : abc1
// 하지만 위의 age 변수는 number과 string이 모두 가능한데 TypeScript에서는
// Union 타입 처럼, 애매한 연산이 불가능하도록 강력하게 막혀있다. (Union 타입은 **새로운 타입**이므로)
// unknown 타입도 똑같이 연산자를 쓰지 못하도록 막혀있다.
let myUnknown2 = 1;
// myUnknown1 - 1;
// ^^^^^^^^^^ The left-hand side of an arithmetic operation must be of
//            type 'any', 'number', 'bigint' or an enum type.ts(2362)
// 다음 강의에서 배울 Narrowing을 사용하면 이러한 문제들을 해결할 수 있다.
//====================================================================================================
