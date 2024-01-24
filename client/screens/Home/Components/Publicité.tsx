import React from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions ,Image, TouchableOpacity} from 'react-native';
import chat from "../../../assets/chat.png"
import { useNavigation } from '@react-navigation/native';
import pub from '../../../assets/welcome.png'
import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get('screen')

const Publicite: React.FC = (): React.ReactElement => {
    const navigation=useNavigation()
    const userName = useSelector((state: RootState) => state.user?.userData.fname);
    return (
           <TouchableOpacity>
            <Image style={{width:width*0.95,height:height*0.4}} source={pub}></Image>
            <View style={styles.imageText}><Text style={{fontSize: 27,fontWeight: 'bold',color: '#26117a',}}>Hi </Text><Text style={{fontSize: 27,fontWeight: 'bold',color: '#fa5672',}}>{userName}</Text></View>
            </TouchableOpacity>
      
    );
};
const styles = StyleSheet.create({
    allPages: {
   backgroundColor:"#8596fa",
       flexDirection:'row',
        justifyContent: "space-around",
        alignItems: 'center',
        width:width*0.9,
        height:height*0.2,
        borderRadius:8,
        paddingLeft:15,
        gap:10,
        
        
    },
    description:{
 
   
        width:width*0.5,
        height:height*0.2,
        gap:15
    } ,
        imageText: {
            position: 'absolute',
            bottom: 240, 
            left: 100,
            display:"flex",
            flexDirection:"row"
            
        },
})
export default Publicite