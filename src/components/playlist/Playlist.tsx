import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Text,
  View,
} from 'react-native';
import PlaylistMini from './PlaylistMini';
import {useRef} from 'react';
import PlaylistFullTop from './playlistFull/PlaylistFullTop';
import PlaylistFullBottom from './playlistFull/PlaylistFullBottom';
import PlaylistFullMid from './playlistFull/PlaylistFullMid';

export default function Playlist({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}) {
  const {height, width} = Dimensions.get('window');
  const playlistRef = useRef('mini');

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const {dy} = gestureState;
        if (playlistRef.current === 'mini') {
          playlistAnim.setValue(-dy);
        }
        if (playlistRef.current === 'full') {
          playlistAnim.setValue(height - dy);
        }
      },
      onPanResponderEnd: (evt, gestureState) => {
        const {dy} = gestureState;
        if (dy < -100 && playlistRef.current === 'mini') {
          Animated.spring(playlistAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();
          playlistRef.current = 'full';
        }

        if (-100 < dy && playlistRef.current === 'mini') {
          Animated.spring(playlistAnim, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }

        if (dy > 100 && playlistRef.current === 'full') {
          Animated.spring(playlistAnim, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
          playlistRef.current = 'mini';
        }

        if (dy < 100 && playlistRef.current === 'full') {
          Animated.spring(playlistAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;
  return (
    <>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          backgroundColor: '#222',
          borderBottomColor: '#666',
          borderBottomWidth: 1,
          marginTop: playlistAnim.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [0, -200, -200],
          }),
          height: playlistAnim.interpolate({
            inputRange: [0, 100],
            outputRange: [60, 160],
          }),
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: playlistAnim.interpolate({
            inputRange: [0, height / 2, height],
            outputRange: [10, width * 0.1, width * 0.1],
          }),
        }}>
        <View style={{}}>
          <PlaylistFullTop playlistAnim={playlistAnim} />

          <Animated.View
            style={{
              width: playlistAnim.interpolate({
                inputRange: [0, height / 2, height],
                outputRange: [50, width * 0.8, width * 0.8],
              }),
              height: playlistAnim.interpolate({
                inputRange: [0, height / 2, height],
                outputRange: [50, width * 0.8, width * 0.8],
              }),
            }}>
            <Image
              source={{
                uri: `https://picsum.photos/300`,
              }}
              style={{width: '100%', height: '100%'}}
            />
          </Animated.View>
          <PlaylistFullMid playlistAnim={playlistAnim} />
        </View>

        <Animated.View
          style={{
            flex: 1,
            opacity: playlistAnim.interpolate({
              inputRange: [0, height / 2],
              outputRange: [1, 0],
            }),
          }}>
          <PlaylistMini />
        </Animated.View>
        <PlaylistFullBottom playlistAnim={playlistAnim} />
      </Animated.View>
    </>
  );
}
