**[상황]**
현재 Next.js 기반 프로젝트(OPTIVIS Nexus)에서, 특정 컴포넌트들마다 `@media (max-width: 1800px)` 형태로 작성되어 있는 임시 반응형 브레이크포인트(Break Points, BP) 설정들을 모두 제거하고, 전체 화면 및 모든 하위 페이지/단일 메뉴에서 동일한 비율의 스케일 축소(Proportional Scaling)가 실시간으로 적용되도록 만들고 싶어.

이 작업은 추후 세부적인 반응형(BP) 시스템을 제대로 구축하기 전까지 사용하는 **임시방편(Temporary Measure)**이므로, 전체 구조가 파편화되지 않고 나중에 걷어내기 쉽도록 작업해야 돼.

**[작업 지시 스펙]**

1. **전역 및 개별 컴포넌트의 임시 BP 일괄 해제**
   - 현재 홈 화면 등 여러 컴포넌트 내에 흩어져 있는 `@media (max-width: 1800px)` 관련 스타일 코드들을 모두 찾아 지워주거나/주석 처리해줘.
   - 대상 확인된 파일들 (필요시 검색해서 더 지울 것):
     - `src/app/page.tsx`
     - `src/components/home/feature-section.tsx`
     - `src/components/home/feature-card.tsx`
     - `src/components/home/simulation-search.tsx`
     - `src/components/home/simulation-table.tsx`
     - `src/components/home/package-video-panel.tsx`
     - `src/components/home/hero-panel.tsx`

2. **전역 스케일 래퍼(Scale Wrapper) 도입으로 균일한 비율 적용**
   - 어떤 메뉴에 들어가거나 내부에서 어떠한 차트(그래프) 등을 그리더라도 **모두 동일한 비율과 사이즈의 느낌을 유지할 수 있도록** 최상위 Layout이나 `app/layout.tsx`(혹은 특정 Wrapper)에 `transform: scale()` 훅을 적용해줘.
   - 기준 해상도(디자인 원본 기준 크기, 예: 1920x1080 등)를 기준으로 가로/세로 중 화면에 맞춰 Math.min(비율) 등으로 `window width/height`를 계산하도록 작성해줘.

3. **화면 왜곡 및 공백 방지 처리**
   - 세로 폭이 모니터 비율에 따라 짧아지거나 길어질 때, 강제로 비율이 깨져서 이미지나 그래프가 왜곡되거나 납작해지는 현상(Aspect ratio 붕괴)이 절대 발생해선 안 돼.
   - 뷰포트 대비 공백(Letterbox)이 남더라도 내부에 그려지는 컨텐츠와 요소들의 모양 자체는 찌그러짐 없이 온전하게 유지될 수 있도록 `transform-origin` 및 부모 Container의 CSS (예: `display: flex; justify-content: center; align-items: center;` 또는 적절한 Background 처리) 등을 세심하게 조율해줘.

4. **추후 제거/원복을 대비한 코드 정리 (가장 중요)**
   - 이 전역 Scale 방식은 언젠가 걷어내고 다시 개별 BP를 잡을 예정이기 때문에, 이번에 추가하거나 주석 처리하는 코드 앞뒤로 **분명한 표식(주석)**을 남겨줘.
   - 예: `/* [TEMP_SCALE_MODE] 차후 세부 반응형 진행 시 이 블록 전체 제거 및 내부 복구 */` 같은 네이밍 컨벤션을 통일해서 달아두고, 작업 범위를 뚜렷하게 분리해줘.
   - 코드를 한 곳에 응집(Custom Hook 컴포넌트로 분리 등)시켜서 수정된 곳이 최소화되도록 모듈화해줘.
