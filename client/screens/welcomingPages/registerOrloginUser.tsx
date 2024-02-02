import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import welcomeVet from '../../assets/welcomevet.png';
import pita from '../../assets/pitaouss.png'
const { width, height } = Dimensions.get('screen');

const RegisterOrLogin: React.FC <{navigation:any}>= ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={{width:width*0.7,height:width*0.7}} source={pita}></Image>
       <TouchableOpacity 
       onPress={()=>navigation.navigate("Register")}
       style={{marginVertical:40,backgroundColor:"#4e9d91",width:width*0.7,justifyContent:'center',alignItems:'center',height:height*0.07,borderRadius:15}}>
        <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Register</Text>
        </TouchableOpacity>
       <TouchableOpacity 
        onPress={()=>navigation.navigate("Login")}
       style={{backgroundColor:"#4e9d91",width:width*0.7,justifyContent:'center',alignItems:'center',height:height*0.07,borderRadius:15}}>
        <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#bde2e2",
    paddingVertical:270
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
