import { useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { seedProducts } from '../data/seedProducts';
import { colors } from '../theme/colors';

export function FeedScreen({ onProductPress }) {
  const sortedProducts = useMemo(
    () => [...seedProducts].sort((a, b) => b.trendScore - a.trendScore),
    []
  );

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <FlatList
      data={sortedProducts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={onProductPress} />
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.eyebrow}>{today.toUpperCase()}</Text>
          <Text style={styles.title}>Today's Trending</Text>
          <Text style={styles.subtitle}>
            Beauty & skincare products climbing fastest on TikTok Shop right
            now. Tap any product to generate a 60-second video script.
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 20,
  },
  eyebrow: {
    color: colors.brand,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
});
