import React from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
// import Petsprofile from "./components/Petsprofiles.tsx"
import PetsPhoto from "./components/PetsPhoto.tsx"
import Gendre from "./components/gendre.tsx"

const {width,height} = Dimensions.get('screen')






const PetsProfile: React.FC = (): React.ReactElement =>{
return (

<View>

<View>
 <PetsPhoto/>
<Gendre/>

</View>

</View>


)

}

export default PetsProfile