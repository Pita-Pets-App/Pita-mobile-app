import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import CartAdoptation from "./Components/CartAdoptation";
import dog from "../../assets/dogcategories.png";
import cat from "../../assets/catcategory.png";
import bird from "../../assets/birdcategory.png";
import fish from "../../assets/fishcategory.png";


const { width, height } = Dimensions.get("screen");

const Adoptation: React.FC = (): React.ReactElement => {
  const [active,setActive]=useState(0)
  return (
    <ScrollView >
      <View style={{backgroundColor:"white",paddingBottom:10,borderBottomWidth:1,borderColor:"#4e9d91"}}>
      <View style={{marginLeft:10,marginVertical:7}}>
        </View>
        <ScrollView  horizontal>
          <TouchableOpacity onPress={()=>{setActive(0)}}>
            <View
              style={active==0?styles.allact:styles.all}
            >
              <Text style={active==0?styles.alltact:styles.allt}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setActive(1)}}>
            <View style={active==1?styles.categoriesact:styles.categories}>
              <Image
                style={{ width: width * 0.08, height: width * 0.08 }}
                source={dog}
              ></Image>
              <Text
               style={active==1?styles.alltact:styles.allt}
              >
                Dogs
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setActive(2)}}>
            <View style={active==2?styles.categoriesact:styles.categories}>
              <Image
                style={{ width: width * 0.08, height: width * 0.08 }}
                source={cat}
              ></Image>
              <Text
                 style={active==2?styles.alltact:styles.allt}
              >
                Cats
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setActive(3)}}>
            <View style={active==3?styles.categoriesact:styles.categories}>
              <Image
                style={{ width: width * 0.08, height: width * 0.08 }}
                source={bird}
              ></Image>
              <Text
                 style={active==3?styles.alltact:styles.allt}
              >
                Birds
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setActive(4)}}>
            <View style={active==4?styles.categoriesact:styles.categories}>
              <Image
                style={{ width: width * 0.08, height: width * 0.08 }}
                source={fish}
              ></Image>
              <Text
                style={active==4?styles.alltact:styles.allt}
              >
                Fishes
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{marginLeft:10,marginVertical:10}}>
        </View>
      <CartAdoptation />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  allPages: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 10,
    rowGap: 10,
  },
  cartAdoptation: {
    width: width * 0.45,
  },
  title: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: height * 0.09,
    gap: 60,
  },
  allact:{
    
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: "#6fbbb1",
      borderColor: "#4e9d91",
      borderWidth: 1,
      borderRadius: 20,
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
    
  },
  all:{
    
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: "white",
      borderColor: "#4e9d91",
      borderWidth: 1,
      borderRadius: 20,
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
    
  },
  alltact:{
    fontSize: 15, color: "white", fontWeight: "bold" 
  },
  allt:{
    fontSize: 15, color: "#4e9d91", fontWeight: "bold" 
  },
  categories: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "white",
    borderColor: "#4e9d91",
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoriesact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#6fbbb1",
    borderColor: "#4e9d91",
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Adoptation;
