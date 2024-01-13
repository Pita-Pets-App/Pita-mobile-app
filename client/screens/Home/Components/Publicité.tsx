import React from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions ,Image} from 'react-native';
import chat from "../../../assets/chat.png"
const { width, height } = Dimensions.get('screen')
const Publicite: React.FC = (): React.ReactElement => {
    return (
      
            <View style={styles.allPages}>
                <View style={styles.description}>
                <Text style={{color:"white",fontSize:18,fontWeight:"bold"
}}>    Connect with fellow pet enthusiasts.</Text>
                <Text  style={{color:"white",fontSize:18,fontWeight:"bold"
}}>   Discover adorable pets, share stories, and more!</Text>
                </View>
                <Image source={chat}></Image>
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
    } 
})
export default Publicite