import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const DoaScreen = () => {
  const [doas, setDoas] = useState([]);
  const [selectedDoa, setSelectedDoa] = useState(null);
  const navigation = useNavigation(); // Use useNavigation hook here

  useEffect(() => {
    const fetchDoas = async () => {
      try {
        const response = await axios.get('https://doa-doa-api-ahmadramadhan.fly.dev/api');
        setDoas(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchDoas();
  }, []);

  const handleDoaPress = (doa) => {
    setSelectedDoa(doa);
    navigation.navigate('DetailDoa', { selectedDoa: doa });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Daftar Doa</Text>
        {doas.map((doa) => (
          <TouchableOpacity key={doa.id} onPress={() => handleDoaPress(doa)} style={styles.doaContainer}>
            <Text style={styles.doaTitle}>{doa.doa}</Text>
          </TouchableOpacity>
        ))}
        {selectedDoa && (
          <View style={styles.selectedDoaContainer}>
            <Text style={styles.selectedDoaTitle}>{selectedDoa.doa}</Text>
            <Text style={styles.selectedDoaText}>Ayat: {selectedDoa.ayat}</Text>
            <Text style={styles.selectedDoaText}>Latin: {selectedDoa.latin}</Text>
            <Text style={styles.selectedDoaText}>Artinya: {selectedDoa.artinya}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  doaContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  doaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  selectedDoaContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  selectedDoaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  selectedDoaText: {
    fontSize: 16,
  },
});

export default DoaScreen;
