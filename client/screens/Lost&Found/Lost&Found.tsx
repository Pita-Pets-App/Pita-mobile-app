import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert

} from "react-native";
import { format } from "date-fns";

import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from 'expo-image-picker';

import chien from "../../assets/chien.jpg";
import { port } from "../../port";
import axios from "axios";
const { width, height } = Dimensions.get("screen");
const LostFound: React.FC <{navigation:any}> = ({navigation}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [petName, setPetName] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petRace, setPetRace] = useState("");
  const [petImages, setPetImages] = useState([]);
  const [birthDate, setBirthDate] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    "pet_name": "",
    "pet_weight": 0,
    "pet_gender": "",
    "pet_race": "",
    "pet_images": [],
    "birth_date": "",
    "pet_description": "",
    "status": 'Lost',
  });

  const handleAddEntry =async () => {
    try {
      console.log("rr");

      const create = await axios.post(`${port}/api/LFA`, formData);
      console.log("rr",create.data);

    } catch (error) {
      console.log(error);
}
    setModalVisible(false);
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
  return (
    <View style={styles.alllf}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.bt} >
          <View>
            <Text style={{ color: "#fff", fontSize: 17 }}>Lost</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bt}>
          <View>
            <Text style={{ color: "#fff", fontSize: 17 }}>Found</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity    onPress={() => setModalVisible(true)} style={styles.bt}>
          <View>
            <Text style={{ color: "#fff", fontSize: 17 }}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <ScrollView style={styles.apdpostes}>
        <TouchableOpacity onPress={()=>{navigation.navigate('LostFounDetails')}}>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.found}>
              <Text style={styles.statusText}>Found</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.lost}>
              <Text style={styles.statusText}>Lost</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.lost}>
              <Text style={styles.statusText}>Lost</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.found}>
              <Text style={styles.statusText}>Found</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.found}>
              <Text style={styles.statusText}>Found</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.lost}>
              <Text style={styles.statusText}>Lost</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Input fields for the new entry */}
            <TextInput placeholder="Name"
              style={styles.input}
              value={formData.pet_name}
              onChangeText={(text) =>   setFormData({
                ...formData,
                "pet_name": text,
              })}
            />
             <TextInput
  style={styles.input}
  placeholder="Pet Weight"
  value={formData.pet_weight.toString()}
  onChangeText={(text) => {
    const weight = parseFloat(text);
    if (!isNaN(weight)) {
      setFormData({
        ...formData,
        "pet_weight": weight,
      });
    }
  }}/>
            <TextInput
              style={styles.input}
              placeholder="Pet Gender"
              value={formData.pet_gender}
              onChangeText={(text) =>   setFormData({
                ...formData,
                "pet_gender": text,
              })}
            />
            <TextInput placeholder="race"
              style={styles.input}
              value={formData.pet_race}
          onChangeText={(text) =>   setFormData({
            ...formData,
            "pet_race": text,
          })}
            />
              <TextInput placeholder="Description"
              style={styles.input}
              value={formData.pet_description}
              onChangeText={(text) =>   setFormData({
                ...formData,
                "pet_description": text,
              })}
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
        <TouchableOpacity
          style={styles.imageButton}
          onPress={selectImage}
        >
          <Text style={styles.imageButtonText}>Select Photo</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
        )}
      <TouchableOpacity style={styles.AddLA}   onPress={handleAddEntry}>
        <Text>Add Lost Animal</Text>
      </TouchableOpacity>
           <TouchableOpacity style={ styles.cancelButton}   onPress={() => setModalVisible(false)}>
            <Text >Cancel</Text>
           </TouchableOpacity>
          
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  cancelButton: {
    backgroundColor: "orange", 
    borderRadius: 20,
    padding: 15, 
    alignItems: "center",
    justifyContent: "center", 
    marginTop: 10, 
  },
  AddLA: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 15, 
    alignItems: "center",
  },
  alllf: {
    height: height,
  },
  search: {
    backgroundColor: "#fff",
    height: height * 0.1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc368",
    height: height * 0.06,
    width: width * 0.25,
    borderRadius: 10,
  },
  apdpostes: {
    backgroundColor: "#fff",
    display: "flex",
    padding: 17,
  },
  onepost: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.17,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth:1,
    marginHorizontal:10
  },
  image: {
    width: width * 0.35,
    height: height * 0.15,
    margin: 10,
    borderRadius: 15,
  },
  found: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center", 
    backgroundColor: "green",
    marginBottom: 20,
    borderRadius: 10,
    width:width*0.17,
    padding: 5,
    marginLeft:80
  },
  lost: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center", 
    backgroundColor: "red",
    marginBottom: 20,
    borderRadius: 10,
    width:width*0.15,
    padding: 5,
    marginLeft:80
  },
  statusText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold", 
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#7f7f7f',
    backgroundColor:"#fff",
    paddingVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: width * 0.7,
    height: height * 0.7,
    alignSelf: 'center', 
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc", 
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15, 
    fontSize: 16, // Increase font size
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
});
export default LostFound;
