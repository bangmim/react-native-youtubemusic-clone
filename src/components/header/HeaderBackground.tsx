import {Animated, Image, SafeAreaView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HeaderBackground({
  selectedCategory,
  headerBgAnim,
}: {
  selectedCategory: number | undefined;
  headerBgAnim: Animated.Value;
}) {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 350,
        width: '100%',
        top: headerBgAnim.interpolate({
          inputRange: [-10, 0, 100],
          outputRange: [0, 0, -100],
        }),
        opacity: headerBgAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
        }),
      }}>
      {selectedCategory === undefined ? (
        <>
          <LinearGradient
            start={{x: 0.7, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 0.3, 0.6, 1]}
            colors={['#ffa10030', '#28bf4b20', '#11111190', '#111111']}
            style={{height: 350}}
          />
        </>
      ) : (
        <>
          <Image
            source={{uri: `https://picsum.photos/30${selectedCategory}`}}
            style={{width: '100%', height: 350}}
          />
          <LinearGradient
            start={{x: 0.5, y: 0.1}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 1]}
            colors={['#11111100', '#111111']}
            style={{height: 350, position: 'absolute', width: '100%'}}
          />
        </>
      )}
    </Animated.View>
  );
}
