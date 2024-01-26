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
import user from '../../assets/user.jpg'
import Navbar from "../Home/Components/Navbar";
import ProviderInfo from "./component/ProviderInfo";
import axios from "axios";
import { port } from "../../port";
import { useSelector } from 'react-redux';
import adpimg from '../../assets/adpimg.png'
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
const ProviderProfile: React.FC = () => {
//   const userData = useSelector((state: RootState) => state.user?.userData);
//   const authData = useSelector((state: RootState) => state.auth);
//   console.log("user from user profile",userData);
//   console.log("auth from userprofule",authData);
  
  return (
    <View style={styles.container}>
    <ScrollView>
        <View><Image style={{width:width*1,height:height*0.35}} source={user}></Image></View>
      <View style={styles.UsersProfile}>
        <ProviderInfo/>
        <View>
            <Text style={{marginLeft:25,fontWeight:'bold',fontSize:20}}>My Events</Text>
            <ScrollView horizontal>
            <View style={styles.containerEv}>
      <TouchableOpacity>
      {/* {{uri:e.event_images[0]}} */}
<Image style={styles.image} source={adpimg} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <FontAwesome
                name="user-circle"
                size={24}
                color="#fff"
                style={styles.profileIcon}
              />
              {/* {e.owner.fname} */}
              <Text style={styles.createdBy}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerEv}>
      <TouchableOpacity>
      {/* {{uri:e.event_images[0]}} */}
<Image style={styles.image} source={adpimg} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <FontAwesome
                name="user-circle"
                size={24}
                color="#fff"
                style={styles.profileIcon}
              />
              {/* {e.owner.fname} */}
              <Text style={styles.createdBy}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerEv}>
      <TouchableOpacity>
      {/* {{uri:e.event_images[0]}} */}
<Image style={styles.image} source={adpimg} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <FontAwesome
                name="user-circle"
                size={24}
                color="#fff"
                style={styles.profileIcon}
              />
              {/* {e.owner.fname} */}
              <Text style={styles.createdBy}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
       
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
    containerEv: {
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 15,
        height:height*0.2,
        width:width*0.65,
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
  UsersProfile: {
    display: "flex",
  },
  image: {
    height:height*0.2,
    width:width*0.65,
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
});
export default ProviderProfile;
