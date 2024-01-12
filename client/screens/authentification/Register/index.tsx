

import { FontSize, FontFamily } from "../../../GlobalStyles";


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import { register_me } from '../../../lib/apiCalls';

interface FormData {
  user_fname: string;
  user_lname: string;
  user_Email: string;
  user_password: string;
  user_image: string | null; 
}

const Register: React.FC = () => {
  
  const navigation = useNavigation();

  const [formData, setFormData] = useState<FormData>({
    user_fname: '',
    user_lname: '',
    user_Email: '',
    user_password: '',
    user_image: null,
  });

  const [loading, setLoading] = useState(false);

  // Function to handle image selection
  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    setFormData({ ...formData, user_image: (pickerResult as any).uri });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!formData.user_Email || !formData.user_password || !formData.user_fname || !formData.user_lname) {
      Alert.alert('Registration Error', 'All fields are required');
      setLoading(false);
      return;
    }

    const data = await register_me(formData);

    if (data.success) {
      setLoading(false);
      Alert.alert('Success', data.message);
       // setTimeout(() => {
        //     navigation.navigate('login'); to change
        //   }, 2000);
        
    } else {
      setLoading(false);
      Alert.alert('Error', data.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={formData.user_Email}
        onChangeText={(text) => setFormData({ ...formData, user_Email: text })}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formData.user_password}
        onChangeText={(text) => setFormData({ ...formData, user_password: text })}
      />
      <TextInput
        placeholder="First Name"
        value={formData.user_fname}
        onChangeText={(text) => setFormData({ ...formData, user_fname: text })}
      />
      <TextInput
        placeholder="Family Name"
        value={formData.user_lname}
        onChangeText={(text) => setFormData({ ...formData, user_lname: text })}
      />

      {formData.user_image && <Image source={{ uri: formData.user_image }} style={{ width: 100, height: 100 }} />}

      <Button title="Select Image" onPress={selectImage} />

      <Button title={loading ? 'Registering...' : 'Register'} onPress={handleSubmit} disabled={loading} />
    </View>
  );
};

export default Register;






// const Register = () => {



