import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { port } from "../../port";

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
    birth_date: "",
    userId:1
  });


  return (
   <View><Text>Add Pet</Text>
   <View style={styles.header}>
      </View>
      <View style={styles.allInput}>
      <View style={{display:'flex',flexDirection:'row',gap:20}} >
        </View>
        <TextInput
          style={styles.input}
          placeholder="Pet Name"
          value={formData.pet_gender}
          onChangeText={(text) => setFormData({ ...formData, pet_gender: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="  Enter Your Password"
          secureTextEntry
          value={formData.pet_name}
          onChangeText={(text) =>
            setFormData({ ...formData, pet_name: text })
          }
        />

        <TouchableOpacity
          style={styles.registerButton}
          // onPress={handleSubmit}
          // disabled={loading}
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
    backgroundColor: "grey",
    width: width * 0.85,
    height: height * 0.07,
    borderRadius: 10,
    textAlign: "center",
    borderColor: "grey",
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
});
export default AddPet;