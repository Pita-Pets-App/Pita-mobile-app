import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { port } from "../../port";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

const EditProfile: React.FC = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const navigation=useNavigation()



  const selectImage = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    const selected=pickerResult.assets[0]
    setImage(selected.uri);
  };

  const takePhoto = async () => {
    const pickerResult = await ImagePicker.launchCameraAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    const selected=pickerResult.assets[0]
    setImage(selected.uri);
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      "Choose Image Source",
      "Would you like to choose an image from the gallery or take a photo?",
      [
        {
          text: "Choose from Gallery",
          onPress: selectImage,
        },
        {
          text: "Take a Photo",
          onPress: takePhoto,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };
  const UserData=async()=>{
   const user= await axios.get(`${port}/api/users/1`)
   setFname(user.data.fname)
   setLname(user.data.lname)
   setImage(user.data.image);
   
  }
  useEffect(()=>{
    UserData()
  },[])
  const updateProfile=async()=>{
    const pass=await axios.put(`${port}/api/users/1`,{
        fname,
        lname,
        image
    })
    navigation.navigate("UserProfile" as never)

  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
        <TouchableOpacity onPress={showImagePickerOptions}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        <View style={styles.allInput}>
      <View style={{display:'flex',flexDirection:'row',gap:20}} >
        <TextInput
          style={styles.inputname}
          placeholder=" Your First Name"
          value={fname}
          onChangeText={(text) => setFname(text)}
        />
        <TextInput
          style={styles.inputname}
          placeholder=" Your Family Name"
          value={lname}
          onChangeText={(text) => setLname(text)}
        />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Previous Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={()=> updateProfile()
          }
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom:45
  },
  selectedImage: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 10,
    marginVertical: 10,

  },
  input: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "#ffc368",
    borderWidth: 2,
  },
  inputname: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.4,
    height: height * 0.07,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "#ffc368",
    borderWidth: 2,
  },
  allInput: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",

    gap: 17,
  },
  registerButton: {
    backgroundColor: "#ffc368",
    width: width * 0.85,
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default EditProfile;
