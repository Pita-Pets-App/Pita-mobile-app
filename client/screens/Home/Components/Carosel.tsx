


import React from 'react';
import { ScrollView, View, Text,StyleSheet,Dimensions, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('screen')
import Veto from "../../../assets/veterinaire.png"

import emergecy from "../../../assets/emergecy.png"
import siiter from "../../../assets/sitter.png"

import event from "../../../assets/event.png"
import trainer from "../../../assets/trainer.png"
import shop from "../../../assets/shop.png"

const Carosel: React.FC = (): JSX.Element => {
    return (
        <View style={styles.allPages}>
            <View style={styles.service}>
                <Text style={{color:"white",fontSize:18,fontWeight:"bold"
}}>Services</Text>
                <TouchableOpacity style={{borderRadius:20,borderColor:"white",borderWidth:1.5,width:55,height:40,alignItems:"center",justifyContent:'center'}}>
                    <Text style={{color:"white",fontSize:14
}}> See All </Text >
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.allService}  horizontal>
            <View style={styles.horizontalScrollContainer}>
<View style={styles.oneService}>

   <Image style={{width:50,height:50}} source={Veto}></Image>
</View>
<View style={styles.oneService}>
   <Image style={{width:50,height:50}} source={emergecy}></Image>
</View>
<View style={styles.oneService}>
   <Image style={{width:50,height:50}} source={event}></Image>
</View>
<View style={styles.oneService}>
   <Image style={{width:50,height:50}} source={siiter}></Image>
</View>
<View style={styles.oneService}>
   <Image style={{width:50,height:50}} source={shop}></Image>
</View>
<View style={styles.oneService}>
   <Image  style={{width:50,height:50}} source={trainer}></Image>
</View>
</View>
            </ScrollView>
            
        </View>
    );
};
const styles = StyleSheet.create({
    allPages: {
        // backgroundColor:"#8596fa",
   
         width:width*0.95,
         height:height*0.25,
         borderRadius:8,
         padding:15,
         gap:10,
     
    },
    service:{
       
        width:width*0.85,
        flexDirection:"row",
        justifyContent:"space-between",
         alignItems:'center',
         height:height*0.07,
    },
    allService:{
        // backgroundColor:"yellow",
        height:height*0.09,
        padding:6,
        gap:10
    },
    oneService:{
        backgroundColor:"white",
        width:width*0.25,
        height:height*0.113,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 6,
        shadowRadius: 5,
        // Elevation for Android
        elevation:10

    },
    horizontalScrollContainer: {
        flexDirection: 'row',
        gap:10
    },
});
export default Carosel;