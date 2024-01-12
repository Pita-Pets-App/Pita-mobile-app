import React,{useEffect, useState} from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import Veto from "../../../assets/veterinaire.png"
import emergecy from "../../../assets/emergecy.png"
import event from '../../../assets/evenement.png'
import sitter from '../../../assets/sitting-dog.png'
import trainer from '../../../assets/trainer-pet.png'
import shop from  '../../../assets/pet-shop.png'
const { width, height } = Dimensions.get('screen')
const AllServices: React.FC = () => {
    const [serviceData,setServiceData]=useState<[]>([])

    useEffect(()=>{
        const getData=async()=>{
try {
    
    
        const result=await axios.get("http://localhost:3000/api/service")
        console.log(result);
    }

 catch (error) {
    console.log(error);
 }
}
getData()

        },[])
    return (
        <View style={styles.UsersServices} >
                <View>
                    <TouchableOpacity style={styles.Service} >
                    <Image style={styles.images} source={Veto}></Image>
                    </TouchableOpacity>
                    <Text style={styles.item}>Veterinaitien</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.Service}>
                    <Image style={styles.images} source={emergecy}></Image>
                </TouchableOpacity>
                <Text  style={styles.item}>Emergency</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.Service}>
                    <Image style={styles.images} source={sitter}></Image>
                </TouchableOpacity>
                <Text  style={styles.item}>Pet's Sitter</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.Service}>
                    <Image style={styles.images} source={shop}></Image>
                </TouchableOpacity>
                <Text  style={styles.item}>Pet's Shop</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.Service}>
                    <Image style={styles.images} source={trainer}></Image>
                </TouchableOpacity>
                <Text  style={styles.item}>Pet's Trainer</Text>
                </View>
                <View>
                <TouchableOpacity style={styles.Service}>
                    <Image style={styles.images} source={event}></Image>
                </TouchableOpacity>
                <Text  style={styles.item}>Events</Text>
                </View>
            </View>
    );
};
const styles = StyleSheet.create({
UsersServices :{
    paddingTop:20,
    display: 'flex',
    marginHorizontal:20,
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    
},
 item :{
    display:"flex",
    textAlign:"center",
    color:"grey"

    
 },
Service : {
    backgroundColor:"white",
    width:width*0.29,
    height:height*0.13,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15,
    margin:10,
    display:'flex',
},
images :{
    width:width*0.20,
    height:height*0.09
}

})
export default AllServices;

