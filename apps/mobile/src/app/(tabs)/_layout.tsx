import { colors } from "@levain/tokens";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSubtle,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "메뉴" }} />
      <Tabs.Screen name="cart" options={{ title: "장바구니" }} />
    </Tabs>
  );
}
