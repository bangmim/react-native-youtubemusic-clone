import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
const {width, height} = Dimensions.get('window');

export default function MusicListMedium() {
  const {faker} = require('@faker-js/faker');

  return (
    <View>
      <Title />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10, gap: 20}}>
        {[...Array(7)].map((value, index) => {
          return (
            <View key={index}>
              <MusicListMediumItem songName={faker.music.songName()} />
              <MusicListMediumItem songName={faker.music.songName()} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListMediumItem({songName}: {songName: string}) {
  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/20${Math.floor(Math.random() * 10)}`,
        }}
        style={{width: width / 4, height: width / 4, borderRadius: 2}}
      />
      <View
        style={{
          position: 'absolute',
          width: width / 4,
          height: width / 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesomeIcon icon={faPlay} size={20} color="white" />
      </View>
      <View style={{width: width / 4, marginTop: 5, height: 60}}>
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
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'flex-end',
      }}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 28}}>
        다시듣기
      </Text>
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
