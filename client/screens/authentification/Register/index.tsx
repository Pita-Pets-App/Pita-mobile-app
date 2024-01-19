

import { FontSize, FontFamily } from "../../../GlobalStyles";


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image,Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; 
import { register_me } from '../../../lib/apiCalls';
const { width, height } = Dimensions.get("screen");
import Pet from '../../../assets/peticon.png'
interface FormData {
  fname: string;
  lname: string;
  email: string;
  user_password: string;
  image: string | null; 
}

const Register: React.FC = () => {
  
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState<FormData>({
    fname: '',
    lname: '',
    email: '',
    user_password: '',
    image: null,
  })

  const [loading, setLoading] = useState(false);

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

    setFormData({ ...formData, image: (pickerResult as any).uri });
    setSelectedImage((pickerResult as any).uri);

  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!formData.email || !formData.user_password || !formData.fname || !formData.lname) {
      Alert.alert('Registration Error', 'All fields are required');
      setLoading(false);
      return;
    }
else{
  const data = await register_me(formData)
  Alert.alert('You have successfully created your account')
  // navigation.navigate('Home')
}
   

  };

  return (
    <View>

      <View  style={styles.header}>
      <View   style={styles.design}></View>
<TouchableOpacity  style={styles.userImage}  onPress={selectImage}>
     
     {formData.image ? <Image source={{ uri: formData.image }}  style={{borderRadius:width*0.2,  width:width*0.35,
  height:height*0.16,}} />:<Image source={ Pet}   style={{borderRadius:width*0.2,  width:width*0.35,
    height:height*0.16,}} />}
      </TouchableOpacity>
      <Text   style={styles.pita}>
PITA PITA     </Text>

      </View>
<View   style={styles.allInput}>
<TextInput style={styles.input}
        placeholder=" Enter Your Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <TextInput
      style={styles.input}
        placeholder="  Enter Your Password"
        secureTextEntry
        value={formData.user_password}
        onChangeText={(text) => setFormData({ ...formData, user_password: text })}
      />
      <TextInput
      style={styles.input}
        placeholder= " Enter your First Name"
        value={formData.fname}
        onChangeText={(text) => setFormData({ ...formData, fname: text })}
      />
      <TextInput
      style={styles.input}
        placeholder=" Enter your Family Name"
        value={formData.lname}
        onChangeText={(text) => setFormData({ ...formData, lname: text })}
      />


   
      <TouchableOpacity    style={styles.registerButton} onPress={handleSubmit} disabled={loading} >

        <Text  style={{color:"white",fontSize:18,fontWeight:"bold"}}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
 header:{

height:height*0.35,
padding:5,
flexDirection:"column",
justifyContent:"flex-start",
alignItems:"center",
gap:10
 },
 design:{
  backgroundColor: 'rgba(255, 195, 104,0.8)',
      width:width*0.9,
  height:height*0.2,
  borderBottomLeftRadius:width*0.4,
  borderBottomRightRadius:width*0.4

 },
 userImage:{
  position:"absolute",
  marginTop:width*0.2,
  borderRadius:width*0.5,
  width:width*0.35,
  height:height*0.16,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"red"
 },
 pita:{
  marginTop:width*0.15,
  fontSize:24,
  fontWeight:"bold",
marginLeft:25,
 },
 input:{
  backgroundColor:"rgb(238, 238, 238)",
  width:width*0.85,
  height:height*0.07,
  borderRadius:10,
  textAlign: 'center', 
  borderColor:"#ffc368",
  borderWidth:2
 },
 allInput:{
  padding:10,
  justifyContent:"center",
  alignItems:"center",

  
  gap:17
 },
 registerButton:{
  backgroundColor:"#ffc368",
  width:width*0.85,
  height:height*0.06,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:10
 }
  
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
