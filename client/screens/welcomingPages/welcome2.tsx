import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import Lfa from '../../assets/lfaa.png';

const { width, height } = Dimensions.get('screen');

const Welcome2: React.FC <{navigation:any}>= ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={Lfa} style={styles.image}></Image>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Adoption and Lost & Found</Text>
          <Text style={styles.description}>
          Connect with furry friends waiting for a loving home. Report lost pets and reunite them with their families.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.nav}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}><View style={{paddingVertical:5,paddingHorizontal:15,borderRadius:20,borderColor:"#ffc368",borderWidth:1}}><Text style={{color: '#ffc368',}}>Skip</Text></View></TouchableOpacity>
        <View style={{display:"flex",flexDirection:"row",gap:4}}>
            <View style={{backgroundColor:"#d9d9d9",width:10,height:10,borderRadius:10}}></View>
            <View style={{backgroundColor:"#ffc368",width:10,height:10,borderRadius:10}}></View>
            <View style={{backgroundColor:"#d9d9d9",width:10,height:10,borderRadius:10}}></View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("welcome3")}><View style={{backgroundColor: '#ffc368', paddingVertical:5,paddingHorizontal:15,borderRadius:20,borderColor:"#ffc368",borderWidth:1}}><Text style={{color: '#fff',}}>Next</Text></View></TouchableOpacity>
        
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
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#d3ecf0",
    borderRadius: 30,
  },
  image: {
    height: height * 0.55,
    width: width*0.6,
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

export default Welcome2;
