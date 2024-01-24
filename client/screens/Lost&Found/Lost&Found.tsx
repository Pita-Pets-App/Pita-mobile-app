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
  Button

} from "react-native";
import chien from "../../assets/chien.jpg";
import { port } from "../../port";
import axios from "axios";
const { width, height } = Dimensions.get("screen");
const LostFound: React.FC <{navigation:any}> = ({navigation}) => {

  const [petName, setPetName] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petRace, setPetRace] = useState("");
  const [petImages, setPetImages] = useState([]);
  const [birthDate, setBirthDate] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    "pet_name": petName,
    "pet_weight":petWeight ,
    "pet_gender":petGender ,
    "pet_race": petRace,
    "pet_images": petImages,
    "birth_date": birthDate,
    "pet_description": petDescription,
    "status": 'Not Adopted',
  })

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
        <TouchableOpacity style={styles.bt}>
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
            <TextInput
              style={styles.input}
              placeholder="Pet Name"
              value={petName}
              onChangeText={(text) => setPetName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Pet Weight"
              value={petWeight}
              onChangeText={(text) => setPetWeight(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Pet Gender"
              value={petGender}
              onChangeText={(text) => setPetGender(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Pet Race"
              value={petRace}
              onChangeText={(text) => setPetRace(text)}
            />
            {/* Add other input fields as needed */}
            
            {/* Buttons to add or cancel the entry */}
            <Button title="Add Entry" onPress={handleAddEntry} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
export default LostFound;
