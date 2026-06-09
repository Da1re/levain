import { CATEGORY_LABELS, formatPrice, MOCK_MENU } from "@levain/core";
import { colors, fontSize, fontWeight, spacing } from "@levain/tokens";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MenuDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = MOCK_MENU.find((m) => m.id === id);

  if (!item) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>메뉴를 찾을 수 없어요.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: item.name }} />
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.category}>{CATEGORY_LABELS[item.category]}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{formatPrice(item.price)}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  image: { width: "100%", height: 240, backgroundColor: colors.surfaceMuted },
  body: { padding: spacing[5], gap: spacing[2] },
  category: { color: colors.secondary, fontSize: fontSize.sm },
  name: {
    color: colors.text,
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
  },
  price: {
    color: colors.text,
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
  },
  desc: {
    color: colors.textMuted,
    fontSize: fontSize.base,
    marginTop: spacing[2],
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  notFound: { color: colors.textMuted, fontSize: fontSize.base },
});
