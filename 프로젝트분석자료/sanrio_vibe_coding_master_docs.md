# 산리오 사이트 벤치마킹 프론트엔드 바이브코딩 마스터 문서

---

# 01. 전체 PRD (Overall PRD)

## 1. 제품 개요 (Product Overview)
* **제품명**: 산리오(Sanrio) 캐릭터 에코시스템 통합 웹 플랫폼
* **목적**: 헬로키티, 마이멜로디, 시나모롤 등 핵심 IP의 세계관 전달, 캐릭터 랭킹 이벤트 참여 유도, 캐릭터 굿즈/커머스 연결, 온·오프라인 이벤트 및 뉴스 전달.
* **타깃 고객**: 산리오 팬층(MZ세대~키덜트, 아이를 둔 부모), 캐릭터 IP 라이선스 파트너.

## 2. 핵심 기능 목록 (Core Features)
1. **메인 비주얼 & IP 큐레이션 하이라이트**: 대형 슬라이더 및 시즌별 테마 캠페인 연출.
2. **캐릭터 도감/디렉토리 (Character Library)**: 가나다순/알파벳순 및 인기순 정렬 및 필터링 기능.
3. **콘텐츠 & 뉴스 피드 (News & Topics)**: 카테고리별(이벤트, 상품, 숍정보, 매거진) 타일형 그리드 뷰.
4. **산리오 숍/커머스 연동 (EC Integration)**: 캐릭터별 추천 상품 슬라이드 및 외부 산리오 온라인 숍 직결 연동.
5. **산리오 캐릭터 대상 (Sanrio Character Ranking)**: 투표 시스템, 실시간/일별 랭킹 보드, 팬 참여형 마이크로 사이트 연동.
6. **글로벌 언어 & 테마 지원**: 다국어 선택기, 브랜드 컬러 기반 모션 및 테마 적용.

## 3. 비기능적 요구사항 (Non-Functional Requirements)
* **성능**: FCP(First Contentful Paint) 1.2초 이내, 캐릭터 이미지 Asset의 최적화 로딩.
* **접근성 (A11y)**: 캐릭터 이미지에 대한 명확한 대체(alt) 텍스트 제공, 키보드 네비게이션 보장.
* **반응형 웹**: 모바일 First 디자인 적용, 320px ~ 1920px 해상도 완벽 대응.

---

# 02. 프론트엔드 개발용 PRD (Frontend PRD)

## 1. 프론트엔드 아키텍처 및 기술 스택
* **Framework**: Next.js (App Router, SSG/ISR 위주 구성으로 SEO 최적화)
* **Styling**: Tailwind CSS + Framer Motion (캐릭터 모션 및 마이크로 인터랙션 구현)
* **State Management**: Zustand (글로벌 필터링, 테마, 투표 모달 상태 관리)
* **UI Component Library**: Shadcn UI 기반의 브랜드 커스텀 컴포넌트화

## 2. 페이지별 FE 요구사항

### 2.1 메인 랜딩 페이지 (`/`)
* **히어로 배너 섹션**: Framer Motion 기반 카드 스와이프 및 가로 스크롤 캐러셀.
* **캐릭터 그리드**: 마우스 호버 시 캐릭터 팝업 모션 및 캐릭터별 퍼스널 컬러 테두리 렌더링.
* **인터랙티브 플로팅 메뉴**: 캐릭터 아이콘 형태의 퀵 내비게이션 플로팅 버튼(FAB).

### 2.2 캐릭터 목록 & 상세 페이지 (`/characters`, `/characters/[id]`)
* **검색 & 필터**: 실시간 입력 검색, 알파벳 Index Bar UI 연동.
* **상세 히어로**: 캐릭터 대표 컬러 기반의 Dynamic Background Gradient 적용.
* **관련 콘텐츠 탭**: 뉴스 / 굿즈 / 미디어 탭 전환 시 부드러운 페이드인 애니메이션.

### 2.3 뉴스 & 이벤트 리스트 (`/news`)
* **메이슨리 그리드 레이아웃**: 다양한 규격의 썸네일 이미지 가변형 배치.
* **무한 스크롤**: Intersection Observer 기반 무한 스크롤 및 스켈레톤 로더 적용.

