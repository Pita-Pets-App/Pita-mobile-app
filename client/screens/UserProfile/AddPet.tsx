import React,{useState,useEffect} from "react";
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
import { port } from "../../port";
import dog from '../../assets/dog.png'
import cat from '../../assets/cat.png'
import bird from '../../assets/bird.png'
import fish from '../../assets/fish.png'

interface AddForm {
  pet_name: string;
  pet_weight:number;
  pet_gender:string;
  pet_race:string;
  pet_images?:any[]|[];
  birth_date:string;
  userId:number
}

const { width, height } = Dimensions.get("screen");
const AddPet: React.FC = () => {
  const [formData, setFormData] = useState<AddForm>({
    pet_name: "",
    pet_weight: 0,
    pet_gender: "",
    pet_race: "",
    pet_images:[],
    birth_date: "",
    userId:1
  });

  
  const selectImage = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    const selected=pickerResult.assets[0]
    setFormData({ ...formData, pet_images:[...formData.pet_images,selected.uri]  })
  };

  const takePhoto = async () => {
    const pickerResult = await ImagePicker.launchCameraAsync();

    if (pickerResult.canceled === true) {
      return;
    }
    const selected=pickerResult.assets[0]
    setFormData({ ...formData, pet_images:[...formData.pet_images,selected.uri]  })
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
  console.log("image",formData.pet_images[0]);
  

  return (
   <View>
   <View style={styles.header}>
   {formData.pet_images[0] && <Image source={{uri:formData.pet_images[0]}} style={styles.selectedImage} />}
        <TouchableOpacity onPress={showImagePickerOptions}>
          <Text>Select Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.allInput}>
        <TextInput
          style={styles.input}
          placeholder="Pet Name"
          value={formData.pet_gender}
          onChangeText={(text) => setFormData({ ...formData, pet_gender: text })}
        />
         <View style={{padding:7,width:width*0.85,display:'flex',flexDirection:'row',justifyContent:"space-between"}} >
          <TouchableOpacity style={styles.choose} >
            <Image style={{width:width*0.13,height:height*0.04}} source={dog}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choose} >
            <Image style={{width:width*0.13,height:height*0.04}} source={cat}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choose} >
            <Image style={{width:width*0.11,height:height*0.04}} source={bird}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choose} >
            <Image style={{width:width*0.13,height:height*0.04}} source={fish}></Image>
          </TouchableOpacity>
          
        </View>
        <View style={{padding:7,width:width*0.9,display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
        <TextInput
          style={styles.inputname}
          placeholder="Pet Race"
          value={formData.pet_name}
          onChangeText={(text) =>
            setFormData({ ...formData, pet_name: text })
          }
        />
        <TextInput
          style={styles.inputname}
          placeholder="Pet Gender"
          value={formData.pet_name}
          onChangeText={(text) =>
            setFormData({ ...formData, pet_name: text })
          }
        />
        </View>
        <View style={{padding:7,width:width*0.9,display:'flex',flexDirection:'row',justifyContent:"space-between"}}>
        <TextInput
          style={styles.inputname}
          placeholder="Pet Weight"
          keyboardType="numeric"
          value={formData.pet_name}
          onChangeText={(text) =>
            setFormData({ ...formData, pet_name: text })
          }
        />
        <TextInput
          style={styles.inputname}
          placeholder="Birth Date"
          value={formData.pet_name}
          onChangeText={(text) =>
            setFormData({ ...formData, pet_name: text })
          }
        />
         </View>

        <TouchableOpacity
          style={styles.registerButton}
          // onPress={handleSubmit}
          // disabled={loading}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Add Pet
          </Text>
        </TouchableOpacity>
      </View>
   </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: height * 0.3,
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
  selectedImage: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 10,
    marginVertical: 10,

  },
  choose:{
    width:width*0.15,
    height:width*0.15,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#d4d4d4",
    padding:5,
    borderRadius:10
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
    backgroundColor: "#d4d4d4",
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: 10,
    textAlign: "center",
    fontWeight:"bold"
    // borderColor: "grey",
    // borderWidth: 2,
    
  },
  inputname: {
    backgroundColor: "#d4d4d4",
    width: width * 0.4,
    height: height * 0.07,
    borderRadius: 10,
    textAlign: "center",
    fontWeight:"bold"
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
});
export default AddPet;