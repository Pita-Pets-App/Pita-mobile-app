import React from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions,Image} from 'react-native';

const { width, height } = Dimensions.get('screen')
import chien from "../../../assets/chien.jpg"

const CartAdoptation: React.FC = (): React.ReactElement => {

    return (
    
            <View style={styles.allPages}>
<Image   source={chien}   style={styles.animalPicture}></Image>  
<Text style={{fontSize:12,fontWeight:"bold"}}>MO213-Pominirania White</Text> 
   <View  style={styles.description}>
<View style={{flexDirection:"row",justifyContent:"flex-start"}}>
<Text style={{fontSize:12,color:"grey"}}>Genre:</Text>

<Text style={{fontSize:12,color:"grey",fontWeight:"bold"}}>male</Text>

</View>
    <Text style={{fontSize:12,color:"grey"}}>.</Text>
    <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
<Text style={{fontSize:12,color:"grey"}}>Age:</Text>

<Text style={{fontSize:12,color:"grey",fontWeight:"bold"}}>2 monthes</Text>

</View>
    </View>            
            </View>
        
    );
};
const styles = StyleSheet.create({
    allPages: {
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
   backgroundColor:"white",
   width:width*0.45,
   height:height*0.3,
   gap:7,
   borderRadius:15
    
    },
    animalPicture:{
        width:width*0.43,
        height:height*0.23,
        borderRadius:15

    },
    description:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }})
export default CartAdoptation;

