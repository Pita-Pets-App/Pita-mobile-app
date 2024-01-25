
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

const RegisterProvider: React.FC = () => {
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
  const handleSubmit = async () => {
    setLoading(true);

    if (
      !formData.email ||
      !formData.provider_password ||
      !formData.fname ||
      !formData.lname
    ) {
      Alert.alert("Registration Error", "All fields are required");
      setLoading(false);
      return;
    } else {
      const data = await register_provider(formData);
      Alert.alert("Registration Request Sent", "Your request is pending admin approval");
      navigation.navigate("LoginProvider" as never)
    }
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
        <View style={styles.design}></View>
        <Text style={styles.pita}>PITA PITA </Text>
      </View>
      <View style={styles.allInput}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
          <TextInput
            style={styles.inputname}
            placeholder=" Your First Name"
            value={formData.fname}
            onChangeText={(text) => setFormData({ ...formData, fname: text })}
          />
          <TextInput
            style={styles.inputname}
            placeholder=" Your Family Name"
            value={formData.lname}
            onChangeText={(text) => setFormData({ ...formData, lname: text })}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder=" Enter Your Email"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="  Enter Your Password"
          secureTextEntry
          value={formData.provider_password}
          onChangeText={(text) =>
            setFormData({ ...formData, provider_password: text })
          }
        />

        <TouchableOpacity
          style={styles.imageSelectionButton}
          onPress={showImagePickerOptions}
        >
          <Text style={{ color: "#ffc368", fontSize: 16 }}>
            Choose or Take a Photo for CV
          </Text>
        </TouchableOpacity>

        {formData.provider_cv ? (
          <Image
            source={{ uri: formData.provider_cv }}
            style={{
              borderRadius: width * 0.2,
              width: width * 0.35,
              height: height * 0.16,
              marginVertical: 10,
            }}
          />
        ) : null}

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: height * 0.35,
    padding: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
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
  pita: {
    marginTop: width * 0.15,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 25,
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
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#ffc368",
    borderWidth: 2,
    marginVertical: 10,
  },
});

export default RegisterProvider;

