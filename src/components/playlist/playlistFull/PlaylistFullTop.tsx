import {faChromecast} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faEllipsisVertical,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Animated, Dimensions, Text, View} from 'react-native';
const {height, width} = Dimensions.get('window');

export default function PlaylistFullTop({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}) {
  return (
    <Animated.View
      style={{
        height: playlistAnim.interpolate({
          inputRange: [0, height / 2.5, height],
          outputRange: [0, 0, 100],
        }),
        opacity: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
      }}>
      <Animated.View
        style={{
          width: playlistAnim.interpolate({
            inputRange: [0, height / 2.5, height],
            outputRange: [0, 0, width],
          }),
          marginLeft: -width * 0.1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <IconItem name={faChevronDown} />
        </View>
        <View
          style={{
            backgroundColor: '#111',
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 100,
          }}>
          <View
            style={{
              backgroundColor: '#333',
              height: 30,
              paddingHorizontal: 12,
              borderWidth: 1,
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Text style={{color: '#ffffff90', fontSize: 12}}>노래</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{color: '#ffffff90', fontSize: 12}}>동영상</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <IconItem name={faChromecast} />
          <IconItem name={faEllipsisVertical} />
        </View>
      </Animated.View>
    </Animated.View>
  );
}

function IconItem({name}: {name: IconDefinition}) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon icon={name} color="white" size={24} />
    </View>
  );
}
