import React from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions} from 'react-native';
import  LostAndFound from "./Components/LostAndFound"
import Carosel from "./Components/Carosel"
import Publicite from "./Components/Publicité"
import Adoptation from './Components/Adoptation';
// import Navbar from "./Components/Navbar"
import Navbar from "./Components/Navbar"
const { width, height } = Dimensions.get('screen')

const Home: React.FC = (): React.ReactElement => {

    return (
        <ScrollView>
            <View style={styles.allPages}>
               <Publicite/>
               <Carosel/>
               <Adoptation   />
               <LostAndFound/>
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
export default Home;

