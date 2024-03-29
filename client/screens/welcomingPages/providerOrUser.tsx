import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import welcomeVet from '../../assets/welcomevet.png';
import pita from "../../assets/pita33.png"
import user from "../../assets/userV.png"
import prov from "../../assets/providerV.png"
const { width, height } = Dimensions.get('screen');

const ProvOrUser: React.FC <{navigation:any}>= ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={{display:'flex',justifyContent:"center",alignItems:'center'}}><Image style={{width:width*0.9,height:width*0.35}} source={pita}></Image></View>
      <Text style={{marginHorizontal:40,marginVertical:50,fontSize:24,fontWeight:"bold",color:"#4e9d91"}}>Do You Wanna Join Us as </Text>
      <View style={{display:"flex",flexDirection:"row"}}>
        <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between",width:width*0.9,marginHorizontal:10,marginTop:75}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("RegisterOrLogin")}} style={{backgroundColor:"#fff",width:width*0.43,alignItems:'center',justifyContent:"center",borderRadius:20}}>
            <Image style={{width:width*0.49,height:width*0.56,borderRadius:50}} source={user}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("RegisterOrLoginP")}}  style={{backgroundColor:"white",width:width*0.43,alignItems:'center',justifyContent:"center",borderRadius:20}}>
            <Image style={{width:width*0.4,height:width*0.52,borderRadius:10}} source={prov}></Image>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#bde2e2",
    paddingTop:70
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
});

export default ProvOrUser;
