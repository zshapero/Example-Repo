import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { estimateDailyEarnings } from '../data/seedProducts';

export function ProductCard({ product, onPress }) {
  const earnings = estimateDailyEarnings(product);
  const commissionPct = Math.round(product.commissionRate * 100);

  return (
    <Pressable style={styles.card} onPress={() => onPress?.(product)}>
      <View style={[styles.thumb, { backgroundColor: product.color }]}>
        <Text style={styles.thumbEmoji}>{product.emoji}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.headerRow}>
          <Text style={styles.brand}>{product.brand.toUpperCase()}</Text>
          <View style={styles.trendBadge}>
            <Text style={styles.trendText}>🔥 {product.trendScore}</Text>
          </View>
        </View>

        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>

        <Text style={styles.hook} numberOfLines={1}>
          {product.hook}
        </Text>

        <View style={styles.statsRow}>
          <Stat label="Price" value={`$${product.price.toFixed(2)}`} />
          <Stat label="Commission" value={`${commissionPct}%`} />
          <Stat
            label="Est. /video"
            value={`$${earnings.toFixed(0)}`}
            highlight
          />
        </View>
      </View>
    </Pressable>
  );
}

function Stat({ label, value, highlight }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, highlight && styles.statValueHighlight]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    gap: 14,
  },
  thumb: {
    width: 76,
    height: 76,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbEmoji: {
    fontSize: 36,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  brand: {
    color: colors.textFaint,
    fontSize: 11,
    letterSpacing: 1,
    fontWeight: '600',
  },
  trendBadge: {
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  trendText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '700',
  },
  name: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  hook: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 14,
  },
  stat: {
    flex: 0,
  },
  statLabel: {
    color: colors.textFaint,
    fontSize: 10,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  statValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  statValueHighlight: {
    color: colors.success,
  },
});
