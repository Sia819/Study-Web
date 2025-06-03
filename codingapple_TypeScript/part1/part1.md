# [ 1강 ] Typescript 컴파일시 세부설정 (tsconfig.json)

## tsconfig.json 기본 설정

프로젝트 루트에 **tsconfig.json** 파일을 두면 TypeScript 컴파일러( `tsc` )에게 “어떤 규칙으로 `.ts` / `.tsx` 파일을 `.js` 로 변환할지”를 지시할 수 있습니다.
리액트·Vue·Next.js 등의 템플릿을 사용했다면 이미 존재할 수도 있으니, 없으면 아래처럼 새로 만드세요.

```jsonc
{
  "compilerOptions": {
    "target": "es5",      // 출력 JS의 ECMAScript 버전
    "module": "commonjs"  // 모듈 시스템
  }
}
```

### 핵심 옵션 둘

| 옵션           | 의미                                                       | 대표 값                             | 비고                                                                                |
| ------------ | -------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| **`target`** | TypeScript → JavaScript 트랜스파일 시 목표 ECMAScript 버전을 지정합니다. | `es5`, `es2016`, `esnext` …      | 최신 문법(예: `BigInt`, `optional chaining`)을 사용하려면 `esnext` 또는 최소 `es2020` 이상을 권장합니다. |
| **`module`** | 번들링 이전 단계에서 사용할 모듈 로더 규격을 지정합니다.                         | `commonjs`, `es2015`, `esnext` … | Node.js(LTS) 호환성 위주라면 **`commonjs`**, 최신 브라우저 전용 프로젝트라면 **`esnext`** 를 쓰면 됩니다.    |

> **TIP** 구형 IE까지 지원해야 한다면 `target: "es5"` + `module: "commonjs"` 조합이 안전한 출발점입니다.

---

## 안전 장치 추가하기

품질을 높이려면 엄격한 타입 검사 플래그를 활성화하세요.

```jsonc
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "noImplicitAny": true,     // 암시적 any 금지
    "strictNullChecks": true   // null / undefined 안전성 검증
  }
}
```

* **`noImplicitAny`**: 타입이 추론되지 않아 **`any`** 로 떨어지는 상황을 컴파일 타임 에러로 잡아냅니다.
* **`strictNullChecks`**: `null` 또는 `undefined` 가 가능한 값에 안전하지 않은 연산을 시도하면 오류를 발생시킵니다.

초기 학습 단계에서는 꺼 둬도 되지만, 실제 서비스 코드에서는 반드시 켜두는 것이 유지보수 비용을 크게 줄입니다.

---

## 자주 사용하는 추가 옵션 모음

필요할 때만 골라 써도 충분합니다. 전체 목록과 상세 설명은 공식 문서를 참고하세요.
[https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)

```jsonc
{
  "compilerOptions": {
    /* 출력 형식 */
    "target": "es5",               // 'es3' | 'es5' | 'es2015' … | 'esnext'
    "module": "commonjs",          // 'commonjs' | 'amd' | 'es2015' | 'esnext'
    "jsx": "react-jsx",            // 'preserve' | 'react' | 'react-jsx' (TS 4.1+)
    "outDir": "./dist",            // 컴파일 결과물 경로
    "declaration": true,           // .d.ts(타입 정의) 파일 자동 생성

    /* 자바스크립트 파일 처리 */
    "allowJs": true,               // .js 파일 import 허용
    "checkJs": false,              // .js 파일에도 타입 검사

    /* 코드 품질 및 엄격 모드 */
    "strict": true,                // 모든 strict 계열 플래그 일괄 활성화
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    /* 잠재적 버그 탐지 */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,

    /* 빌드 최적화 */
    "removeComments": true,        // 주석 제거
    "incremental": true            // 증분 빌드 캐시 생성
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 옵션 적용 전략

1. **학습·프로토타입 단계**

   * `strict` 계열을 일부만 켜고, 문제를 발견할 때마다 해결해 나가세요.
2. **팀/프로덕션 단계**

   * `strict: true`로 일괄 적용하여 타입 안정성을 최우선으로 유지합니다.
3. **레거시 마이그레이션**

   * 점진적으로 `noImplicitAny` → `strictNullChecks` → `strict` 순으로 단계적 도입이 현실적입니다.

---

### 마무리

*tsconfig.json* 은 “컴파일러 규칙서”입니다.
초기에 신중히 설정해 두면 디버깅 비용이 크게 줄고, 팀원 간 코드 품질 편차도 완화됩니다. 필요한 옵션을 실험적으로 켜보고, 프로젝트 요구사항에 맞춰 최적 조합을 찾아가세요.
