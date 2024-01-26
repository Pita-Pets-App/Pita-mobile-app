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
  Pressable,
  
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import { port } from "../../port";
import { useSelector } from "react-redux";
import * as Location from "expo-location";

const { width, height } = Dimensions.get("screen");

const AddNewAdoptation: React.FC<any> = ({ navigation }): React.ReactElement => {
  const eventLocation = useSelector(
    (state: any) => state.location.selecteEventLocation
  ) || { longitude: '', latitude: '' };
  const userId = useSelector((state: RootState) => state.user?.userData.id);
  console.log(userId,"test")
  const [formData, setFormData] = useState({
    "pet_name": "",
    "pet_weight": "",
    "pet_gender": "",
    "pet_race": "",
    "pet_images": [],
    "birth_date": "",
    "pet_description": "",
    "status": 'Not Adopted',
    "post_langitude": eventLocation.longitude,
    "post_lattitude": eventLocation.latitude,
    "userId":userId,
    
  });
  const [loc, setLoc] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const token = useSelector((state: RootState) => state.auth.authToken);
  console.log("token", token);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const convertAdress = async (latitude, longitude) => {
    try {
      const parsedLatitude = parseFloat(JSON.parse(latitude));
      const parsedLongitude = parseFloat(JSON.parse(longitude));

      if (isNaN(parsedLatitude) || isNaN(parsedLongitude)) {
        throw new Error('Invalid latitude or longitude values.');
      }

      const nearestAddressResponse = await Location.reverseGeocodeAsync({
        latitude: parsedLatitude,
        longitude: parsedLongitude,
      });

      const nearestAddress = nearestAddressResponse[0];
      const place = `${nearestAddress.city} ${nearestAddress.region} ${nearestAddress.country}`;
      return place;
    } catch (error) {
      console.error('Error converting address:', error);
      return null;
    }
  };

  useEffect(() => {
    getUserLocationAndNearestAddress();

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
      const create = await axios.post(`${port}/api/LFA`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      navigation.navigate("Adoptation",{id:1})
    } catch (error) {
      console.log(error);
      // handle error
    }
  };

  const getUserLocationAndNearestAddress = async () => {
    try {
      const nearestAddressResponse = await Location.reverseGeocodeAsync({
        latitude: JSON.parse(eventLocation.latitude),
        longitude: JSON.parse(eventLocation.longitude),
      });

      if (nearestAddressResponse.length > 0) {
        const nearestAddress = nearestAddressResponse[0];
        const place = `${nearestAddress.city}${nearestAddress.region} ${nearestAddress.country}`;
        setLoc(place);
      }
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

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setFormData({ ...formData, pet_images: [result.uri] });
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log(error);
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
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{formData.birth_date || "Select Birth Date"}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.birth_date ? new Date(formData.birth_date) : new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <View style={styles.imageInputContainer}>
          <TouchableOpacity  onPress={pickImage}
            style={styles.imageButton}
          >
            <Text>Select Photo</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
          )}
        </View>
       
        <TextInput
          style={styles.input}
          placeholder="Pet Description"
          value={formData.pet_description}
          onChangeText={(text) => handleInputChange("pet_description", text)}
        />
        {eventLocation.longitude === "" && eventLocation.latitude === "" ? (
          <Pressable
            onPress={() => 
              {    
                setShowModal(false)
                navigation.navigate("MapForAdopt")
              }
            }
          >
            <Text style={styles.locationButton}>choose your Location</Text>
          </Pressable>
        ) : (
          <Text style={styles.locationText}>{loc}</Text>
        )}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveAdoptation}
        >
          <Text style={styles.saveButtonText}>Add</Text>
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
    borderColor: "#4e9d91",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "#4e9d91",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  imageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  locationButton: {
    backgroundColor: "#4e9d91",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
  },
  locationText: {
    color: "#4e9d91",
  },
});

export default AddNewAdoptation;
