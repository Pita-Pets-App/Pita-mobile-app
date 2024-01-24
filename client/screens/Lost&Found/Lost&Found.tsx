import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import chien from "../../assets/chien.jpg";
import axios from "axios";
import { port } from "../../port";
import { Ionicons } from "@expo/vector-icons"
const { width, height } = Dimensions.get("screen");

const LostFound: React.FC <{navigation:any}> = ({navigation}) => {
  const [lfdata,setLfdata]=useState([])
  const getLf=async()=>{
    const gett=await axios.get(`${port}/api/LF`)
    setLfdata(gett.data);
     }
  useEffect(()=>{
    getLf()
  },[])
  useEffect(() => {
    navigation.setOptions({
      title: `Lost and Found`,
      headerStyle: {
        backgroundColor: '#ffc368',
      },
      headerTintColor: '#fff',
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
          <Ionicons name="add" size={27} color="#fff" />
        </TouchableOpacity>)
    });
  }, [navigation]);
  return (
    <View style={styles.alllf}>
      {/* <View style={styles.search}>
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
      // </View> */}
       {/* <View style={styles.line} /> */}
    
        {/* <TouchableOpacity onPress={()=>{navigation.navigate('LostFounDetails')}}>
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
        </TouchableOpacity> */}
          <ScrollView style={styles.apdpostes}>
            {lfdata.map((el,i)=>(
        <TouchableOpacity key={i} style={{padding:5,marginBottom:30}}>
        <View style={styles.onepost}>
          <Image style={styles.image} source={{uri:el.user.image}}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>{el.user.fname+" "+el.user.lname}</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
          <View >
              <Text >{el.status}</Text>
            </View>
        </View>
        <View style={{marginHorizontal:20,marginBottom:10}}>
          <Text>{el.pet_description}</Text>
        </View>
        <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Image style={{width:width*0.9,height:height*0.27,borderRadius:25}} source={{uri:el.pet_images[0]}}></Image>
        </View>
        </TouchableOpacity>
        ))}
        {/* <TouchableOpacity>
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
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
    backgroundColor: "green",
    marginBottom: 20,
    borderRadius: 10,
    width:width*0.17,
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
  headerButton: {
    marginRight: 15,
  },
});
export default LostFound;
