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
    "pet_weight": 0,
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
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
      }
    })();
  }, []);

  const handleSaveAdoptation = async () => {
    try {
      const create = await axios.post(`${port}/api/LFA`, formData);
      console.log("rr", create.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined && event.type !== "dismissed") {
      setFormData({ ...formData, birth_date: format(selectedDate, 'yyyy-MM-dd') });
    }
  };

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

    setFormData({ ...formData,pet_images:[ (pickerResult as any).uri ]});
    setSelectedImage((pickerResult as any).uri);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ScrollView style={{ backgroundColor: "white", margin: 2 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={toggleModal}
        >
          <Text style={styles.saveButtonText}>Add New Animal For Adaptation</Text>
        </TouchableOpacity>

        {showModal && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {/* Your modal content goes here */}
                <Text>Modal Content</Text>
                <TouchableOpacity onPress={toggleModal}>
                  <Text>Close Modal</Text>
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
    marginTop:20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
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
    fontSize:18
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
    padding:20
  },
  modalOption: {
    fontSize: 18,
    color: "#007BFF",
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AddNewAdoptation;