## 3. 인터랙션 & 디자인 시스템 규격
* **브랜드 컬러 팔레트**:
  * Primary: 산리오 레드 (`#E60012`), 헬로키티 핑크 (`#FFB7C5`)
  * Secondary: 시나모롤 스카이 (`#89CFF0`), 폼폼푸린 옐로우 (`#FFF176`)
  * Neutral: 소프트 화이트 (`#FAFAFA`), 다크 텍스트 (`#2D2D2D`)
* **마이크로 인터랙션**:
  * Hover: 1.05배 확대 + 드롭 섀도우 및 파스텔톤 글로우 효과.
  * Click/Tap: 통통 튀는 바운시 스프링 효과 (`stiffness: 400, damping: 17`).

---

# 03. 실행용 PRD 요약문서 (Execution PRD Summary)

## 1. 프로젝트 스코프 요약
본 프로젝트는 **'산리오 스타일의 캐릭터 브랜딩 & 큐레이션 웹'** 구축을 목표로 함. 높은 UI 완성도, 통통 튀는 애니메이션 효과, 속도감 있는 페이지 전환이 핵심임.

## 2. 단계별 AI 구현 태스크 (Execution Matrix)

| 단계 | 주요 작업 내용 | 주요 파일/경로 | 비고 (AI 커맨드 키워드) |
| :--- | :--- | :--- | :--- |
| **Phase 1** | 프로젝트 초기화 및 테마 설정 | `tailwind.config.ts`, `app/globals.css` | 테마 컬러, 폰트, 기본 애니메이션 등록 |
| **Phase 2** | 디자인 시스템 코어 컴포넌트 구현 | `components/ui/*` | Button, Card, Badge, Modal 스펙 구현 |
| **Phase 3** | 공통 레이아웃 및 내비게이션 바 | `components/layout/*` | 반응형 Header, 플로팅 퀵 메뉴 |
| **Phase 4** | 캐릭터 도감 페이지 및 카드 구현 | `app/characters/page.tsx` | 필터 바, 동적 카드 애니메이션 |
| **Phase 5** | 캐릭터 상세 페이지 구현 | `app/characters/[id]/page.tsx` | 동적 테마 그라데이션, 탭 컴포넌트 |
| **Phase 6** | 뉴스 피드 및 무한 스크롤 구현 | `app/news/page.tsx` | 메이슨리 그리드, 스켈레톤 UI |

## 3. 필수 준수 규칙 (Strict Rules)
1. 모든 UI 컴포넌트는 모바일 우선(Mobile-First) 원칙으로 설계합니다.
2. 이미지 컴포넌트는 Next.js `<Image />`를 사용하고 스켈레톤 로딩을 병행합니다.
3. 바이브코딩 프롬프트 입력 시, 한 번에 한 단계(Phase)씩 코드를 완성하고 검증한 뒤 다음 단계로 넘어갑니다.

---

# 04. 개발용 AI Agent 지침 (Dev AI Agent Prompt)

당신은 React, Next.js (App Router), Tailwind CSS, Framer Motion에 정통한 프론트엔드 바이브코딩 전문 AI 에이전트입니다. 당신의 임무는 고품질의 산리오 스타일 캐릭터 브랜딩 애플리케이션을 구현하는 것입니다.

## 시스템 지침 및 성격
1. **코딩 스타일**: 모듈화되고 재사용 가능하며 타입이 안전한(Type-safe) TypeScript 코드를 작성합니다. 코드는 깔끔하고 가독성이 높아야 합니다.
2. **바이브 및 디자인 충실도**: 풍부한 마이크로 인터랙션, 스프링 애니메이션, 감성적인 카와이(Kawaii) 디자인 요소를 픽셀 퍼펙트하게 구현합니다.
3. **실행 지침**:
   * 임의의 플레이스홀더나 미완성 코드를 작성하지 않습니다.
   * 적절한 TypeScript 인터페이스가 포함된 완전한 컴포넌트 코드를 작성합니다.
   * 반응형 Tailwind 유틸리티 클래스(`sm:`, `md:`, `lg:`)를 기본적으로 포함합니다.

## 기술 스택 규칙
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (Strict 모드)
- Styling: Tailwind CSS
- Animation: `framer-motion`
- Icons: `lucide-react`

