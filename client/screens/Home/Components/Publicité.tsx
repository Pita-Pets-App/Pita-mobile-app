import React from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions ,Image, TouchableOpacity} from 'react-native';
import chat from "../../../assets/chat.png"
import { useNavigation } from '@react-navigation/native';
import pub from '../../../assets/addd.png'
import notif from '../../../assets/bell.png'
import { useSelector } from 'react-redux';
const { width, height } = Dimensions.get('screen')

const Publicite: React.FC = (): React.ReactElement => {
    const navigation=useNavigation()
    const user = useSelector((state: RootState) => state.user?.userData);
    return (
           <View style={{marginTop:20,padding:20}}>
             <View style={styles.imageText} >
                <Image style={{width:width*0.12,height:width*0.12,borderRadius:50,borderWidth:1.5,borderColor:"#4e9d91"}} source={{uri:user?.image}}></Image>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:17}}>{user?.fname}</Text>
                    <Text style={{color:'grey'}}>{user?.email}</Text>
                    </View>
                    <TouchableOpacity>
                    <Image style={{width:width*0.07,height:width*0.07,position:'absolute',left:40,top:10}} source={notif}></Image>
                </TouchableOpacity>
                </View>    
            <Image style={{width:width*0.95,height:height*0.2,borderRadius:20}} source={pub}></Image>
            </View>
      
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
            display:"flex",
            flexDirection:"row",
            marginBottom:10,
            padding:10,
            gap:15
        },
})
export default Publicite