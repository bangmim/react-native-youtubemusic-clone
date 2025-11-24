import {Animated, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {height, width} = Dimensions.get('window');

export default function PlaylistFullBottom({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}) {
  const safeInset = useSafeAreaInsets().bottom;
  return (
    <>
      <Animated.View
        style={{
          width,
          height: playlistAnim.interpolate({
            inputRange: [height / 2, height],
            outputRange: [0, 70 + safeInset],
          }),
          opacity: playlistAnim.interpolate({
            inputRange: [height / 2, height],
            outputRange: [0, 1],
          }),
          bottom: 0,
          position: 'absolute',
          borderWidth: 1,
          backgroundColor: '#444',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 70,
          }}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>다음트랙</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>가사</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>관련항목</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
}
