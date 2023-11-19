import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const Screen3 = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ProfilePict.png')} // Ganti dengan path foto dari asset
        style={styles.profileImage}
      />
      <Text style={styles.title}>Biodata Pembuat Aplikasi</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.text}>Andhika Renan Daniswara</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.text}>21120121140158</Text>
      </View>
      <TouchableOpacity onPress={() => openLink('mailto:andhrenand@gmail.com')}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={[styles.text, styles.link]}>andhrenand@gmail.com</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://github.com/andhrenand')}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>GitHub:</Text>
          <Text style={[styles.text, styles.link]}>github.com/andhrenand</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.instagram.com/andhrenan/')}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Instagram:</Text>
          <Text style={[styles.text, styles.link]}>@andhrenan</Text>
        </View>
      </TouchableOpacity>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    fontSize: 16,
  },
  link: {
    color: 'black',
  },
});

export default Screen3;
