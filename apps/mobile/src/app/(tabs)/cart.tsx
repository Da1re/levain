import { colors, fontSize, fontWeight, spacing } from "@levain/tokens";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.content}>
        <Text style={styles.title}>장바구니</Text>
        <Text style={styles.empty}>아직 담은 메뉴가 없어요.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing[5], gap: spacing[2] },
  title: {
    color: colors.text,
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
  },
  empty: { color: colors.textMuted, fontSize: fontSize.base },
});
