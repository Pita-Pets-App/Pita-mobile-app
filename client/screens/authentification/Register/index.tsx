

import { FontSize, FontFamily } from "../../../GlobalStyles";


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import { register_me } from '../../../lib/apiCalls';
const { width, height } = Dimensions.get("screen");
import Pet from '../../../assets/peticon.png'
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

      <View  style={styles.header}>
      <View   style={styles.design}></View>
      <Image   style={styles.userImage} source={Pet}></Image>
      <Text   style={styles.pita}>
Pita Pita      </Text>

      </View>
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




const styles = StyleSheet.create({
 header:{
backgroundColor:"yellow",
height:height*0.35,
padding:5,
flexDirection:"column",
justifyContent:"flex-start",
alignItems:"center",
gap:10
 },
 design:{
  backgroundColor:"rgb(244, 197, 127)",
  width:width*0.9,
  height:height*0.2,
  borderBottomLeftRadius:width*0.4,
  borderBottomRightRadius:width*0.4

 },
 userImage:{
  position:"absolute",
  marginTop:width*0.2,
  borderRadius:width*0.5
 },
 pita:{}
  
});

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



// export default Register;
