
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { register_provider } from "../../../../lib/apiCalls";
const { width, height } = Dimensions.get("screen");
import Pet from "../../../../assets/peticon.png";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  provider_password: string;
  provider_cv : string | null;
}

const ProvCV: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCV, setSelectedCV] = useState(null);

  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    provider_password: "",
    provider_cv : "",
  });

  const [loading, setLoading] = useState(false);

  const selectImage = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    const selected = pickerResult.assets[0];
    setFormData({ ...formData, provider_cv: (selected as any).uri });
    setSelectedCV((selected as any).uri);
  };

  const takePhoto = async () => {
    const pickerResult = await ImagePicker.launchCameraAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    const selected = pickerResult.assets[0];
    setFormData({ ...formData, provider_cv: (selected as any).uri });
    setSelectedCV((selected as any).uri);
  };
  const showImagePickerOptions = () => {
    Alert.alert(
      "Choose Resume",
      "Would you like to choose an Resume from the gallery or make a photo?",
      [
        {
          text: "Choose from Gallery",
          onPress: selectImage,
        },
        {
          text: "Make a Photo",
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
    <View>
      <View style={styles.header}>

         {!formData.provider_cv &&(<View
          style={styles.imageSelectionButton}
        //   onPress={showImagePickerOptions}
        >
          <Text style={{ color: "grey", fontSize: 16 }}>
            Choose or Take a Photo for 
          </Text>
          <TouchableOpacity  onPress={showImagePickerOptions}>
          <Text style={{ color: "#4e9d91", fontSize: 16 }}>
           , diploma 
          </Text>
          </TouchableOpacity>
       
        </View>)}

        {formData.provider_cv &&(
            <View>
          <Image
            source={{ uri: formData.provider_cv }}
            style={{
              borderRadius:10,
              width: width * 0.85,
              height: height * 0.6,
              marginVertical: 10,
              marginBottom:80
            }}
          />
             <TouchableOpacity style={{position:"absolute",bottom:20,right:120,backgroundColor:"#4e9d91",paddingVertical:10,paddingHorizontal:20,borderRadius:20}}><Text style={{color:"white",fontSize:15}}>Upload</Text></TouchableOpacity>
          </View>
          
        ) }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: height * 0.35,
    padding: 10,
    marginTop:300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  design: {
    backgroundColor: "rgba(255, 195, 104,0.8)",
    width: width * 0.9,
    height: height * 0.2,
    borderBottomLeftRadius: width * 0.4,
    borderBottomRightRadius: width * 0.4,
  },
  userImage: {
    position: "absolute",
    marginTop: width * 0.2,
    borderRadius: width * 0.5,
    width: width * 0.35,
    height: height * 0.16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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
  imageSelectionButton: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.85,
    height: height * 0.6,
    justifyContent: "center",
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#4e9d91",
    borderWidth: 2,
    marginVertical: 10,
  },
});

export default ProvCV;

