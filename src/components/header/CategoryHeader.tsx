import {useCallback} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

export default function CategoryHeader({
  selectedCategory,
  setSelectedCategory,
  headerAnim,
}: {
  selectedCategory: number | undefined;
  setSelectedCategory: (category: number | undefined) => void;
  headerAnim: Animated.Value;
}) {
  const category = ['휴식', '에너지 충전', '집중', '운동', '출퇴근/등하교'];

  const onPressCategory = useCallback(
    (index: number) => {
      const data = selectedCategory === index ? undefined : index;
      setSelectedCategory(data);
    },
    [selectedCategory, setSelectedCategory],
  );

  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 20,
          paddingBottom: 5,
          borderBottomWidth: headerAnim.interpolate({
            inputRange: [0, 40],
            outputRange: [0, 0.5],
          }),
          borderBottomColor: '#555',
        }}
        contentContainerStyle={{paddingHorizontal: 10}}>
        {category.map((value, index) => {
          const isSelected = index === selectedCategory;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPressCategory(index)}>
              <View
                style={{
                  padding: 8,
                  paddingHorizontal: 16,
                  borderWidth: 0.5,
                  backgroundColor: isSelected ? '#fff' : '#ffffff10',
                  borderColor: '#ffffff30',
                  marginHorizontal: 4,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: isSelected ? '#111' : 'white',
                  }}>
                  {value}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}


