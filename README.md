# YoutubeMusic clone Coding

## UI & 애니메이션 정의

1. HeaderNavigation
   - UI
     - 로고 이미지는 asset 폴더에 넣어서 public 이미지 사용
     - 아이콘들은 fontawsome 아이콘 사용
   - 애니메이션
     - scrollView의 스크롤에 따라 위아래로 올라가는 (dy)에따라 애니메이션
2. CategoryNavigation
   - UI
     - 가로스크롤
     - click되면 페이지 이동, 버튼 스타일과 배경 스타일이 바뀐다.
   - 애니메이션
     - 핸들러 : 본문 스크롤 내리기
     - 액션 : 처음에는 배경이 투명했다가, 본문이 스크롤 되면, 맨 위 sticky 되며, 어두운 컬러의 배경과 borderBottom를 가지게된다.
3. HeaderBackground
   - UI
     - 배경에 그라데이션과 이미지가 들어간다.
     - 카테고리 클릭되면 배경 이미지 변화
     - 세세한 스타일 존재
   - 애니메이션
     - 본문 스크롤 내리기
     - 최상단에서만 작동하는 애니메이션
4. 본문
   - UI
   - 세가지 이상의 음악리스트 UI가 제공되고 있음
   - 그 중 세가지 형태의 ui를 fake data로 구현
   - 그중 일반적으로 상단에 배치되는 ui인 제일 작은 uisms doslapdltusdl emfdjrka
   - 애니메이션
   - 가로 스크롤에 애니메이션이 있음
   - 일정 dx를 넘기지 않으면 다음 리스트로 넘어가지 않는 형태

### 사용

- fontawsome
- linear-gradient
  npm install react-native-linear-gradient
  (ex) <LinearGradient
  start={{x: 0.0, y: 0.25}}
  end={{x: 0.5, y: 1.0}}
  locations={[0, 0.5, 0.6]}
  colors={['#4c669f', '#3b5998', '#192f6a']}
  style={{}}>
  <Text style={styles.buttonText}>
  Sign in with Facebook
  </Text>
  </LinearGradient>
- faker
  npm install @faker-js/faker --save-dev
  - npm install --save react-native-screens react-native-safe-area-context
    \*\*\* 안드로이드 셰이크 현상 : inputRange를 크게 설정하여 해결

5. PlayList UI

- 홈 화면에서 fixed되어 존재
- playList가 풀 화면이 되는 순간 하단으로 내려감
- 홈 화면의 작은 플레이리스트를 클릭하거나 ,위쪽으로 드래그하면 플레이리스트가 풀페이지가 된다
