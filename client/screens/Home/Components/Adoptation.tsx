import React from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions ,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('screen')

const  Adoptation: React.FC = ({navigation}): React.ReactElement=> {
    return (
        <View style={styles.allPages}>
              <View style={styles.service}>
                <Text onPress={()=>{
                navigation.navigate("Adoptation")
            }} style={{color:"white",fontSize:18,fontWeight:"bold"
}}>Adoptation</Text>
                <View style={styles.container}>
             
                </View>
            </View>
    </View>
    );
};
const styles = StyleSheet.create({
    allPages: {
        flexDirection:"column",
   width:width*0.95,
   height:height*0.25,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap:20
    },
    service:{
        width:width*0.85,
        justifyContent:"flex-start",
         alignItems:'flex-start',
         flexDirection:"column",
         gap:20,

         height:height*0.25,
    },
    container: {
        width:width*0.85,
        backgroundColor:"white",
        height:height*0.18,
        borderRadius:10
    }
});
export default Adoptation