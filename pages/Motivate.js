import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Motivate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manfaat Berdoa</Text>
      <Text style={styles.tip}>
        1. Konsumsi makanan yang kaya akan kalori, seperti kacang-kacangan, dan biji Niko, alpukat, dan susu Adit.
      </Text>
      <Text style={styles.tip}>
        2. Lakukan latihan kekuatan, seperti angkat beban kehidupan, untuk membangun otot dan urat.
      </Text>
      <Text style={styles.tip}>
        3. Tambahkan camilan sehat antara waktu makan utama Anda.
      </Text>
      {/* Tambahkan tips menaikan berat badan lainnya */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Motivate;
