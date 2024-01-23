import React ,{useEffect, useState}from "react";
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
import Svg, { Rect, Path } from 'react-native-svg';
import { port } from "../../port";
import axios from "axios";
import {getOneAnimal} from "../../store/adaptSlice"
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import chien from "../../assets/chien.jpg";

const { width, height } = Dimensions.get("screen");
interface Animal {
  id:number,
  pet_name: string;
  pet_weight: number;
  pet_gender: string;
  pet_race: string;
  pet_images: string[]; 
  birth_date: Date | null;
  pet_description: string;
  status:  'Adopted' | 'Not Adopted';
}

const Adoptation: React.FC = ({route}:any): React.ReactElement => {
const dispatch=useDispatch()
  const [adaptationTable,setAdaptationTable]=useState([])
const [element,setElement]=useState({})
const getAllAdapt=async ()=>{
try {
  const get=await axios.get(`${port}/api/Adp`)
  setAdaptationTable(get.data)
} catch (error) {
  console.log(error)
}

}
useEffect(()=>{getAllAdapt()
  // dispatch(getOneAnimal(element))
},[dispatch])

console.log(adaptationTable)
const navigation=useNavigation()
  return (
    <ScrollView style={{ backgroundColor: "white", margin: 2 }}>
        <TouchableOpacity  onPress={()=>{navigation.navigate("AddNewAdoptation" as never,)}} style={{width:width*0.98,height:height*0.05,justifyContent:"flex-start",alignItems:"flex-end"}}>
        <Svg  
        width="40"
        height="40"
        viewBox="0 0 16 16"
      
        fill="#d54444"
      >
        <Rect x="11" y="11" width="4.958" height="0.918" fill="#eaabf7" />
        <Rect x="13" y="9" width="0.918" height="4.957" fill="#eaabf7" />
        <Path
          d="M11.917,7.958 L14.972,7.958 C15.577,6.823 15.969,5.527 15.969,4.062 C15.969,1.833 14.174,0.031 11.958,0.031 C10.045,0.031 8.447,1.379 8.047,3.179 C7.631,1.376 6.026,0.031 4.102,0.031 C1.865,0.031 0.052,1.855 0.052,4.103 C0.052,10.599 8.057,13.941 8.057,13.941 C8.057,13.941 8.842,13.617 9.917,12.967 L9.917,9.917 L11.917,9.917 L11.917,7.958 L11.917,7.958 Z"
          fill="#eaabf7"
        />
      </Svg>
        </TouchableOpacity>
    {adaptationTable.map((e:Animal):any=>{
    // setElement(e.id)

      return (
        <View   key={e.id}>
   {/* <CartAdoptation    /> */}
   <View style={styles.allPages1}>
      <TouchableOpacity onPress={()=>{navigation.navigate("AdoptationDetails" as never,)}

    }>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
      <Text style={{ fontSize: 11, fontWeight: "bold" }}>
        {e.pet_name}
      </Text>
      <View style={styles.description}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Genre:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          {e.pet_gender}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Age:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          2 monthes
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
   
    
    </View>
        </View>
      )
    })}
   
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
    backgroundColor: "#ffc368",
    height: height * 0.09,
    gap: 60,
  },
  allPages1: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 10,
    rowGap: 10,
  },
  allPag: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    width: width * 0.45,
    height: height * 0.27,
    gap: 7,
    borderRadius: 15,
    borderColor:"black",
    paddingTop:10
  },
  animalPicture: {
    width: width * 0.4,
    height: height * 0.18,
    borderRadius: 15,
    
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:10
    
  },
});

export default Adoptation;
