import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faThumbsDown, faThumbsUp} from '@fortawesome/free-regular-svg-icons';
import {
  faBackwardStep,
  faForward,
  faForwardStep,
  faPlay,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Animated, Dimensions, Text, View} from 'react-native';
const {height, width} = Dimensions.get('window');

export default function PlaylistFullMid({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}) {
  return (
    <Animated.View
      style={{
        height: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 250],
        }),
        opacity: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 1],
        }),

        width: playlistAnim.interpolate({
          inputRange: [0, height / 2.5, height],
          outputRange: ['0%', '0%', '100%'],
        }),
      }}>
      <MiddleTitle />
      <MiddleTimeLine />
      <MiddleButton />
    </Animated.View>
  );
}

function MiddleTitle() {
  const {faker} = require('@faker-js/faker');

  return (
    <View
      style={{
        marginRight: width * 0.1,
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <FontAwesomeIcon size={20} color="white" icon={faThumbsDown} />
      <View style={{alignItems: 'center', flex: 1, paddingHorizontal: 20}}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          numberOfLines={1}>
          {faker.music.songName()}
        </Text>
        <Text style={{color: 'white', fontSize: 16}}>
          {faker.music.genre()}
        </Text>
      </View>
      <FontAwesomeIcon size={20} color="white" icon={faThumbsUp} />
    </View>
  );
}

function MiddleTimeLine() {
  return (
    <>
      <View style={{marginRight: width * 0.1}}>
        <View style={{borderBottomWidth: 2, borderBottomColor: '#ffffff80'}} />
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#fff',
            marginTop: -6,
            borderRadius: 5,
          }}
        />
        <View
          style={{
            marginTop: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', fontSize: 10}}>0:03</Text>
          <Text style={{color: 'white', fontSize: 10}}>3:17</Text>
        </View>
      </View>
    </>
  );
}
function MiddleButton() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: width * 0.1,
          marginTop: 30,
        }}>
        <FontAwesomeIcon size={24} color="white" icon={faShuffle} />
        <FontAwesomeIcon size={24} color="white" icon={faBackwardStep} />
        <View
          style={{
            backgroundColor: '#ffffff30',
            padding: 14,
            borderRadius: 100,
          }}>
          <FontAwesomeIcon size={36} color="white" icon={faPlay} />
        </View>
        <FontAwesomeIcon size={24} color="white" icon={faForwardStep} />
        <FontAwesomeIcon size={24} color="white" icon={faRepeat} />
      </View>
    </>
  );
}
