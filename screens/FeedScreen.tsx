import { View, Text } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';

export default function FeedScreen() {
  const data = useAppSelector((state) => state.recipes.data);

  return (
    <View>
      <Text style={{ fontFamily: 'Poppins_400Regular' }}>{data[0].name}</Text>
    </View>
  );
}
