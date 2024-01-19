import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import titi2 from "../../../assets/wieght.png";
import titi3 from "../../../assets/birthdate.png";

import tit from "../../../assets/gender.png";
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('screen');

const Poid: React.FC = (): React.ReactElement => {
  return (
    <View
    style={{justifyContent:"center",flexDirection:"column",alignItems:"center",padding:5,marginBottom:20}}>
    <View style={styles.Genre}>
   
        <Image source={tit} style={styles.image} />
        <View >
          <Text style={[styles.text, { color: '#bcbcbc' }]}>Gendre</Text>
          <Text style={[styles.text, { color: '#bcbcbc' }]}>Femelle</Text>
        </View>
    </View>
    <View style={styles.Genre}>
   
   <Image source={titi2} style={styles.image} />
   <View >
     <Text style={[styles.text, { color: '#bcbcbc' }]}>Wieght</Text>
     <Text style={[styles.text, { color: '#bcbcbc' }]}>20</Text>
   </View>
</View>
<View style={styles.Genre}>
   
   <Image source={titi3} style={styles.image} />
   <View >
     <Text style={[styles.text, { color: '#bcbcbc' }]}>Birth date</Text>
     <Text style={[styles.text, { color: '#bcbcbc' }]}>12-12-2023</Text>
   </View>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  Genre: {
    backgroundColor: "#fff",
    width: width,
    height: width * 0.2,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:40,
    borderBottomColor:"grey",
    borderBottomWidth:1
  },


  text: {
    color: '#bcbcbc',
  },
  image: {
    width: width * 0.2,  
    height: width * 0.15, 
    resizeMode: 'contain',
    marginTop: 10, 

    justifyContent:"flex-start", 
  },
});

export default Poid;
