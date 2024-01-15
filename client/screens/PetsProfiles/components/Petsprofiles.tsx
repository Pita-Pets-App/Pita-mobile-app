import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import bele from '../../../assets/profile.jpg';

const { width, height } = Dimensions.get('screen');

const Petsprofile: React.FC = (): React.ReactElement => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={bele}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Bella</Text>
          <View style={styles.genderContainer}>
            <FontAwesome5 name="venus" size={18} color="#5c5c5c" />
            <Text style={styles.gender}> Female</Text>
          </View>
          <Text style={styles.weight}>Weight: <Text style={styles.boldText}>20 kg</Text></Text>
          <Text style={styles.birthDate}>Birth date: <Text style={styles.boldText}>12-12-2023</Text></Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: height * 0.8, 
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  gender: {
    fontSize: 18,
    marginLeft: 5,
  },
  weight: {
    fontSize: 16,
    marginBottom: 2,
  },
  birthDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Petsprofile;