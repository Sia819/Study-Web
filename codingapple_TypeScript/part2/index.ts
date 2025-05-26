// ========== 2강 ==========

let test: string = 'test'; // sdasfd

{
  let name: string       = 'kim';           // string 타입 (기본 타입)
  let age: number        = 50;              // number 타입 (기본 타입)
  let married: undefined = null;            // undefined 타입 (기본 타입)
  let users1: number[]   = [123, 123];      // number array 타입 (기본 타입)
  let users2: string[]   = ['333', '444'];  // string array 타입 (기본 타입)

  let 회원들3: (string | number)[] = ['333', 123]; //
  let 회원들4: { member1: string; member2: string } = {
    member1: 'kim',
    member2: 'park',
  };

  let 회원들5 = 'park';

  // 2강
  // Q1 여러분의 이름, 나이, 출생지역을 변수로 각각 저장
  let 이름1 = '미소녀';
  let 나이1 = 17;
  let 출생지역1 = '이세계';

  // Q2 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 저장.
  let song: { 가수명: string; 곡명: string } = {
    가수명: '아이유',
    곡명: '좋은날',
  };

  // Q3
  let project: {
    member: string[];
    days: number;
    started: boolean;
  } = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };
}
