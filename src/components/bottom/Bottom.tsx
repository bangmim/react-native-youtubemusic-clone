import {Animated, Dimensions, Pressable, Text, View} from 'react-native';
import {BOTTOM_HEIGHT} from '../../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  IconDefinition,
  faBookBookmark,
  faCompass,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {height} = Dimensions.get('window');
export default function Bottom({playlistAnim}: {playlistAnim: Animated.Value}) {
  const safeInset = useSafeAreaInsets().bottom;
  return (
    <Animated.View
      style={{
        marginBottom: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [
            0,
            -(BOTTOM_HEIGHT + safeInset),
            -(BOTTOM_HEIGHT + safeInset),
          ],
        }),
      }}>
      <View style={{height: BOTTOM_HEIGHT, backgroundColor: '#222'}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <BottomItem name={faHouse} title={'홈'} />
          <BottomItem name={faCompass} title={'둘러보기'} />
          <BottomItem name={faBookBookmark} title={'보관함'} />
        </View>
      </View>
    </Animated.View>
  );
}
function BottomItem({name, title}: {name: IconDefinition; title: string}) {
  return (
    <Pressable style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginVertical: 4}}>
        <FontAwesomeIcon icon={name} color="#fff" size={20} />
      </View>
      <Text style={{color: 'white'}}>{title}</Text>
    </Pressable>
  );
}
