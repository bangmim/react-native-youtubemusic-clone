import {faBackward, faBackwardFast} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
const {width, height} = Dimensions.get('window');

export default function MusicListLarge() {
  const {faker} = require('@faker-js/faker');

  return (
    <View>
      <Title />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10, gap: 20}}>
        {[...Array(10)].map((value, index) => {
          return (
            <View key={index}>
              <MusicListLargeItem songName={faker.music.songName()} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
function MusicListLargeItem({songName}: {songName: string}) {
  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/20${Math.floor(Math.random() * 10)}`,
        }}
        style={{width: width / 2.5, height: width / 2.5, borderRadius: 4}}
      />

      <View style={{width: width / 2.5, marginTop: 5, height: 60}}>
        <Text
          style={{color: 'white', fontSize: 13, marginBottom: 10}}
          numberOfLines={2}>
          {songName}
        </Text>
      </View>
    </View>
  );
}
function Title() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 50,
            borderColor: '#999',
            padding: 5,
            marginRight: 10,
          }}>
          <FontAwesomeIcon icon={faBackward} size={20} color="#999" />
        </View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 28}}>
          돌아보기
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: '#ddd',
            fontSize: 12,
          }}>
          더보기
        </Text>
      </View>
    </View>
  );
}
