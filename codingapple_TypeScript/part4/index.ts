//====================================================================================================

// 4강

// 0. 함수란?
// - 길고 복잡한 코드를 하나의 단어 축약하여 쓸 수 있는 기능을 수행
// - 입력값과 출력값을 가지는 블랙박스 역할
//   - parameter로 input(입력) 수행, return으로 output(출력) 수행

//====================================================================================================
// 매개변수가 없는 함수

function MyFunc0() {
  // do something...
}

//====================================================================================================
// TypeScript에서는 함수 파라미터에 타입을 지정해줘야 한다. (없으면 경고메시지 나옴)

// 함수 파라미터 선언 -> 기본 any타입 -> 입력 파라미터의 타입이 없으므로 위험
// 입력 파라미터도 변수 선언과 동일하기 때문에 파라미터도 타입을 명확히 지정해줘야 함.
function MyFunc1(x) {}

//====================================================================================================
// return 타입도 지정해줘야 한다.

// number 파라미터 선언 후 2를 리턴 -> 리턴 타입이 any 타입 -> 리턴 타입이 없으므로 위험
function MyFunc2(x: number) {
  return x * 2;
}

// return 파라미터도 type을 지정 -> 안전함
function MyFunc3(x: number): number {
  return x * 2;
}

MyFunc3(30);
//MyFunc3('30')  // <- 컴파일러가 number 타입이 아니라고 잘 잡아줌

//====================================================================================================
// return 타입이 없다고 명시적으로 void 타입 지정

// 함수에서 리턴을 하고 싶지 않을 때 타입지정 -> 비워둬도 되지만
function MyFunc4(x: number) {
  1 + 1;
}
// void 타입을 명시해줘서 명확하게 리턴을 하지 않겠다고 정의 가능.
function MyFunc5(x: number): void {
  1 + 1;
  // return 1 + 1; // 실수로 리턴했을 때 컴파일 에러도 띄워줌.
}

//====================================================================================================
// TypeScript는 함수 선언을 할 때 파라미터 타입을 지정해주면
function MyFunc6(x) {}
function MyFunc7(x: number) {}

// 파라미터를 넣어주지 않으면 오류가 난다.
// MyFunc6() // <- 컴파일 에러
// MyFunc7() // <- any 타입이라도 컴파일 에러

// 기본 자바 스크립트에서는 파라미터가 선언되어있더라도
// 파라미터를 넣지 않더라도 오류가 나지 않는다.

// 만약 파라미터를 입력 또는 미입력으로 선택사항으로 두게 하고 싶다면?
// 파라미터에 ? 키워드를 붙이면 된다.
function MyFunc8(x?: number) {}
MyFunc8(); // <- 파라미터를 입력하지 않더라도 컴파일 에러가 나지 않음!

// TMI : ? 연산자를 사용하면 Object 타입에서도 사용 가능!
let MyObj1: { age?: number; name: string };
MyObj1 = { age: 17, name: "abc" };
MyObj1 = { name: "abc" }; // age 키 값이 선택사항으로 됨.

//====================================================================================================
// ? 연산자를 좀 더 깊게 이해해보자.

function MyFunc9(x?: number) {}
function MyFunc10(x: number | undefined) {}
// ? 를 사용하지 않고, undifined 타입을 사용한
// Union 타입으로 선언한 것과 동일하다.

// 만약 MyFunc() 처럼 파라미터를 입력하지 않는다면
// 자동으로 x 파라미터는 undifined 타입이 된다.
function MyFunc11(x?: number) {
  console.log("MyFunc11 result : \n" + x) // undefined 출력됨.
}
MyFunc11();

//====================================================================================================
// 예제1 - 이 함수는 왜 오류가날까?

function MyFunc12(x: number | string) {
  // console.log(x + 1); // <- 컴파일 오류
}

// x는 Union타입이기 때문임.
// 아래 처럼 number & string 타입 둘 다 + 연산자가 가능하지만,
let myVar1: number = 1;
let myVar2: string = "abc";
let myVar3 = myVar1 + 1; // number + number => number (가능)
let myVar4 = myVar2 + 1; // string + number => string (가능)
//                       // 위 이외의 조합은 불가능

// 함수에 들어온 타입은 `(x: number | string)` 외부에서 넘겨받는 인자가
// Union 타입이므로, 명확한 타입을 유추할 수 없기 때문에
// `+ 1` 이라는 동작이 number 타입을 만들지, string 타입을 만들지 **컴파일러가 타입을 유추할 수 없다.**
// 따라서 `+ 1` 행위 자체가 컴파일 에러로 막혀있다.

// 따라서 컴파일러가 Union 타입을 유추할 수 있도록
// **type narrowing 작업**을 해줘야 한다.

function MyFunc13(x: number | string) {
  // type narrowing 검사 작업 (컴파일러가 인식함)
  if (x === "number") {
    console.log(x + 1); // 여기에서 x는 무조건 number이므로 타입 유추 및 연산 가능.
  }
}
// narrowing은 part5에서 더 자세히 다룸.

//====================================================================================================
// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//         아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//         파라미터와 return 타입지정도 잘 해봅시다.

console.log("[ HomeWork1 - PrintUserName ]");
function PrintUserName(username?: string): void {
  if (typeof(username) === "undefined") {
    console.log("이름이 없습니다.");
  } else {
    console.log("안녕하세요 " + username);
  }
}
PrintUserName();
PrintUserName("홍길동");

//====================================================================================================
// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
//         예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
//         숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
//         숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

console.log("[ HomeWork2 - CountDigits ]");
function CountDigits(data: number | string): number {
  return data.toString().length;
}

console.log(CountDigits("245"));
console.log(CountDigits(9567));

//====================================================================================================
// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
//         1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
//         2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
//         3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

console.log("[ HomeWork3 - CheckCanMarry ]");
function CheckCanMarry(
  money: number,
  haveHouse: boolean,
  attractive: string
): string | void {
  let score: number = 0;

  score += money;
  if (haveHouse) score += 500;
  if (attractive === "상") score += 100;

  if (score >= 600) return "결혼가능";
}

console.log(CheckCanMarry(700, false, "중"));
console.log(CheckCanMarry(100, false, "상"));
