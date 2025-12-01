## Youtube Music Clone (React Native)

React Native로 구현한 **YouTube Music 홈 화면 클론 프로젝트**입니다.  
실제 앱과 유사한 **헤더 숨김/노출 애니메이션**, **카테고리 탭 전환**,  
**배경 그라데이션 변화**, **플레이리스트 미니/풀스크린 전환** 인터랙션을 구현하는 데 초점을 두었습니다.

### Demo

![Youtube Music Clone Preview](src/assets/youtube-clone-preview.gif)

### 주요 기능 (Features)

1. **Header Navigation**

   - **UI**
     - 상단 `LogoHeader` 영역에 YouTube Music 스타일 로고 노출
     - 아이콘은 **Font Awesome** 아이콘 세트를 활용
   - **애니메이션**
     - `ScrollView` 스크롤 값(`dy`)에 따라 헤더가 위/아래로 자연스럽게 숨겨졌다가 나타나는 애니메이션

2. **Category Navigation**

   - **UI**
     - 상단에 가로 스크롤 형태의 카테고리 탭 (`CategoryHeader`)
     - 선택된 카테고리는 버튼 스타일/배경 색이 강조되며 시각적으로 구분
   - **애니메이션 & 동작**
     - 초기에는 배경이 투명에 가깝게 시작
     - 본문이 스크롤되면 상단에 **sticky** 되며, 어두운 컬러 배경 + `borderBottom` 이 생겨 고정 네비게이션처럼 보이도록 구현

3. **Header Background**

   - **UI**
     - 상단 배경에 **그라데이션 + 이미지**를 조합하여 YouTube Music 느낌의 분위기를 연출
     - 카테고리 선택에 따라 배경 이미지/스타일이 바뀌도록 설계
   - **애니메이션**
     - 본문 스크롤 위치에 따라 배경의 노출/변형이 달라짐
     - 최상단에서만 작동하는 전용 애니메이션 로직 적용

4. **본문 콘텐츠 (Music List)**

   - **UI**
     - 서로 다른 형태의 음악 리스트 UI를 3가지 이상 제공  
       (예: 가로 스크롤 리스트, 그리드형 리스트, 카드형 리스트 등)
     - 실제 데이터 대신 **faker**를 활용한 fake 데이터로 구성
   - **애니메이션**
     - 가로 스크롤 리스트에 스냅(Snap) 느낌의 애니메이션 적용  
       (일정 `dx`를 넘기지 않으면 다음 카드로 넘어가지 않도록 처리)

5. **Playlist UI (Mini ↔ Fullscreen)**
   - 홈 화면 하단에 **미니 플레이리스트(Mini Player)**가 항상 고정되어 있음
   - 미니 플레이리스트를 탭하거나 위로 드래그하면 **풀스크린 플레이리스트**로 전환
   - 풀스크린 상태에서는 홈 콘텐츠가 뒤로 내려가는 느낌을 주어 레이어 구조를 강조

### 기술 스택 (Tech Stack)

- **React Native** `0.74.3`
- **React** `18.2.0`
- **TypeScript**
- **@fortawesome/react-native-fontawesome** (아이콘)
- **react-native-linear-gradient** (그라데이션 배경)
- **react-native-screens**, **react-native-safe-area-context**
- **React Native Animated API** 를 활용한 스크롤 기반 애니메이션
- **@faker-js/faker** 를 사용한 Dummy/Fake 데이터 생성

### 실행 방법 (Getting Started)

```bash
# 의존성 설치
npm install
# 또는
yarn install

# iOS
npm run ios

# Android
npm run android
```

### 주요 학습 포인트

- 스크롤 위치에 따른 **헤더 숨김/노출 애니메이션 로직 설계**
- 카테고리 선택에 따른 **상단 배경/스타일 동기화**
- **미니 플레이어 ↔ 풀스크린 플레이어** 전환 애니메이션
- React Native에서의 **그라데이션, Safe Area, 아이콘 시스템** 실전 적용

### 참고 사항

- 안드로이드에서 발생할 수 있는 스크롤 애니메이션 **셰이크(shake) 현상**은  
  `inputRange` 를 충분히 크게 설정하는 방식으로 완화했습니다.
