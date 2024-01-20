import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import UserPets from "./component/UserPets";
import UserInfo from "./component/UserInfo";
import user from '../../assets/user.jpg'
import Navbar from "../Home/Components/Navbar";
import axios from "axios";
import { port } from "../../port";

interface UserInfo {
  image:string;

}
interface UserInfoProps {
  image: string;
  fname: string;
  lname: string;
  email: string;
}

const { width, height } = Dimensions.get("screen");
const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    image: 'nothing',
    fname: '',
    lname: '',
    email: '',
  });
  const [pets,setPets]=useState([])
  const getData=async()=>{
    const result=await axios.get(`${port}/api/users/1`)
    setUserInfo(result.data);
    setPets(result.data.pets)
}

useEffect(()=>{
    
    getData()
},[])

console.log(pets);
console.log(userInfo.image);
  return (
    <View style={styles.container}>
    <ScrollView>
        <View><Image style={{width:width*1,height:height*0.35}} source={{uri:userInfo?.image}}></Image></View>
      <View style={styles.UsersProfile}>
        <UserInfo UserInf={userInfo}  />
        <UserPets pets={pets}/>
      </View>
    </ScrollView>
    <Navbar/>
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
});
export default UserProfile;
