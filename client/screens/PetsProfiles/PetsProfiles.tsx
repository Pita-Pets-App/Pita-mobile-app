import React from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
// import Petsprofile from "./components/Petsprofiles.tsx"
import PetsPhoto from "./components/PetsPhoto"
import Gendre from "./components/gendre"

const {width,height} = Dimensions.get('screen')






const PetsProfile: React.FC = (): React.ReactElement =>{
return (

<View>

<View style={{backgroundColor:"#fff"}}>
 <PetsPhoto/>
<Gendre/>

</View>

</View>


)

}

export default PetsProfile