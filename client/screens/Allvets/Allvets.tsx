import React from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions} from 'react-native';
// import  LostAndFound from "./Components/LostAndFound"
// import Carosel from "./Components/Carosel"

import Top from "./Components/Top"
// import Adoptation from './Components/Adoptation';
const { width, height } = Dimensions.get('screen')
const Allvets: React.FC = () => {
    return (
        <ScrollView>
            <View style={styles.allPages}>
                <Top/>
               
              
            </View>
            {/* <View>
            <Veter/> 
            
            
            </View> */}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    allPages: {
        backgroundColor:"#ffc368",
        justifyContent: 'center',
        alignItems: 'center',
     
        paddingVertical:width*0.3, 
        paddingTop:20,
        gap:20
       
    },})
export default Allvets;
