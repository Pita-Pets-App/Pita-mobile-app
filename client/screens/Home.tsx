// import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Home = () => {
  return (
    <View>
      <Text>HHHH</Text>
    </View>
  )
}
//   return (
//     <View style={styles.home}>
//       {/* <Image
//         style={[styles.vectorIcon, styles.groupIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/vector211.png")}
//       /> */}
//       <Image
//         style={[styles.vectorIcon1, styles.adoptationPosition]}
//         resizeMode="cover"
//         source={require("../assets/vector16@3x.png")}
//       />
//       {/* <Image
//         style={[styles.vectorIcon2, styles.groupIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/vector121.png")}
//       />
//       <Image
//         style={[styles.vectorIcon3, styles.groupIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/vector131.png")}
//       />
//       <Image
//         style={[styles.groupIcon, styles.groupIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/group81.png")}
//       />
//       <Image
//         style={[styles.vectorIcon4, styles.vectorIconLayout2]}
//         resizeMode="cover"
//         source={require("../assets/vector221.png")}
//       />
//       <Image
//         style={[styles.groupIcon1, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/group91.png")}
//       />
//       <Image
//         style={[styles.vectorIcon5, styles.vectorIconLayout2]}
//         resizeMode="cover"
//         source={require("../assets/vector231.png")}
//       />
//       <Image
//         style={[styles.groupIcon2, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/group101.png")}
//       />
//       <Image
//         style={[styles.vectorIcon6, styles.vectorIconLayout2]}
//         resizeMode="cover"
//         source={require("../assets/vector231.png")}
//       />
//       <Image
//         style={[styles.groupIcon3, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/group101.png")}
//       />
//       <Image
//         style={[styles.vectorIcon7, styles.vectorIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/vector241.png")}
//       />
//       <Image
//         style={[styles.vectorIcon8, styles.vectorIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/vector251.png")}
//       />
//       <Image
//         style={styles.vectorIcon9}
//         resizeMode="cover"
//         source={require("../assets/vector261.png")}
//       />
//       <Image
//         style={[styles.vectorIcon10, styles.groupIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/vector191.png")}
//       />
//       <Image
//         style={[styles.vectorIcon11, styles.vectorIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/vector271.png")}
//       />
//       <Text style={[styles.adoptation, styles.adoptationPosition]}>
//         Adoptation
//       </Text>
//       <Image
//         style={[styles.vectorIcon12, styles.vectorIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/vector281.png")}
//       />
//       <Image
//         style={[styles.groupIcon4, styles.groupIconLayout1]}
//         resizeMode="cover"
//         source={require("../assets/group21.png")}
//       /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   groupIconLayout1: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   adoptationPosition: {
//     left: "5.28%",
//     position: "absolute",
//   },
//   vectorIconLayout2: {
//     bottom: "49.05%",
//     top: "42.75%",
//     width: "18.22%",
//     height: "8.2%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   groupIconLayout: {
//     bottom: "48.3%",
//     top: "43.5%",
//     width: "18.22%",
//     height: "8.2%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   vectorIconLayout1: {
//     bottom: "49.75%",
//     width: "12.5%",
//     height: "5.63%",
//     top: "44.63%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   vectorIconLayout: {
//     width: "85%",
//     height: "15.63%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   vectorIcon: {
//     height: "100%",
//     top: "0%",
//     bottom: "0%",
//     left: "0%",
//     right: "0%",
//     maxWidth: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   vectorIcon1: {
//     height: "1.75%",
//     width: "20.44%",
//     top: "38.76%",
//     right: "74.28%",
//     bottom: "59.49%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     overflow: "hidden",
//   },
//   vectorIcon2: {
//     height: "4.5%",
//     width: "17.22%",
//     top: "37.44%",
//     right: "3.75%",
//     bottom: "58.06%",
//     left: "79.03%",
//     position: "absolute",
//     maxWidth: "100%",
//   },
//   vectorIcon3: {
//     height: "1.31%",
//     width: "12.42%",
//     top: "38.95%",
//     right: "6.25%",
//     bottom: "59.74%",
//     left: "81.33%",
//     position: "absolute",
//     maxWidth: "100%",
//   },
//   groupIcon: {
//     height: "18.55%",
//     width: "84.86%",
//     top: "12%",
//     right: "7.36%",
//     bottom: "69.45%",
//     left: "7.78%",
//     position: "absolute",
//     maxWidth: "100%",
//   },
//   vectorIcon4: {
//     right: "75.83%",
//     left: "5.94%",
//   },
//   groupIcon1: {
//     right: "77.33%",
//     left: "4.44%",
//   },
//   vectorIcon5: {
//     right: "48.89%",
//     left: "32.89%",
//   },
//   groupIcon2: {
//     right: "50.39%",
//     left: "31.39%",
//   },
//   vectorIcon6: {
//     right: "22.22%",
//     left: "59.56%",
//   },
//   groupIcon3: {
//     right: "23.72%",
//     left: "58.06%",
//   },
//   vectorIcon7: {
//     right: "81.39%",
//     left: "6.11%",
//   },
//   vectorIcon8: {
//     right: "53.06%",
//     left: "34.44%",
//   },
//   vectorIcon9: {
//     height: "5.75%",
//     width: "12.78%",
//     right: "27.5%",
//     bottom: "49.63%",
//     left: "59.72%",
//     top: "44.63%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   vectorIcon10: {
//     height: "1.7%",
//     width: "31.25%",
//     top: "75.5%",
//     right: "62.64%",
//     bottom: "22.8%",
//     left: "6.11%",
//     position: "absolute",
//     maxWidth: "100%",
//   },
//   vectorIcon11: {
//     top: "57.88%",
//     right: "7.5%",
//     bottom: "26.5%",
//     left: "7.5%",
//   },
//   adoptation: {
//     top: "53.5%",
//     fontSize: FontSize.size_lgi,
//     fontWeight: "500",
//     fontFamily: FontFamily.poppinsMedium,
//     color: Color.colorWhite,
//     textAlign: "left",
//   },
//   vectorIcon12: {
//     top: "79.13%",
//     right: "8.89%",
//     bottom: "5.25%",
//     left: "6.11%",
//   },
//   groupIcon4: {
//     height: "9.38%",
//     top: "90.38%",
//     bottom: "0.25%",
//     left: "0%",
//     right: "0%",
//     maxWidth: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   home: {
//     flex: 1,
//     height: 800,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

export default Home;
