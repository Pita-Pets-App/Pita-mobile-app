import React from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import previous from "../../../assets/prev.png";

const { width, height } = Dimensions.get('screen');

const Vets: React.FC = (): JSX.Element => {
  return (
    <View style={styles.allPages}>
      <View style={styles.description}>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>VETERINARIAN</Text>
      </View>
      <View style={styles.previousIcon}>
        <Image source={previous} style={{ width: width * 0.06, height: height * 0.06 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allPages: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    width: width * 0.95,
    height: height * 0.06,
    borderRadius: 8,
    paddingLeft: 15,
    gap: 10,
  },
  iconcaretRight: {
    height: "3.79%",
    width: "8.42%",
    top: "3%",
    right: "87.14%",
    bottom: "93.21%",
    left: "4.44%",
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  previousIcon: {
    width: width * 1,   // Adjusted width
    // height: height * ,
  },
  description: {
    flex: 1,  // This makes the description view take up all available space
    alignItems: 'center',
    justifyContent: 'center',  // Center the content vertically
    gap: 15,
  },
});

export default Vets;
