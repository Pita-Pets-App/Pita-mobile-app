import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { port } from "../../port";



const { width, height } = Dimensions.get("screen");
const AddPet: React.FC = () => {
 


  return (
   <View><Text>Add Pet</Text></View>
  );
};
const styles = StyleSheet.create({
});
export default AddPet;