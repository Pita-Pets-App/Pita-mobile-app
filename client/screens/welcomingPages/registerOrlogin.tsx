import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import welcomeVet from '../../assets/welcomevet.png';

const { width, height } = Dimensions.get('screen');

const RegisterOrLogin: React.FC <{navigation:any}>= ({navigation}) => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    backgroundColor: "#d3ecf0",
    borderRadius: 30,
  },
  image: {
    height: height * 0.55,
    borderRadius: 30,
    width: width,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  title: {
    color:"#ffc368",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  description: {
    
    textAlign: 'center',
    color: '#ffc368',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default RegisterOrLogin;
