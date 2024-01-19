import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions,Image,TouchableOpacity} from 'react-native';
import addPet from '../../../assets/add-pet.png'
import dog1 from '../../../assets/ownerdog2.png'
import dog2 from '../../../assets/ownerdog1.png'
import peticon from '../../../assets/peticon.png'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { port } from '../../../port';


const { width, height } = Dimensions.get('screen')
const UserPets: React.FC = () => {

    const navigation=useNavigation()
    
    
    return (
        <View style={styles.petContainer}>
            <View style={styles.myPets}>
            <Image style={{width:width*0.08,height:height*0.035}} source={peticon}></Image>
            <Text style={{fontWeight:'bold',fontSize: 18}}>My Pets</Text>
            </View>
        <View style={{display:"flex",flexDirection:'row', gap:20,  marginVertical:15,justifyContent:"space-around",paddingHorizontal:15}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('PetsProfile' as never)}}><Image style={styles.PetsImage} source={dog1}></Image></TouchableOpacity>
        <TouchableOpacity><Image style={styles.PetsImage} source={dog2}></Image></TouchableOpacity>
        <TouchableOpacity><Image style={styles.PetsImage} source={addPet}></Image></TouchableOpacity>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    PetsImage: {
        width:width*0.2,
        height:height*0.09,
        borderRadius:12
       
       
    },
    myPets : {
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row",
        gap:10,
       
    },
    petContainer :{
        backgroundColor:"white",
        marginVertical:7,
        marginHorizontal:20,
        borderRadius:20,
        padding:10,
    }

})
export default UserPets;

