import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity
} from "react-native";
import { port } from "../../port";
import { useSelector,useDispatch } from "react-redux";
import del from '../../assets/delete.png'
import axios from "axios";
import { AppDispatch } from '../../lib/redux/store';
import { updateUserData } from '../../lib/redux/user/userSlice';

interface Pets {
  id:number,
  pet_name:string,
  pet_race:string,
  birth_date:string,
  pet_images:any[]
}

const { width, height } = Dimensions.get("screen");
const AllPets: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const user = useSelector((state: RootState) => state.user?.userData);
  const petData = useSelector((state: RootState) => state.user?.userData.pets);
  const handelDel=async(ids:number)=>{
    const dele=await axios.delete(`${port}/api/pets/${ids}`)
    const actionResult = await dispatch(updateUserData({
      fname:user.fname
    }));
  }

  return (
   <ScrollView>
     <View  style={styles.container}>
    {petData.map((el:Pets,i:number)=>(
      <View key={i} style={styles.view}>
        <Image style={styles.PetsImage} source={{uri:el?.pet_images[0]}}></Image>
        <View style={{width:width*0.2}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>{el.pet_name}</Text>
        </View>
        <TouchableOpacity onPress={()=>{handelDel(el.id)}}>
        <Image style={{width:width*0.08,height:height*0.03}} source={del}></Image>
        </TouchableOpacity>
         </View>
    ))}
    </View>
   </ScrollView>
  );
};
const styles = StyleSheet.create({
  container:{
    display:"flex",
    alignItems:"center",
    padding:10,
    marginVertical:45
  },
  view:{
    backgroundColor:"#d9d9d9",
    width:width*0.8,
    height:height*0.1,
    borderRadius:15,
    padding:13,
    marginVertical:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center'
  },
  PetsImage: {
    width:width*0.16,
    height:width*0.16,
    borderRadius:12
},
});
export default AllPets;
