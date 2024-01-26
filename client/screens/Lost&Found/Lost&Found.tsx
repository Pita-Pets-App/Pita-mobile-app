import React ,{useEffect,useState}from "react";
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
import {port } from '../../port'
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import chien from "../../assets/chien.jpg";
import like from "../../assets/coeur.png"
import likeact from "../../assets/likeact.png"
import commenter from "../../assets/commenter.png"
import messager from "../../assets/messager.png"
const { width, height } = Dimensions.get("screen");
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux";
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
    "post_langitude":"222",
    "post_lattitude":"5555"
  });
  const [lfdata,setLfdata]=useState([])
  const [active,setActive]=useState(0)
  const token = useSelector((state: RootState) => state.auth.authToken);
  const getLf=async()=>{
    const gett=await axios.get(`${port}/api/LF`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    setLfdata(gett.data);
     }
     const getL=async()=>{
      const gett=await axios.get(`${port}/api/LF`,{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      setLfdata(gett.data.filter((el:any)=>{
        return el.status==='Lost'
      }));
      
      }
       const getF=async()=>{
        const gett=await axios.get(`${port}/api/LF`,{
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        setLfdata(gett.data.filter((el:any)=>{
          return el.status==='Found'
        }));
        }
  useEffect(()=>{
   active==0?getLf():active==1?getL():getF()
  },[active])
  useEffect(() => {
    navigation.setOptions({
      title: `Lost and Found`,
      headerStyle: {
        backgroundColor: '#4e9d91',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            console.log("hhhh");
            
          }}
        >
          <Ionicons name="add" size={27} color="white" onPress={()=>{setModalVisible(true)}} />
        </TouchableOpacity>)
    });
  }, [navigation]);

  const handleAddEntry =async () => {
    try {
      console.log("rr");

      const create = await axios.post(`${port}/api/LFA`, formData)
      ;
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
      <TouchableOpacity onPress={()=>{setActive(0)}} style={active==0?styles.btact:styles.bt} >
          <View>
            <Text style={active==0?styles.textact:styles.text}>All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setActive(1)}} style={active==1?styles.btact:styles.bt} >
          <View>
            <Text style={active==1?styles.textact:styles.text}>Lost</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setActive(2)}} style={active==2?styles.btact:styles.bt}>
          <View>
            <Text style={active==2?styles.textact:styles.text}>Found</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={active==2?styles.btact:styles.bt}>
          <View>
            <Text style={active==2?styles.textact:styles.text}>Add</Text>
          </View>
        </TouchableOpacity> */}
      </View>
       <View style={styles.line} />
          <ScrollView style={styles.apdpostes}>
            {lfdata.map((el,i)=>(
        <View key={i} style={{padding:5,marginBottom:30}}>
        <View style={styles.onepost}>
          <Image style={styles.image} source={{uri:el?.user?.image}}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>{el?.user?.fname+" "+el?.user?.lname}</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
          <View >
              <Text style={el.status==='Found'?styles.found:styles.lost} >{el.status}</Text>
            </View>
        </View>
        <View style={{marginHorizontal:20,marginBottom:10}}>
          <Text>{el.pet_description}</Text>
        </View>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Image style={{width:width*0.9,height:height*0.27,borderRadius:25}} source={{uri:el?.pet_images[0]}}></Image>
        </View>
        <View style={{display:"flex",flexDirection:"row",marginHorizontal:20,marginVertical:10,justifyContent:"space-between"}}>
        <TouchableOpacity style={{display:"flex",flexDirection:'row',alignItems:"center",gap:4}}>
          <Image style={{width:width*0.075,height:width*0.075}} source={like}></Image>
          <Text>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("comment")}}  style={{display:"flex",flexDirection:'row',alignItems:"center",gap:4}}>
            <Image style={{width:width*0.065,height:width*0.065}} source={commenter}></Image>
            <Text>Comments</Text></TouchableOpacity>
          <TouchableOpacity style={{display:"flex",flexDirection:'row',alignItems:"center",gap:4}}>
            <Image style={{width:width*0.08,height:width*0.08}} source={messager}></Image>
            <Text>message</Text>
            </TouchableOpacity>

          </View>
        </View>
        ))}
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
    backgroundColor: "#e3edfb", 
    borderRadius: 20,
    padding: 15, 
    alignItems: "center",
    justifyContent: "center", 
    marginTop: 10, 
  },
  AddLA: {
    backgroundColor: "#e3edfb",
    borderRadius: 20,
    padding: 15, 
    alignItems: "center",
  },
  alllf: {
    height: height*1.1,
    backgroundColor:"white"
  },
  search: {
    backgroundColor: "#fff",
    height: height * 0.1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text:{
    color: "#4e9d91",
   fontSize: 17 
  },
  textact:{
    color: "#fff",
    fontSize: 17 
  },
  bt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical:10,
    paddingHorizontal:18,
    borderRadius: 25,
    borderWidth:1.5,
    borderColor:"#4e9d91"
  },
  btact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e9d91",
    paddingVertical:10,
    paddingHorizontal:18,
    borderRadius: 25,
    borderWidth:1.5,
    borderColor:"#4e9d91"
  },
  apdpostes: {
    backgroundColor: "#fff",
    display: "flex",
    padding: 5,
    marginBottom:200
  },
  onepost: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
    
  },
  image: {
    width: width * 0.15,
    height: width * 0.15,
    margin: 10,
    borderRadius: 50,
    borderWidth:3,
    borderColor:"#e3edfb"
  },
  found: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center", 
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical:5, 
    marginLeft:22,
    borderWidth:1.5,
    borderColor:'green',
    color:"green"
  },
  lost:{
    display: "flex",
    justifyContent:"center",
    alignItems: "center", 
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical:5, 
    marginLeft:30,
    borderWidth:1.5,
    borderColor:'red',
    color:"red"
  },
  statusText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold", 
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#4e9d91',
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
    fontSize: 16, 
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
  headerButton: {
    marginRight: 15,
  },
});
export default LostFound;
