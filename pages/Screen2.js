// Screen3.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen3 = () => {
  const navigation = useNavigation();

  const goToMotivate = () => {
    navigation.navigate('Motivate'); // Pindah ke halaman Tips Menaikan Berat Badan
  };

  const goToFoodRecipe = () => {
    navigation.navigate('FoodRecipe'); // Pindah ke halaman Resep Makanan
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 3</Text>
      <TouchableOpacity style={styles.button} onPress={goToMotivate}>
        <Text style={styles.buttonText}>TIPS & TRICK Menambah Iman</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToFoodRecipe}>
        <Text style={styles.buttonText}>Kumpulan Doa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Screen3;
