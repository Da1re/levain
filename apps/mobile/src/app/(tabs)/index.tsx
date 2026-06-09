import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CATEGORY_LABELS, MOCK_MENU, formatPrice } from "@levain/core";
import { colors, fontSize, fontWeight, radius, spacing } from "@levain/tokens";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Levain</Text>
        <Text style={styles.subtitle}>
          mobile · Expo — 공통 패키지 소비 데모
        </Text>

        {MOCK_MENU.map((item) => (
          <Link key={item.id} href={`/menu/${item.id}`} asChild>
            <Pressable key={item.id} style={styles.card}>
              <View>
                <Text style={styles.category}>
                  {CATEGORY_LABELS[item.category]}
                </Text>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text style={styles.price}>{formatPrice(item.price)}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing[5], gap: spacing[3] },
  title: {
    color: colors.primary,
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    marginBottom: spacing[2],
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing[4],
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
  },
  category: { color: colors.secondary, fontSize: fontSize.xs },
  name: {
    color: colors.text,
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
  },
  price: { color: colors.text, fontWeight: fontWeight.semibold },
});
