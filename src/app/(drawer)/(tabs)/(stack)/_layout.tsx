import { Ionicons } from "@expo/vector-icons";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const drawerNavigation = useNavigation("/(drawer)") as any;

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    if (typeof drawerNavigation?.openDrawer === "function") {
      drawerNavigation.openDrawer();
    }
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(Boolean(canGoBack))}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes Pantalla",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
