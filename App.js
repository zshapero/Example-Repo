import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.hero}>
        <Text style={styles.logo}>ShopHook</Text>
        <Text style={styles.tagline}>Your daily TikTok Shop edge.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome</Text>
        <Text style={styles.cardBody}>
          You're looking at the very first version of your app, running live on
          your phone. We'll add the trending feed, scripts, and subscription
          flow next.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0F',
    paddingHorizontal: 24,
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#FF2D55',
    fontSize: 44,
    fontWeight: '800',
    letterSpacing: -1,
  },
  tagline: {
    color: '#E5E5EA',
    fontSize: 16,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardBody: {
    color: '#AEAEB2',
    fontSize: 15,
    lineHeight: 22,
  },
});
