import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"
import Icon from "react-native-vector-icons/FontAwesome"; 
import user from '../../assets/user.jpg'
import Navbar from "../Home/Components/Navbar";
import axios from "axios";
import { port } from "../../port";
import { useSelector } from 'react-redux';
import adpimg from '../../assets/adpimg.png'
import favori from '../../assets/favori.png'
import loc from '../../assets/locccc.png'
import Vets from "../Allvets/Components/Top";
interface UserInfo {
  image:string;

}
interface UserInfoProps {
  image?: string;
  fname?: string;
  lname?: string;
  email?: string;
}

const { width, height } = Dimensions.get("screen");
const ProviderOneEvent: React.FC = () => {
    const [interestedUsers, setInterestedUsers] = useState<UserInfoProps[]>([
        { image: "dummy1.jpg", fname: "John", lname: "Doe", email: "john.doe@example.com" },
        { image: "dummy2.jpg", fname: "Jane", lname: "Doe", email: "jane.doe@example.com" },
        // Add more dummy data as needed
      ]);
    
      const handleInterestedClick = (user: UserInfoProps) => {
        setInterestedUsers((prevUsers) => [...prevUsers, user]);
      };
  return (
    <View style={styles.container}>
    <View style={styles.containerEv}>
      <View>
        <Image style={styles.image} source={adpimg} />
        <View style={styles.overlay}>
          <View style={styles.createdByContainer}>
            <FontAwesome
              name="user-circle"
              size={24}
              color="#fff"
              style={styles.profileIcon}
            />
            <Text style={styles.createdBy}></Text>
          </View>
        </View>
      </View>
    </View>  
    <View style={{backgroundColor:"white",marginHorizontal:15,paddingVertical:15,paddingHorizontal:10,borderRadius:15,marginBottom:10}}>
        <View  style={{display:"flex",flexDirection:"row"}}><Text style={{fontSize:17,fontWeight:"bold"}}>Title : </Text><Text style={{fontSize:16}}>event title</Text></View>
        <View  style={{display:"flex",flexDirection:"row",width:width*0.6}}><Text style={{fontSize:17,fontWeight:"bold"}}>Description : </Text ><Text style={{fontSize:16}}>event gfgfggggggggggggg gggggggggggggggggggggggdescription</Text></View>
        <View  style={{display:"flex",flexDirection:"row"}}><Image style={{width:width*0.06,height:width*0.06}} source={loc}></Image><Text style={{fontSize:16}}>event title</Text></View>
    </View>
    <View>
        <View style={{backgroundColor:"white",marginHorizontal:15,paddingVertical:15,paddingHorizontal:10,borderRadius:15,marginBottom:10}}>
            <View style={{display:"flex",flexDirection:"row"}}>
                <Image style={{width:width*0.06,height:width*0.06, marginRight:15}} source={favori}></Image>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Bassem Ammar</Text>
                <Text style={{fontSize:15}}> is interested</Text>
            </View>
        </View>
        <View style={{backgroundColor:"white",marginHorizontal:15,paddingVertical:15,paddingHorizontal:10,borderRadius:15}}>
            <View style={{display:"flex",flexDirection:"row"}}>
                <Image style={{width:width*0.06,height:width*0.06, marginRight:15}} source={favori}></Image>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Oussema Cherif</Text>
                <Text style={{fontSize:15}}> is interested</Text>
            </View>
        </View>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerEv: {
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 15,
        height:height*0.27,
        width:width*0.9,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderWidth: 2,
        borderColor: "black",
      },
      image: {
        height:height*0.27,
        width:width*0.9,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        justifyContent: "flex-end",
        padding: 15,
        borderRadius: 15,
      },
      createdByContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      createdBy: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
      },
      profileIcon: {
        marginRight: 10,
      },
      blogCard: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        flexDirection: "row",
      },
      authorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
      },
      blogInfo: {
        flex: 1,
      },
      titleContainer: {
        flexDirection: "row",
        marginBottom: 8,
      },
      authorName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4e9d91",
        marginRight: 8,
      },
      blogTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
      },
      blogContent: {
        fontSize: 16,
        color: "#555",
      },
});
export default ProviderOneEvent;
