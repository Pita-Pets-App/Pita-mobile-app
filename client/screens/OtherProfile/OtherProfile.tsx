import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import user from '../../assets/user.jpg'
import Navbar from "../Home/Components/Navbar";
import logOut from '../../assets/logout.png'
import email from '../../assets/email.png'
import axios from "axios";
import { port } from "../../port";
import peticon from '../../assets/peticon.png'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
interface UserInfo {
  image:string;

}
interface UserInfoProps {
  image?: string;
  fname?: string;
  lname?: string;
  email?: string;
  pets?:any
}

const { width, height } = Dimensions.get("screen");
const OtherProfile: React.FC<any> = ({route}) => {
  const [userData,setUserData]=useState<UserInfoProps>({})
  const navigation=useNavigation()
  const {id}=route.params
  
  const token = useSelector((state: RootState) => state.auth.authToken);
  useEffect(()=>{
    axios.get(`${port}/api/users/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((ress)=>{
      setUserData(ress.data)
      
    })
  },[])
  return (
    <View style={styles.container}>
     <ScrollView>
       <View><Image style={{width:width*1,height:height*0.35}} source={{uri:userData?.image}}></Image></View>
      <View style={styles.UsersProfile}>
      <View style={styles.petContainer}> 
            <View style={styles.UserNameContainer}>
                <Text style={{fontWeight:"bold",fontSize:20}}>{userData?.fname+" "+userData?.lname}</Text>
            </View>
            <View style={styles.UserNameContainer}>
            <View style={styles.userEmail}>     
                <Image style={{width:width*0.055,height:height*0.0185}} source={email}></Image>
                <Text>{userData?.email}</Text>
            </View>
            </View>

        </View>
        <View style={styles.petContainer}>
             <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.myPets}>
            <Image style={{width:width*0.08,height:height*0.035}} source={peticon}></Image>
            <Text style={{fontWeight:'bold',fontSize: 18}}>{userData.fname}'s Pets</Text>
            </View>
            <View style={{borderColor:"#4e9d91",borderWidth:1,borderRadius:20,padding:5}}>
            <TouchableOpacity ><Text style={{color:"#4e9d91",fontWeight:"bold"}}>See All</Text></TouchableOpacity>
            </View>
            </View>
      {userData.pets?.length ?<View style={{display:"flex",flexDirection:'row', gap:20,  marginVertical:15,justifyContent:"space-around",paddingHorizontal:15}}>
          
        {userData.pets[0]&&<TouchableOpacity key={(userData?.pets[0]?.id).toString()}>
            <Image style={styles.PetsImage} source={{uri:userData?.pets[0]?.pet_images[0]}}></Image>
            </TouchableOpacity>}
            {userData.pets[1]&& <TouchableOpacity key={(userData?.pets[1]?.id).toString()} >
            <Image style={styles.PetsImage} source={{uri:userData?.pets[1]?.pet_images[0]}}></Image>
            </TouchableOpacity>}
            {userData.pets[2]&& <TouchableOpacity key={(userData?.pets[2]?.id).toString()} >
            <Image style={styles.PetsImage} source={{uri:userData?.pets[2]?.pet_images[0]}}></Image>
            </TouchableOpacity>} 
        </View>:<View style={{display:"flex",justifyContent:"center",alignItems:"center",paddingVertical:25}}><Text style={{fontSize:23}}>NO Pets Yet</Text></View>}
        </View>
      </View>
    </ScrollView> 
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  UsersProfile: {
    display: "flex",
  },
  UserNameContainer: {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:7
},
logout : {
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    gap:10,
   },
    userEmail: {
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    gap:10,
    paddingHorizontal:25,
    paddingVertical:10
   },
PetsImage: {
  width:width*0.2,
  height:height*0.09,
  borderRadius:12
 
 
},
myPets : {
  display:"flex",
  alignItems:"center",
  justifyContent:"flex-start",
  flexDirection:"row",
  gap:10,
 
},
petContainer :{
  backgroundColor:"white",
  marginVertical:7,
  marginHorizontal:20,
  borderRadius:20,
  padding:15,
}
});
export default OtherProfile;
