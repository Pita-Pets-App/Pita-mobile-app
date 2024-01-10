import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import location from "../../../assets/location.png";
import Home from "../../../assets/home.png";
import message from "../../../assets/message.png";
import user from "../../../assets/user.png";
import vetr from "../Components/vetrinaire"
const { width, height } = Dimensions.get('screen');

const Navbar: React.FC = (): React.ReactElement => {
    return (
        <View style={styles.navbar}>
            <Image source={Home} style={styles.iconImage} />
            <Image source={location} style={styles.iconImage} />
            <Image source={message} style={styles.iconImage} />
            <Image source={user} style={styles.iconImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#ffc368",
        flexDirection: 'row',
        width: width,
        height: height * 0.10,
        borderRadius: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'white', 
        borderWidth: 2, 
    },
    iconImage: {
        width: 40,
        height: 40,
        marginHorizontal: 18, 
    },
});

export default Navbar;
