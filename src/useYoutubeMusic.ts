import {useCallback, useRef} from 'react';
import {Animated, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

export default function useYoutubeMusic() {
  const headerAnim = useRef(new Animated.Value(0)).current;
  const headerBgAnim = useRef(new Animated.Value(0)).current;

  const scrollStartRef = useRef(0);

  const showHeader = useRef(true);

  const onScrollBeginDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;
      scrollStartRef.current = y;
    },
    [],
  );

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;
      const dy = y - scrollStartRef.current;
      // 위로 올라가는 헤더
      if (0 < dy && showHeader.current) {
        headerAnim.setValue(dy);
      }
      // 아래로 내려가는 헤더
      if (-40 < dy && dy < 0 && !showHeader.current) {
        headerAnim.setValue(40 + dy);
      }
      headerBgAnim.setValue(y);
    },
    [headerAnim],
  );

  const onScrollEndDrag = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const y = e.nativeEvent.contentOffset.y;

      const dy = y - scrollStartRef.current;

      // 위로 올라가는 헤더
      if (0 < dy && showHeader.current) {
        Animated.spring(headerAnim, {
          toValue: 100,
          useNativeDriver: false,
        }).start();
        showHeader.current = false;
      }
      // 아래로 내려가는 헤더
      if (dy < 0 && !showHeader.current) {
        Animated.spring(headerAnim, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
        showHeader.current = true;
      }
    },
    [],
  );

  return {
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
    headerAnim,
    headerBgAnim,
  };
}
