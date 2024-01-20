import React from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PetsPhoto from "./components/PetsPhoto"
import Gendre from "./components/gendre"

const {width,height} = Dimensions.get('screen')






const PetsProfile: React.FC = ({route}:any): React.ReactElement =>{
    const navigation = useNavigation(); 
    const {petData}=route.params
    const {pet_name,pet_images,pet_gender,pet_weight,birth_date}=petData
    
return (

<View>

<View style={{backgroundColor:"#fff"}}>
 <PetsPhoto name={pet_name} image={pet_images}/>
<Gendre gender={pet_gender} weight={pet_weight} birth_date={birth_date.slice(8,10)+"-"+birth_date.slice(5,7)+"-"+birth_date.slice(0,4)}  />

</View>

</View>


)

}

export default PetsProfile