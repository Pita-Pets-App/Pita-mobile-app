import React,{useEffect,useState} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { port } from "../../../port";


const { width, height } = Dimensions.get("screen");
const Carosel: React.FC = (): React.ReactElement => {
  const navigation = useNavigation();
  const [serviceData,setServiceData]=useState<Services[]|[]>([])
  
  const navigateToHome = () => {
    navigation.navigate("Services" as never);
    
  };
  useEffect(()=>{
    const getData=async()=>{
try {


    const result=await axios.get(`${port}/api/service`)
    setServiceData(result.data);
    console.log(result.data);
    
}

catch (error) {
console.log(error);
}
}
getData()

    },[])
  return (
    <View style={styles.allPages}>
      <View style={styles.service}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Services
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 20,
            borderColor: "white",
            borderWidth: 1.5,
            width: width * 0.17,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            
          }}
          onPress={navigateToHome}
        >
          <Text style={{ color: "white", fontSize: 14 }} > See All </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.allService} horizontal>
        <View style={styles.horizontalScrollContainer}>
          {serviceData.map((el,i)=>(
            <TouchableOpacity key={i}><View style={styles.oneService}>
            <Image style={{ width: 50, height: 50 }} source={{uri:el.service_image}}></Image>
          </View></TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  allPages: {

    width: width * 0.95,
    height: height * 0.25,
    borderRadius: 8,
    padding: 15,
    gap: 10,
  },
  service: {
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: height * 0.07,
  },
  allService: {

    height: height * 0.09,
    padding: 6,
    gap: 10,
  },
  oneService: {
    backgroundColor: "white",
    width: width * 0.25,
    height: height * 0.113,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
  
  },
  horizontalScrollContainer: {
    flexDirection: "row",
    gap: 10,
    paddingEnd:15
  },
});
export default Carosel;
