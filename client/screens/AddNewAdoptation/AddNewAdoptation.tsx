import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { port } from "../../port";

const { width, height } = Dimensions.get("screen");

const AddNewAdoptation: React.FC = (): React.ReactElement => {
  const [formData, setFormData] = useState({
    "pet_name": "",
    "pet_weight": "",
    "pet_gender": "",
    "pet_race": "",
    "pet_images": [],
    "birth_date": "",
    "pet_description": "",
    "status": 'Not Adopted',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
      }
    })();
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveAdoptation = async () => {
    try {
      // Your save logic here
      const create = await axios.post(`${port}/api/LFA`, formData);
      // handle success
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined && event.type !== "dismissed") {
      setFormData({ ...formData, birth_date: format(selectedDate, 'yyyy-MM-dd') });
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setFormData({ ...formData, pet_images: [result.uri] });
        setSelectedImage(result.uri);
        setShowImagePicker(false); // Close the modal after selecting an image
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "white", margin: 2 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => setShowImagePicker(true)}
        >
          <Text style={styles.imageButtonText}>Select Photo</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
        )}
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
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateText}>{formData.birth_date || "Select Birth Date"}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.birth_date ? new Date(formData.birth_date) : new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Pet Description"
          value={formData.pet_description}
          onChangeText={(text) => handleInputChange("pet_description", text)}
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveAdoptation}
        >
          <Text style={styles.saveButtonText}>Add</Text>
        </TouchableOpacity>

        {showImagePicker && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={showImagePicker}
            onRequestClose={() => setShowImagePicker(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={pickImage}>
                  <Text style={styles.modalOption}>Select an Image</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowImagePicker(false)}>
                  <Text style={styles.modalOption}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
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
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    justifyContent: "center",
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
  imageButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  imageButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    fontSize: 18,
    color: "#007BFF",
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AddNewAdoptation;
