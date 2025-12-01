import {Animated, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useRef, useState} from 'react';

import HeaderBackground from './components/header/HeaderBackground';
import LogoHeader from './components/header/LogoHeader';
import CategoryHeader from './components/header/CategoryHeader';
import Bottom from './components/bottom/Bottom';
import MusicListSmall from './components/musiclist/MusicListSmall';
import MusicListMedium from './components/musiclist/MusicListMedium';
import MusicListLarge from './components/musiclist/MusicListLarge';
import useYoutubeMusic from './useYoutubeMusic';
import Playlist from './components/playlist/Playlist';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(
    undefined,
  );
  const {
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
    headerAnim,
    headerBgAnim,
  } = useYoutubeMusic();

  const playlistAnim = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#111'}}>
        <HeaderBackground
          selectedCategory={selectedCategory}
          headerBgAnim={headerBgAnim}
        />
        <LogoHeader headerAnim={headerAnim} />
        <CategoryHeader
          selectedCategory={selectedCategory}
          setSelectedCategory={category => setSelectedCategory(category)}
          headerAnim={headerAnim}
        />
        <ScrollView
          scrollEventThrottle={3}
          onScrollBeginDrag={onScrollBeginDrag}
          onScroll={onScroll}
          onScrollEndDrag={onScrollEndDrag}
          style={{}}>
          <View style={{marginBottom: 100}}>
            <MusicListSmall />
            <MusicListMedium />
            <MusicListLarge />
          </View>
        </ScrollView>
        <Playlist playlistAnim={playlistAnim} />
        <Bottom playlistAnim={playlistAnim} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
