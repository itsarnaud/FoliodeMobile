import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RegisterScreen from '@/app/RegisterScreen';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
};

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    
      <RegisterScreen navigation={navigation} />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
  },
});