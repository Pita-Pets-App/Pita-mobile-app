import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity,Image } from 'react-native';
import Navbar from "../../Home/Components/Navbar"
import dol from "../../../assets/dolaricon.png"
const { width, height } = Dimensions.get('screen')

const Veter: React.FC = (): JSX.Element => {
    return (
        <View style={styles.allPages}>
            <View style={styles.service}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}></Text>
                <Image
          style={[styles.vectorIcon4, styles.iconFrameLayout]}
        //   contentFit="cover"
          source={require("../../../assets/vector41.png")}
        />
                <View style={styles.container}>
                    <Text style={styles.name}>
                        DR.BELHASENA
                    </Text  >
                    <Text style={[styles.vectorIcon8]} >
                        100$
                    </Text>
                    
                    <Image
          style={[styles.vectorIcon1, styles.iconFrameLayout]}
        //   contentFit="cover"
          source={dol}
        />
         <Image
          style={[styles.vectorIcon5, styles.vectorIcon5Position]}
        //   contentFit="cover"
          source={require("../../../assets//vector32.png")}
        />
        <Text style={[styles.loc]} >
            2.5KM
        </Text >
        <Text style={[styles.exp]}>
            10 Years of experience
        </Text>
        <View
          style={[
            styles.mondayFridayAt800Am5Parent,
            styles.vectorIcon5Position,
          ]}
        >
          <Text style={[styles.mondayFriday, styles.mondayFridayFlexBox]}>
            Monday - Friday at 8.00 am - 5.00pm
          </Text>
          <Image
            style={[styles.time1Icon, styles.time1IconPosition]}
            // contentFit="cover"
            source={require("../../../assets/time-1.png")}
          />
        </View>
        
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    iconFrameLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
    },
    name: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        color: 'black', // Add the desired text color
        marginTop: 10, // Adjust the top margin to position the text at the top
    },
     allPages: {
        flexDirection: "column",
        width: width * 0.95,
        height: height * 0.25,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20
    }
    ,
    service: {
        width: width * 0.85,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        flexDirection: "column",
        gap: 20,
        height: height * 0.25,
    },
    container: {
        width: width * 0.85,
        backgroundColor: "white",
        height: height * 0.18,
        borderRadius: 10,
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'center', // Center horizontally
        top: "10%",
    },
    mondayFridayFlexBox: {
      textAlign: "left",
      position: "absolute",
    },
    framePosition: {
      left: "7.78%",
      right: "4.17%",
      width: "88.06%",
      height: "17.38%",
      position: "absolute",
      overflow: "hidden",
    },
    vectorIcon5Position: {
      left: "7.57%",
      position: "absolute",
    },
    time1IconPosition: {
      left: "0%",
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    vectorIconLayout: {
      bottom: "77%",
      top: "16.38%",
      width: "14.72%",
      height: "6.63%",
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    vectorIcon: {
      height: "12%",
      width: "121.67%",
      top: "-2.25%",
      right: "-18.89%",
      bottom: "90.25%",
      left: "-2.78%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
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
    veterinarian1: {
      width: "48.61%",
      top: "2.63%",
      left: "28.33%",
    //   fontSize: FontSize.size_11xl,
      fontWeight: "500",
    //   fontFamily: FontFamily.fredokaMedium,
    //   color: Color.colorWhite,
    },
    groupIcon: {
      height: "94.24%",
      width: "97.16%",
      right: "1.26%",
      bottom: "5.76%",
      left: "1.58%",
      opacity: 0.15,
      top: "0%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    vectorIcon1: {
      height: "8.63%",
      width: "4.26%",
      top: "56.83%",
      right: "21.92%",
      bottom: "34.53%",
      left: "73.82%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    vectorIcon2: {
      height: "7.19%",
      width: "3.53%",
      top: "57.55%",
      right: "46.31%",
      bottom: "35.25%",
      left: "50.16%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    vectorIcon3: {
      height: "10.36%",
      width: "43.91%",
      top: "9.28%",
      right: "22.37%",
      bottom: "80.36%",
      left: "33.72%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    vectorIcon4: {
      height: "6.84%",
      width: "57.67%",
      top: "21.58%",
      right: "8.58%",
      bottom: "70.58%",
      left: "33.75%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
      imageAlign: "center"
    },
    vectorIcon5: {
        height: "10%",
        width: "5%",
        top: "59%",
        right: "12.02%",
        bottom: "35.47%",
        left: "78.44%",
        position: "absolute",
        maxWidth: "100%",
        overflow: "hidden",
    },
    loc: {
        right: "30%",
        top: "38%",
    lineHeight: 13,
    }, exp: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black', // Add the desired text color
        top: "-12%", // Adjust the top margin to position the text at the top
    },
    vectorIcon6: {
      height: "8.35%",
      width: "32.81%",
      top: "38.85%",
      right: "11.99%",
      bottom: "52.81%",
      left: "55.21%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    vectorIcon7: {
      height: "5.61%",
      width: "10.88%",
      top: "58.99%",
      right: "33.6%",
      bottom: "35.4%",
      left: "55.52%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    vectorIcon8: {
      height: "23.26%",
      width: "7.54%",
      top: "54.27%",
      right: "12.02%",
      bottom: "35.47%",
      left: "78.44%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    mondayFriday: {
      left: "9.24%",
    //   fontSize: FontSize.size_3xs,
      lineHeight: 13,
    //   fontFamily: FontFamily.fredokaRegular,
    //   color: Color.colorDarkgray_100,
      top: "0%",
    },
    time1Icon: {
      height: "92.31%",
      width: "6.52%",
      right: "93.48%",
      bottom: "7.69%",
      top: "0%",
    },
    mondayFridayAt800Am5Parent: {
      height: "9.35%",
      width: "58.04%",
      top: "70.5%",
      right: "34.38%",
      bottom: "20.14%",
    },
    frame: {
      top: "29.38%",
      bottom: "53.25%",
    },
    frame1: {
      top: "69.5%",
      right: "2.78%",
      bottom: "13.13%",
      left: "9.17%",
      width: "88.06%",
      height: "17.38%",
      position: "absolute",
      overflow: "hidden",
    },
    vectorIcon17: {
      right: "68.61%",
      left: "16.67%",
    },
    vectorIcon18: {
      right: "41.94%",
      left: "43.33%",
    },
    vectorIcon19: {
      right: "13.89%",
      left: "71.39%",
    },
    frameIcon: {
      top: "50%",
      bottom: "32.63%",
      maxHeight: "100%",
      maxWidth: "100%",
    },
    vectorIcon20: {
      height: "2.31%",
      width: "66.97%",
      top: "12%",
      right: "14.69%",
      bottom: "85.69%",
      left: "18.33%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    veterinarianChild: {
      height: "0.13%",
      width: "100%",
      top: "25.25%",
      right: "0%",
      bottom: "74.63%",
    },
    vectorIcon21: {
      height: "2.76%",
      width: "4.81%",
      top: "95.49%",
      right: "47.25%",
      bottom: "1.75%",
      left: "47.94%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    frameIcon1: {
      height: "16.88%",
      width: "116.67%",
      top: "85.88%",
      right: "-8.61%",
      bottom: "-2.75%",
      left: "-8.06%",
      position: "absolute",
      maxWidth: "100%",
      overflow: "hidden",
    },
    veterinarian: {
    //   backgroundColor: Color.colorWhite,
      width: 360,
      height: 800,
      overflow: "hidden",
    },
  });
  

export default Veter;