//   return (
//     <View style={styles.clipPathGroup}>
//       <View style={styles.group}>
//         {/* <Image
//           style={[styles.vectorIcon, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector.png")}
//         /> */}
//         {/* <Image
//           style={[styles.vectorIcon1, styles.vectorIconLayout4]}
//           resizeMode="cover"
//           source={require("../assets/vector9.png")}
//         />
//         <Image
//           style={[styles.vectorIcon2, styles.vectorIconLayout3]}
//           resizeMode="cover"
//           source={require("../assets/vector10.png")}
//         /> */}
//         <Text style={styles.register}>Register</Text>
//         {/* <Image
//           style={[styles.vectorIcon3, styles.vectorIconLayout4]}
//           resizeMode="cover"
//           source={require("../assets/vector11.png")}
//         />
//         <Image
//           style={[styles.vectorIcon4, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector12.png")}
//         /> */}
//         {/* <Image
//           style={[styles.vectorIcon5, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector13.png")}
//         />
//         <Image
//           style={[styles.vectorIcon6, styles.vectorIconLayout3]}
//           resizeMode="cover"
//           source={require("../assets/vector14.png")}
//         />
//         <Image
//           style={[styles.vectorIcon7, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector15.png")}
//         />
//         <Image
//           style={[styles.vectorIcon8, styles.vectorIconLayout2]}
//           resizeMode="cover"
//           source={require("../assets/vector16.png")}
//         />
//         <Image
//           style={[styles.vectorIcon9, styles.vectorIconLayout2]}
//           resizeMode="cover"
//           source={require("../assets/vector17.png")}
//         />
//         <Image
//           style={[styles.vectorIcon10, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector18.png")}
//         />
//         <Image
//           style={[styles.vectorIcon11, styles.vectorIconLayout1]}
//           resizeMode="cover"
//           source={require("../assets/vector19.png")}
//         />
//         <Image
//           style={[styles.vectorIcon12, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector20.png")}
//         />
//         <Image
//           style={[styles.vectorIcon13, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../assets/vector3.png")}
//         />
//         <Image
//           style={[styles.vectorIcon14, styles.vectorIconLayout1]}
//           resizeMode="cover"
//           source={require("../assets/vector21.png")}
//         />
//         <Image
//           style={[styles.vectorIcon15, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector22.png")}
//         />
//         <Image
//           style={[styles.vectorIcon16, styles.vectorIconLayout]}
//           resizeMode="cover"
//           source={require("../assets/vector23.png")}
//         />
//         <Image
//           style={[styles.vectorIcon17, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector4.png")}
//         />
//         <Image
//           style={[styles.vectorIcon18, styles.vectorIconLayout5]}
//           resizeMode="cover"
//           source={require("../assets/vector24.png")}
//         /> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   vectorIconLayout5: {
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   vectorIconLayout4: {
//     width: "43.44%",
//     height: "5.15%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   vectorIconLayout3: {
//     height: "2.1%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   vectorIconLayout2: {
//     width: "14.74%",
//     height: "0.02%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   vectorIconLayout1: {
//     height: "5.38%",
//     width: "43.44%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   vectorIconLayout: {
//     width: "2.66%",
//     height: "2.21%",
//     maxHeight: "100%",
//     overflow: "hidden",
//     maxWidth: "100%",
//     position: "absolute",
//   },
//   vectorIcon: {
//     height: "89.75%",
//     width: "50.02%",
//     top: "10.25%",
//     right: "1.57%",
//     bottom: "0%",
//     left: "48.41%",
//   },
//   vectorIcon1: {
//     top: "65.14%",
//     right: "4.83%",
//     bottom: "29.7%",
//     left: "51.73%",
//   },
//   vectorIcon2: {
//     width: "6.18%",
//     top: "66.93%",
//     right: "23.45%",
//     bottom: "30.97%",
//     left: "70.37%",
//   },
//   register: {
//     top: 751,
//     left: 0,
//     fontSize: FontSize.size_lg,
//     fontWeight: "600",
//     fontFamily: FontFamily.poppinsSemiBold,
//     color: "transparent",
//     textAlign: "center",
//     width: 102,
//     position: "absolute",
//   },
//   vectorIcon3: {
//     top: "83.14%",
//     right: "4.77%",
//     bottom: "11.71%",
//     left: "51.79%",
//   },
//   vectorIcon4: {
//     height: "1.87%",
//     width: "18.67%",
//     top: "84.89%",
//     right: "17.12%",
//     bottom: "13.24%",
//     left: "64.21%",
//   },
//   vectorIcon5: {
//     height: "3.1%",
//     width: "3.73%",
//     top: "84.19%",
//     right: "42.09%",
//     bottom: "12.71%",
//     left: "54.18%",
//   },
//   vectorIcon6: {
//     width: "26.14%",
//     top: "42.33%",
//     right: "21.99%",
//     bottom: "55.57%",
//     left: "51.87%",
//   },
//   vectorIcon7: {
//     height: "1.36%",
//     width: "13.9%",
//     top: "60.73%",
//     right: "4.98%",
//     bottom: "37.91%",
//     left: "81.12%",
//   },
//   vectorIcon8: {
//     top: "77.67%",
//     right: "33.48%",
//     bottom: "22.31%",
//     left: "51.77%",
//   },
//   vectorIcon9: {
//     top: "77.62%",
//     right: "4.8%",
//     bottom: "22.36%",
//     left: "80.46%",
//   },
//   vectorIcon10: {
//     height: "1.38%",
//     width: "2.78%",
//     top: "77.07%",
//     right: "25.12%",
//     bottom: "21.55%",
//     left: "72.1%",
//   },
//   vectorIcon11: {
//     top: "46.04%",
//     right: "4.87%",
//     bottom: "48.59%",
//     left: "51.69%",
//   },
//   vectorIcon12: {
//     height: "1.62%",
//     width: "6.45%",
//     top: "47.91%",
//     right: "32.06%",
//     bottom: "50.47%",
//     left: "61.48%",
//   },
//   vectorIcon13: {
//     top: "47.65%",
//     right: "44.46%",
//     bottom: "50.13%",
//     left: "52.89%",
//   },
//   vectorIcon14: {
//     top: "53.65%",
//     right: "4.85%",
//     bottom: "40.97%",
//     left: "51.7%",
//   },
//   vectorIcon15: {
//     height: "1.59%",
//     width: "11.75%",
//     top: "55.46%",
//     right: "26.74%",
//     bottom: "42.95%",
//     left: "61.51%",
//   },
//   vectorIcon16: {
//     top: "55.26%",
//     right: "45.1%",
//     bottom: "42.52%",
//     left: "52.25%",
//   },
//   vectorIcon17: {
//     height: "29.45%",
//     width: "51.58%",
//     top: "0%",
//     right: "-0.01%",
//     bottom: "70.55%",
//     left: "48.44%",
//   },
//   vectorIcon18: {
//     height: "17.59%",
//     width: "18.5%",
//     top: "22.44%",
//     right: "17.1%",
//     bottom: "59.97%",
//     left: "64.4%",
//   },
//   group: {
//     height: "111.41%",
//     width: "199.86%",
//     top: "-11.42%",
//     right: "-3.11%",
//     bottom: "0.01%",
//     left: "-96.75%",
//     position: "absolute",
//   },
//   clipPathGroup: {
//     width: 360,
//     height: 800,
//   },
// });

// export default Register;