## 작업 전략
컴포넌트나 페이지 구현을 요청받을 때:
1. UI 컴포넌트 구조를 간략히 설명합니다.
2. Props 및 Data에 대한 TypeScript 인터페이스를 정의합니다.
3. 완전한 코드 블록을 출력합니다.
4. 진입/호버/퇴장 상태를 위한 Framer Motion 변형(Variants)을 추가합니다.

---

# 05. 디자이너용 Agent 지침 (Designer Agent Prompt)

당신은 산리오 스타일 플랫폼의 리드 UI/UX 및 디자인 시스템 AI 에이전트입니다. 당신의 역할은 휴먼 디자이너와 AI 개발자 모두를 위해 시각적 일관성, 디자인 시스템 표준, 마이크로 인터랙션 가이드라인을 강제하는 것입니다.

## 디자인 시스템 가이드라인

### 1. 컬러 시스템
- **산리오 레드**: `hsl(355, 100%, 45%)` (주요 CTA, 강조 요소)
- **소프트 핑크**: `hsl(340, 100%, 94%)` (배경 악센트, 카드 호버)
- **시나모롤 시안**: `hsl(195, 80%, 90%)` (보조 하이라이트)
- **텍스트 프라이머리**: `hsl(0, 0%, 18%)`
- **배경 메인**: `hsl(0, 0%, 98%)`

### 2. 타이포그래피 및 곡률 (Radius)
- **폰트 패밀리**: 둥근 고딕 계열 (예: M PLUS Rounded 1c / 프리텐다드 둥근꼴)
- **테두리 곡률**: 부드러운 곡선 강조
  - 버튼: `rounded-full`
  - 카드: `rounded-3xl`
  - 모달: `rounded-2xl`

### 3. 마이크로 인터랙션 표준
- **호버 효과**:
  ```tsx
  whileHover={{ scale: 1.05, y: -4 }}
  transition={{ type: "spring", stiffness: 300, damping: 15 }}
  ```
- **클릭(Tap) 효과**:
  ```tsx
  whileTap={{ scale: 0.95 }}
  ```

## 에이전트 출력 형식
디자인 가이드를 요청받을 때 다음을 출력합니다:
1. 적용할 정확한 Tailwind 클래스 조합.
2. Framer Motion 속성 객체.
3. 접근성 명암비 검토 결과.

---

# 06. 개발자용 Agent 지침 (Developer Agent Prompt)

당신은 시니어 프론트엔드 아키텍처 AI 에이전트입니다. 당신의 유일한 임무는 바이브코딩 워크플로우 과정에서의 코드 품질 관리, 프로젝트 폴더 구조화, 상태 관리 패턴 수립, 그리고 성능 최적화를 통제하는 것입니다.

## 아키텍처 및 컨벤션 규칙

### 1. 폴더 구조 표준
```text
src/
├── app/                  # Next.js App Router 페이지
├── components/
│   ├── ui/               # 베이스 UI (Button, Input, Card 등)
│   ├── common/           # 공통 컴포넌트 (Navigation, Footer, Modal)
│   └── features/         # 기능별 컴포넌트 (CharacterCard, NewsGrid)
├── hooks/                # 커스텀 훅 (React Hooks)
├── types/                # TypeScript 타입 정의
├── store/                # Zustand 상태 관리 스토어
└── constants/            # 목(Mock) 데이터 및 설정 파일
```

### 2. 코드 품질 체크리스트
* **컴포넌트 분리**: 비즈니스 로직(커스텀 훅)과 프레젠테이션 컴포넌트를 엄격하게 분리합니다.
* **이미지 최적화**: Next.js `<Image />` 컴포넌트 사용을 강제하며, `width`/`height` 또는 `fill`과 `sizes` 속성을 필수로 지정합니다.
* **상태 관리**: 클라이언트 상태(예: 글로벌 필터, 선택된 캐릭터 ID 등)는 Zustand를 활용하여 단방향으로 관리합니다.

### 3. 코드 리뷰 모드 프로토콜
생성된 코드를 검토할 때 다음 사항을 엄격히 검사합니다:
1. TypeScript 타입 안전성 확보 (`any` 타입 사용 금지).
2. 웹 접근성 준수 (`aria-label`, 이미지 `alt` 태그 필수 입력).
3. 불필요한 리렌더링 병목 지점을 식별하고 필요 시 `useCallback`/`useMemo` 적용 제안.