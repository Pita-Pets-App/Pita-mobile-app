import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import bele from '../../../assets/profile.jpg';

const { width, height } = Dimensions.get('screen');

const PetsPhoto: React.FC = (): React.ReactElement => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.View}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={bele} style={styles.image}  />
          </TouchableOpacity>
          <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)',width:width*0.9,height:height*0.1,position:"absolute",justifyContent:"center",alignItems:"center",borderRadius:10,
    top: 270,alignContent:"center",
    left: 20,
    right: 0,}}>
            <Text style={{fontSize:30,fontWeight:"bold"}}>Bella</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  },
  imageContainer: {
    width: width * 0.9,
    height: width * 0.9,
 
    alignItems: 'center', 
    justifyContent: 'center', 
   },
  image: {
    width: width*0.6,
    height: height*0.3,
    borderRadius: 30, 
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  View: {
    backgroundColor: "#ffc368",
    width: width,
    height: width,
    justifyContent:"center",
    alignItems:"center",
borderRadius:20
  }
});

export default PetsPhoto;
