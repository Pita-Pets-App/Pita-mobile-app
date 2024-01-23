import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { port } from "../../port";
import axios from "axios";
const { width, height } = Dimensions.get("screen");

const AddNewAdoptation: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    "pet_name": "",
    "pet_weight": "",
    "pet_gender": "",
    "pet_race": "",
    "pet_images":[],
    "birth_date":"",
    "pet_description":"",
    "status":   'Not Adopted'
  });



  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveAdoptation =async (form) => {
  try {
    const create=await axios.post(`${port}/api/LFA`,form)
  } catch (error) {
    console.log(error)
  }
  };

  return (
    <ScrollView style={{ backgroundColor: "white", margin: 2 }}>
      <View style={styles.container}>
        <Text style={styles.title}>New Animal Adoption</Text>
        <TextInput
          style={styles.input}
          placeholder="Pet Name"
          value={formData.pet_name}
          onChangeText={(text) => handleInputChange("pet_name", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pet Weight"
          value={formData.pet_weight}
          onChangeText={(text) => handleInputChange("pet_weight", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pet Gender"
          value={formData.pet_gender}
          onChangeText={(text) => handleInputChange("pet_gender", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pet Race"
          value={formData.pet_race}
          onChangeText={(text) => handleInputChange("pet_race", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="birth_date"
          value={formData.birth_date}
          onChangeText={(text) => handleInputChange("birth_date", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="pet_description"
          value={formData.pet_description}
          onChangeText={(text) => handleInputChange("pet_description", text)}
        />
   
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAdoptation}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  saveButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddNewAdoptation;
