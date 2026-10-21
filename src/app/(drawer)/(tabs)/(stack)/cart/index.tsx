import CustomButton from "@/shared/CustomButton";
import { removeFromCart, useCartItems } from "@/store/cart.store";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

const CartScreen = () => {
  const cartItems = useCartItems();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="mb-2 text-2xl font-work-black">
          Tu carrito está vacío
        </Text>
        <Text className="mb-5 text-center">
          Agrega productos desde su pantalla de detalle.
        </Text>
        <Link href="/products" asChild>
          <CustomButton>Ver productos</CustomButton>
        </Link>
      </View>
    );
  }

  return (
    <View className="flex-1 px-5">
      <FlatList
        className="flex-1"
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between border-b border-gray-200 py-4">
            <View className="flex-1 pr-3">
              <Text className="font-work-black">{item.title}</Text>
              <Text>Precio: {item.price.toFixed(2)}</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Eliminar ${item.title} del carrito`}
              className="p-3"
              onPress={() => removeFromCart(item.id)}
            >
              <Ionicons name="trash-outline" size={22} color="#b91c1c" />
            </Pressable>
          </View>
        )}
      />
      <View className="flex-row justify-between border-t border-gray-300 py-4">
        <Text className="font-work-black">Total</Text>
        <Text className="font-work-black">{total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default CartScreen;
