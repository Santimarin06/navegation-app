import CustomButton from "@/shared/CustomButton";
import { addToCart, useCartItems } from "@/store/cart.store";
import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const cartItems = useCartItems();

  const product = products.find((p) => p.id == id);
  const isAddedToCart = product
    ? cartItems.some((item) => item.id === product.id)
    : false;

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Producto",
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-work-black">{product.price}</Text>
      <CustomButton
        className={`mt-6 ${isAddedToCart ? "opacity-60" : ""}`}
        disabled={isAddedToCart}
        onPress={() => addToCart(product)}
      >
        {isAddedToCart ? "Agregado al carrito" : "Agregar al carrito"}
      </CustomButton>
    </View>
  );
};

export default ProductScreen;
