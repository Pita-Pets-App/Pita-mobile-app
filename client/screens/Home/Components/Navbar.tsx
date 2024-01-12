import React from 'react';
import { View, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import location from "../../../assets/loc.png";
import Home from "../../../assets/homenav.png";
import message from "../../../assets/msg1.png";
import user from "../../../assets/usernav.png";
import vetr from "../Components/vetrinaire"


const { width, height } = Dimensions.get('screen');

const Navbar: React.FC = (): React.ReactElement => {
    const navigation = useNavigation();
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Home" as never)}}><Image source={Home} style={styles.iconImage} /></TouchableOpacity>
            <TouchableOpacity><Image source={location} style={styles.iconImage} /></TouchableOpacity>
            <TouchableOpacity><Image source={message} style={styles.iconImage} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("UserProfile" as never)}}><Image source={user} style={styles.iconImage} /></TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#ffc368",
        flexDirection: 'row',
        width: width,

        height: height * 0.1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderColor: 'white', 
        borderWidth: 0.5, 
        padding:10,
        position: 'absolute', // Use absolute positioning
        bottom: 0,
        
    },
    iconImage: {
        width: width*0.08,
        height: height*0.04,
        marginHorizontal: 18, 
    },
});

export default Navbar;
