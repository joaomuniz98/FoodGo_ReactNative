import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Marcos!</Text>
      <button onClick={() => router.push('/')}></button>
    </View>
  );
}
