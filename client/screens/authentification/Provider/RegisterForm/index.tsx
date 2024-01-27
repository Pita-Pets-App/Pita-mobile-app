
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
      Alert.alert("Registration Request Sent", "Please Complete the Steps");
      navigation.navigate(...["ProvCV",{email:formData.email}] as never)
    }
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
    backgroundColor: "#4e9d91",
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
    borderColor: "#4e9d91",
    borderWidth: 2,
  },
  inputname: {
    backgroundColor: "rgb(238, 238, 238)",
    width: width * 0.4,
    height: height * 0.07,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "#4e9d91",
    borderWidth: 2,
  },
  allInput: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",

    gap: 17,
  },
  registerButton: {
    backgroundColor: "#4e9d91",
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
    borderColor: "#4e9d91",
    borderWidth: 2,
    marginVertical: 10,
  },
});

export default RegisterProvider;

