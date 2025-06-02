// 저번시간에 작성한 소스코드 에서 아래의 함수의 소스코드가
// 재대로 컴파일이 안되는 문제가 있었음.

function MyFunc1(x: number | string) {
  //return x + 1
  //       ^^^^^
  //       Operator '+' cannot be applied to types 'string | number' and 'number'.ts(2365)
}
MyFunc1(123);

// 함수 파라미터로 들어온 변수의 타입이 애매해서(Union 타입이라서) 그렇다.
// Type이 아직 하나로 확정되지 않았을 경우 Type을 Narrowing 하고 써야합니다.

//====================================================================================================

function MyFunc2(x: number | string) {
  /*
  if (x의 타입이 string인 경우) {
    return x + 1
    } else {
      // ...
  }
  */
}
// 위 방식대로 타입을 if문으로 걸러주면 된다.

function MyFunc3(x: number | string) {
  if (typeof x === "number") {
    return x + 1;
  } else {
    return x + "1";
  }
}

// 대표적인 Narrowing 방법은 typeof 연산자를 사용하는 것으로,
// 타입을 문자열로 내보내줌. `typeof x` <- "string" 문자열을 내보내줌.

//====================================================================================================

// number array에 변수 x를 집어넣을 때도 조심해야 한다.
// Union 타입 변수는 number 타입만 들어갈 수 있는 array에 들어갈 수 없다.

function MyFunc4(x: number | string) {
  let array: number[] = [];
  // array[0] = x;
  // ^^^^^^^^
  // Type 'string | number' is not assignable to type 'number'.
  // Type 'string' is not assignable to type 'number'.ts(2322)
}

// type으로 확정시켜주면 사용가능하다.

function MyFunc5(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
    // 간혹, return 하지않는 조건문이 있으면 버그가 생길 수 있어서
    // else 문이 없으면 에러가 날 수 있음.
    // tsconfig.js 에서 `"noImplicitReturns": false,` 옵션을 주면 무시할 수 있는데,
    // 굳이 이 방법보다는 소스코드를 엄격하게 짜는것이 권장됨.
  }
}

//====================================================================================================

// Narrowing으로 판정해주는 문법들

// typeof 키워드                   -> 원시(primitive) 타입 판별 방법
// in 키워드                       -> 속성 존재 여부로 구조적 타입 판별
// instanceof 키워드               -> 클래스(생성자) 기반 판별
// as 키워드 (type assertion 문법) -> if문 없이 타입을 강제로 정의 (컴파일러의 )

//====================================================================================================

// type assertion(as) 문법의 정확한 사용방법은
// Union 타입을 1개의 타입으로 확정을 지을 때 사용한다.

function MyFunc6() {
  let name: string = "kim";
  // let phone: number = name as number;    // 타입 캐스팅에 사용하는 것이 아님. (X)
  //                             ^^^^^^^
  // Conversion of type 'string' to type 'number' may be a mistake
  // because neither type sufficiently overlaps with the other.
  // If this was intentional, convert the expression to 'unknown' first.ts(2352)
}

// 무적권 무슨 타입이 들어올 지 100% 확실할 때 사용.
function MyFunc7(x: number | string) {
  // 선언은 Union타입으로 되어있지만,
  let array: number[] = [];
  array[0] = x as number;
}
MyFunc7(123); // 무조건 숫자만 들어온다고 개발자가 확신할 때

// 위 방법이 좋은 방법은 아님. if 문 쓰는것이 안전함.
// MyFunc7("123"); // as 문법을 쓰면 이런 버그를 잡아낼 수 없음.
// 이러면 x + 1 하면 1231 이런게 출력됨. 컴파일러에게 알려만 주고 안전한 방법은 아님.

// 그렇기 때문에 as를 남발하는것은 안좋음.
// 정말 필요할 때 (남이 짜놓은 코드가 동작을 안한다 -> 디버깅용 등)

//====================================================================================================

// assertion 문법의 유용한 예시

type Person = {
  name: string;
};
function Converter<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jdata: string = '{"name":"kim"}';
const person1 = Converter<Person>(jdata);

// 문자열 json string 데이터를 ts object 형으로 바꾸려고 할 때
// 간편하게 as 문법을 사용할 수 있다.

//====================================================================================================

// (숙제1) 숫자여러개를 array 자료에 저장해놨는데, 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

function HomeWork1(data: Array<string | number>): Array<number> {
  let result: Array<number> = [];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
      result[i] = Number(data[i]);
    } else {
      result[i] = data[i] as number;
    }
  }
  return result;
}

console.log(HomeWork1(["1", 2, "3"]));
console.log(HomeWork1(["a", 2, "c"]));
/*
function HomeWork1_Answer(a: (number | string)[]) {
  let cleaned: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      cleaned.push(parseFloat(b));
    } else {
      cleaned.push(b);
    }
  });

  return cleaned;
}
*/

//====================================================================================================

// (숙제2) 다음과 같은 함수를 만들어보십시오.
/*
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
철수쌤같은 선생님 object 자료를 집어넣으면
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다.

(동작예시)
만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
*/

function HomeWork2(teacher: { subject: string | Array<string> }): string {
  let result: string;

  if (typeof teacher.subject === "string") {
    result = teacher.subject;
  } else {
    result = teacher.subject[teacher.subject.length - 1];
  }

  return result;
}

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };
let 문어쌤 = { subject: [] };

console.log(HomeWork2(철수쌤));
console.log(HomeWork2(영희쌤));
console.log(HomeWork2(민수쌤));
console.log(HomeWork2(문어쌤));

/*
function HomeWork2_Answer( x :{subject : string | string[]} ){
  if (typeof x.subject === 'string') {
    return x.subject
  } else if (Array.isArray(x.subject) ){
    return x.subject[x.subject.length - 1]
  } else {
    return '없쪄'
  }
}
*/
