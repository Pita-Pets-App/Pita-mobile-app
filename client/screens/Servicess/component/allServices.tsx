import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { port } from "../../../port";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");



const AllServices: React.FC = () => {
  const [serviceData, setServiceData] = useState<Services[] | []>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const navigation=useNavigation()

  useEffect(() => {
    const getData = async () => {
        setIsLoading(true)
      try {
        const result = await axios.get(`${port}/api/service`);
        setServiceData(result.data);
        setIsLoading(false)
        const data = result.data[1]
        console.log("services from all services", data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.UsersServices}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        serviceData.map((el, i) => (
          <View key ={i}>
            <TouchableOpacity onPress={()=>{
              navigation.navigate("DynamicScreenAllServices" as never, {serviceId : el.id} )}} 
              style={styles.Service}>
              <Image
                style={styles.images}
                source={{ uri: el.service_image }}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.item}>{el.service_name}</Text>
          </View>
        ))
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  UsersServices: {
    paddingTop: 20,
    display: "flex",
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingBottom: 75,
  },
  item: {
    display: "flex",
    textAlign: "center",
    color: "grey",
  },
  Service: {
    backgroundColor: "white",
    width: width * 0.29,
    height: height * 0.13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    display: "flex",
  },
  images: {
    width: width * 0.2,
    height: height * 0.09,
  },
});
export default AllServices;
