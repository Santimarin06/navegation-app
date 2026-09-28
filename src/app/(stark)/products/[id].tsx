import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { products } from '../../../../store/products.store';

const ProductScreen = () => {
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const productId = Array.isArray(id) ? id[0] : id;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="mt-2 px-5">
      <Text className="text-2xl font-work-black">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;