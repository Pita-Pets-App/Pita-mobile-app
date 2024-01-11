import React from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions} from 'react-native';
// import  LostAndFound from "./Components/LostAndFound"
// import Carosel from "./Components/Carosel"

import Veter from  "./Components/Veteri";
import Onevet from "./Components/Onevet"
import Navbar from "../Home/Components/Navbar"
import Top from "./Components/Top"
// import Adoptation from './Components/Adoptation';
const { width, height } = Dimensions.get('screen')
const Vets: React.FC = () => {
    return (
        <ScrollView>
            <View>
                {/* <Top/> */}
            </View>
            <View style={styles.allPages}>
               {/* <Onevet/> */}
               
               {/* <Carosel/>
               <Adoptation/>
               <LostAndFound/> */}
            </View>
            <View>
            <Veter/> 
         
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    allPages: {
   backgroundColor:"#ffc368",
        justifyContent: 'center',
        alignItems: 'center',
     
        // paddingVertical:width*0.15, 
        paddingTop:20,
        gap:20
       
    },})
export default Vets;

