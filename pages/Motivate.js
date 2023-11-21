import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Motivate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manfaat Berdoa</Text>
      <Text style={styles.tip}>
        1. Menenangkan hati.
      </Text>
      <Text style={styles.tip}>
        2. Segala urusannya dimudahkan dan diberkahi oleh Allah SWT.
      </Text>
      <Text style={styles.tip}>
        3. Meningkatkan Kualitas Hidup.
      </Text>
      <Text style={styles.tip}>
       
      </Text>
      <Text style={styles.title}>
        Waktu-Waktu yang mustajab untuk Berdoa
      </Text>
      <Text style={styles.tip}>
        1. Setelah Sholat Malam
      </Text>
      <Text style={styles.tip}>
        2. Saat Hari Jumat 
      </Text>
      <Text style={styles.tip}>
        3. Saat Malam Lailatul Qadar
      </Text>
      <Text style={styles.tip}>
        4. Saat Hujan Turun
      </Text>
      <Text style={styles.tip}>
        5. Saat Antara Adzan dan Iqomah
      </Text>
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
