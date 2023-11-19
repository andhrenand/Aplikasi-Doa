import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailDoa = ({ route }) => {
  const { selectedDoa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedDoa.doa}</Text>
      <Text style={styles.detail}>Ayat: {selectedDoa.ayat}</Text>
      <Text style={styles.detail}>Latin: {selectedDoa.latin}</Text>
      <Text style={styles.detail}>Artinya: {selectedDoa.artinya}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DetailDoa;