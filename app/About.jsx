import { Text, View, StyleSheet, Image } from 'react-native';
import Sidebar from "../components/Sidebar";

export default function About() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <Text style={styles.title}>About Our Store</Text>
        <Text style={styles.description}>
          Welcome to our online store! We provide high-quality products at the best prices.
          Our mission is to offer a seamless shopping experience with secure payments
          and fast delivery.
        </Text>
        <Image source={require("../assets/favicon.png")} style={styles.image} />
        <Text style={styles.subTitle}>Why Choose Us?</Text>
        <Text style={styles.bullet}>✔ Wide range of quality products</Text>
        <Text style={styles.bullet}>✔ Secure payment methods</Text>
        <Text style={styles.bullet}>✔ Fast and reliable delivery</Text>
        <Text style={styles.bullet}>✔ 24/7 Customer support</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
