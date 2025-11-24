import {faChromecast} from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faSearch, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
  Animated,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LogoHeader({headerAnim}: {headerAnim: Animated.Value}) {
  return (
    <Animated.View
      style={{
        marginTop: headerAnim.interpolate({
          inputRange: [-40, 0, 100],
          outputRange: [0, 0, -45],
        }),
        opacity: headerAnim.interpolate({
          inputRange: [-40, 0, 20],
          outputRange: [1, 1, 0],
        }),
      }}>
      <View
        style={{
          marginLeft: 14,
          marginRight: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 90, height: 30}}
        />
        <View style={{flexDirection: 'row'}}>
          <IconItem name={faChromecast} />
          <IconItem name={faSearch} />
          <IconItem name={faUser} />
        </View>
      </View>
    </Animated.View>
  );
}

function IconItem({name}: {name: IconDefinition}) {
  const User = name === faUser;
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 45,
          width: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {User ? (
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: '#555',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faUser} size={20} color="white" />
          </View>
        ) : (
          <FontAwesomeIcon icon={name} size={20} color="white" />
        )}
      </View>
    </TouchableOpacity>
  );
}
