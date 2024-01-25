import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import female from "../../../assets/femalee.png";
import male from "../../../assets/malee.png";
const { width, height } = Dimensions.get("screen");
import chien from "../../../assets/chien.jpg";
import exem from "../../../assets/exemple.png";
import exem1 from "../../../assets/exemple1.png";

const CartAdoptation: React.FC = (): React.ReactElement => {
  const navigation=useNavigation()
  return (
    <View style={styles.allPages}>
      <TouchableOpacity style={{marginBottom:25}} onPress={()=>navigation.navigate("AdoptationDetails" as never)}>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
        <View style={{marginLeft:10}} >
        <Text style={{fontSize:18,fontWeight:"bold",marginBottom:10}}>PetName</Text>
        <Text style={{marginBottom:10}}>14/10/2020</Text>
        <Text >location</Text>
      </View>
      <Image style={{width:width*0.11,height:width*0.11,position:"absolute",top:6,right:12}} source={male}></Image>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginBottom:25}} onPress={()=>navigation.navigate("AdoptationDetails" as never)}>
    <View style={styles.allPag}>
      <Image source={exem1} style={styles.animalPicture}></Image>
        <View style={{marginLeft:10}} >
        <Text style={{fontSize:18,fontWeight:"bold",marginBottom:10}}>PetName</Text>
        <Text style={{marginBottom:10}}>14/10/2020</Text>
        <Text >location</Text>
      </View>
      <Image style={{width:width*0.11,height:width*0.11,position:"absolute",top:6,right:12}} source={female}></Image>
    </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginBottom:25}} onPress={()=>navigation.navigate("AdoptationDetails" as never)}>
    <View style={styles.allPag}>
      <Image source={exem} style={styles.animalPicture}></Image>
        <View style={{marginLeft:10}} >
        <Text style={{fontSize:18,fontWeight:"bold",marginBottom:10}}>PetName</Text>
        <Text style={{marginBottom:10}}>14/10/2020</Text>
        <Text >location</Text>
      </View>
      <Image style={{width:width*0.11,height:width*0.11,position:"absolute",top:6,right:12}} source={male}></Image>
    </View>
    </TouchableOpacity>
   
    
    </View>
  );
};
const styles = StyleSheet.create({
  allPages: {
    padding: 10,
    justifyContent: "space-between",
    columnGap: 10,
    rowGap: 10,
  },
  allPag: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    width: width * 0.93,
    height: height * 0.16,
    gap: 7,
    borderRadius: 15,
    borderColor:"black",
  },
  animalPicture: {
    width: width * 0.35,
    height: width * 0.39,
    borderRadius: 15,
    
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:10
    
  },
});
export default CartAdoptation;
