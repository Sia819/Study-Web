// ========== 4강 ==========

function 함수(x: number): number {
  return x * 2;
}

function 함수2(x: number): void {
  1 + 1;
}

함수2(1);

function 함수3(x?: number) {
  x + 1;
}

function 함수4(x: number | undefined) {
  x + 1;
}

let a: undefined;

함수4(1);
함수4(a);

a + "1";

let b: undefined;

// b = 1;

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
function 콘솔출력(name: string) {
  console.log("안녕하세요" + name);
  console.log(`안녕하세요: ${name}`);
}
콘솔출력("홍길동");

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
