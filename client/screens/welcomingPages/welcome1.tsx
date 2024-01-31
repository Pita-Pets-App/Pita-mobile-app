import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import welcomeVet from '../../assets/welcomevet.png';

const { width, height } = Dimensions.get('screen');

const Welcome: React.FC <{navigation:any}>= ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={welcomeVet} style={styles.image}></Image>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Our Services</Text>
          <Text style={styles.description}>
            Explore a variety of services designed to make your life easier. From A to Z, we've got you covered.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.nav}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}><View style={{paddingVertical:5,paddingHorizontal:15,borderRadius:20,borderColor:"#4e9d91",borderWidth:1}}><Text style={{color: '#4e9d91',}}>Skip</Text></View></TouchableOpacity>
        <View style={{display:"flex",flexDirection:"row",gap:4}}>
            <View style={{backgroundColor:"#4e9d91",width:10,height:10,borderRadius:10}}></View>
            <View style={{backgroundColor:"#d9d9d9",width:10,height:10,borderRadius:10}}></View>
            <View style={{backgroundColor:"#d9d9d9",width:10,height:10,borderRadius:10}}></View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Welcome2")}><View style={{backgroundColor: '#4e9d91', paddingVertical:5,paddingHorizontal:15,borderRadius:20,borderColor:"#4e9d91",borderWidth:1}}><Text style={{color: '#fff',}}>Next</Text></View></TouchableOpacity>
        
      </View>
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
    color:"#4e9d91",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  description: {
    
    textAlign: 'center',
    color: '#4e9d91',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Welcome;
