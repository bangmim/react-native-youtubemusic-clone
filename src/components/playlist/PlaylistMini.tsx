import {faForwardStep, faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function PlaylistMini() {
  const {faker} = require('@faker-js/faker');

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 14}}>
        <Text style={{color: '#999'}}>{faker.music.genre()}</Text>
        <Text style={{color: 'white'}} numberOfLines={1}>
          {faker.music.songName()}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faPlay} color="white" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faForwardStep} color="white" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
