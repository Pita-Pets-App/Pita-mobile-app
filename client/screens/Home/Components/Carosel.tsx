
import React , { useEffect, useState } from "react"
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

  const navigateToServiceDetails = (serviceId) => {
    navigation.navigate(...['DynamicScreenAllServices', { serviceId }] as never);
  };

  useEffect(()=>{
    const getData=async()=>{
try {


    const result=await axios.get(`${port}/api/service`)
    setServiceData(result.data);
    console.log("ser",result.data);
    
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
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
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
          <Text style={{ color: "black", fontSize: 14 }} > See All </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.allService} horizontal>
        <View style={styles.horizontalScrollContainer}>
         
           
            <TouchableOpacity key={serviceData[0]?.id} onPress={() => navigateToServiceDetails(serviceData[0]?.id)}>
              <View style={styles.oneServicee}>
              <View style={styles.oneService}>
                <Image style={{ width: 50, height: 50 }} source={{uri:serviceData[0]?.service_image }}></Image>
              </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity key={serviceData[1]?.id} onPress={() => navigateToServiceDetails(serviceData[1]?.id)}>
              <View style={styles.oneServicee1}>
              <View style={styles.oneService1}>
                <Image style={{ width: 50, height: 50 }} source={{uri:serviceData[1]?.service_image }}></Image>
              </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity key={serviceData[2]?.id} onPress={() => navigateToServiceDetails(serviceData[2]?.id)}>
              <View style={styles.oneServicee2}>
              <View style={styles.oneService2}>
                <Image style={{ width: 50, height: 50 }} source={{uri:serviceData[2]?.service_image }}></Image>
              </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity key={serviceData[3]?.id} onPress={() => navigateToServiceDetails(serviceData[3]?.id)}>
              <View style={styles.oneServicee3}>
              <View style={styles.oneService3}>
                <Image style={{ width: 50, height: 50 }} source={{uri:serviceData[3]?.service_image }}></Image>
              </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity key={serviceData[4]?.id} onPress={() => navigateToServiceDetails(serviceData[4]?.id)}>
              <View style={styles.oneServicee4}>
              <View style={styles.oneService4}>
                <Image style={{ width: 50, height: 50 }} source={{uri:serviceData[4]?.service_image }}></Image>
              </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity key={serviceData[5]?.id} onPress={() => navigation.navigate("Events" as never)}>
              <View style={styles.oneServicee}>
              <View style={styles.oneService}>
                <Image style={{ width: 50, height: 50 }} source={{uri:serviceData[5]?.service_image }}></Image>
              </View>
              </View>
          </TouchableOpacity>
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
    paddingHorizontal:15,
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
    paddingHorizontal: 6,
    gap: 10,
  },
  oneService: {
    backgroundColor: "#d5eef6",
    width: width * 0.22,
    height:width * 0.22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"",
  
  },
  oneServicee: {
    backgroundColor: "white",
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"#d5eef6",
    borderWidth:2,
  },
  oneService1: {
    backgroundColor: "#f8e3fb",
    width: width * 0.22,
    height:width * 0.22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"",
  
  },
  oneServicee1: {
    backgroundColor: "white",
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"#f8e3fb",
    borderWidth:2,
  },
  oneService2: {
    backgroundColor: "#f9efcb",
    width: width * 0.22,
    height:width * 0.22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"",
  
  },
  oneServicee2: {
    backgroundColor: "white",
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"#f9efcb",
    borderWidth:2,
  },
  oneService3: {
    backgroundColor: "#e3edfb",
    width: width * 0.22,
    height:width * 0.22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"",
  
  },
  oneServicee3: {
    backgroundColor: "white",
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"#e3edfb",
    borderWidth:2,
  },
  oneService4: {
    backgroundColor: "#fbe3e3",
    width: width * 0.22,
    height:width * 0.22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"",
  
  },
  oneServicee4: {
    backgroundColor: "white",
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 6,
    shadowRadius: 5,
    borderColor:"#fbe3e3",
    borderWidth:2,
  },
  horizontalScrollContainer: {
    flexDirection: "row",
    gap: 10,
    paddingEnd:15
  },
});
export default Carosel;
