import CustomButton from '../../../../components/shared/CustomButton';
import { Link, router } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push('../products')}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push('../profile')}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push('../settings')}
          className="mb-2"
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="../products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        <CustomButton
          color="primary"
          onPress={() => router.push('../products')}
        >
          Abrir menu
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;