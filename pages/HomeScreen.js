import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to THE INCREDIBLE OF DOA</Text>
      <Image
       source={require('../assets/gambarBerdoa.jpg')}
        
        style={styles.image}
      />
      <Text style={styles.description}>
        The Incridible Of Doa merupakan aplikasi untuk membantu dalam.
      </Text>
      {/* Konten tambahan dari halaman Home */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 0,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify', 
  },
});

export default HomeScreen;
