import React, { useState } from "react";
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
import Alerts from "react-native-alerts"
const { width, height } = Dimensions.get("screen");

const EditProfile: React.FC = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<string | null>(null);
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

  return (
    <ScrollView>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
        <TouchableOpacity onPress={showImagePickerOptions}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={setFname}
          value={fname}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={setLname}
          value={lname}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "grey",
    width: width * 0.8,
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
  },
  selectedImage: {
    width: width * 0.9,
    height: height * 0.3,
    borderRadius: 10,
    marginVertical: 10,

  },
});

export default EditProfile;
