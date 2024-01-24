import React from 'react';
import { View, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import location from "../../../assets/maps-and-flags.png";
import Home from "../../../assets/homepage.png";
import message from "../../../assets/messenger.png";
import user from "../../../assets/usernav.png";
import { useSelector } from 'react-redux';
import {AntDesign} from 'react-native-vector-icons'
const { width, height } = Dimensions.get('screen');
///#DFBDE7
const Navbar: React.FC = (): React.ReactElement => {
    const navigation = useNavigation();
    const userImage = useSelector((state: RootState) => state.user?.userData?.image);
  console.log(userImage);
  
    return (

        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home" as never)}}><Image source={Home} style={styles.iconHome} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Map" as never)}}><Image source={location} style={styles.iconloc} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("ChatContainer" as never)}}><Image source={message} style={styles.iconImage} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("UserProfile" as never)}}><Image source={{uri:userImage}} style={styles.iconProfile} /></TouchableOpacity>

        </View>
      

    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        width: width*0.9,
        marginHorizontal:17,
        height: height * 0.077,
        // borderTopLeftRadius: 40,
        borderRadius: 40,
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderColor: '#DFBDE7', 
        borderWidth: 0.5, 
        padding:10,
        position: 'absolute', 
        bottom: 4,

        
        
    },
    iconloc:{
        width: width*0.08,
        height: height*0.04,
        marginHorizontal: 18, 

    },
    iconHome:{
        width: width*0.085,
        height: height*0.045,
        marginHorizontal: 18, 

    },
    iconImage: {
        width: width*0.081,
        height: height*0.036,
        marginHorizontal: 18, 
    },
    iconProfile:{
        width: width*0.08,
        height: height*0.04,
        marginHorizontal: 18, 
        borderRadius:50
    }
});

export default Navbar;
