import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function MusicListSmall() {
  const {faker} = require('@faker-js/faker');
  function createRandomMusic() {
    return {
      genre: faker.music.genre(),
      songName: faker.music.songName(),
    };
  }
  const scrollStartRef = useRef(0);
  const scrollRef = useRef<ScrollView>(null);
  const pageRef = useRef(1);
  return (
    <View>
      <Title />
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        onScrollBeginDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          scrollStartRef.current = x;
        }}
        onScrollEndDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          const dx = x - scrollStartRef.current;

          //   오른쪽으로 넘기기
          if (width / 4 < dx && pageRef.current !== 3) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * pageRef.current,
              animated: true,
            });
            console.log('다음페이지로', pageRef.current);
            pageRef.current = pageRef.current + 1;
          }
          if (0 < dx && dx < width / 4) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
            console.log('머무르기');
          }
          //   왼쪽으로 넘기기
          if (dx < -width / 4 && pageRef.current !== 1) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 2),
              animated: true,
            });
            console.log('뒤로가기', pageRef.current);
            pageRef.current = pageRef.current - 1;
          }
          if (-width / 4 < dx && dx < 0) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
            console.log('왼쪽 머무르기');
          }
        }}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {[...Array(3)].map((val, idx) => {
          return (
            <View style={{width: width * 0.92}} key={idx}>
              {[...Array(4)].map((value, index) => {
                return (
                  <MusicListSmallItem
                    key={index}
                    musics={createRandomMusic()}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListSmallItem({
  musics,
}: {
  musics: {genre: string; songName: string};
}) {
  const {faker} = require('@faker-js/faker');

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
      <View style={{flexDirection: 'row', flex: 1, flexShrink: 0}}>
        <Image
          source={{
            uri: `https://picsum.photos/5${Math.floor(Math.random() * 100)}`,
          }}
          style={{width: 50, height: 50, borderRadius: 2}}
        />

        <View
          style={{
            marginLeft: 14,
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text style={{color: 'white', fontSize: 12, marginBottom: 4}}>
            {faker.music.genre()}
          </Text>
          <Text style={{color: 'white'}} numberOfLines={1}>
            {musics.songName}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flexShrink: 1}}>
        <FontAwesomeIcon icon={faEllipsisVertical} size={12} color="white" />
      </View>
    </View>
  );
}

function Title() {
  return (
    <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
      <Text style={{color: 'white', fontSize: 13, fontWeight: '200'}}>
        이 노래로 뮤직 스테이션 시작하기
      </Text>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 28}}>
        빠른 선곡
      </Text>
    </View>
  );
}
