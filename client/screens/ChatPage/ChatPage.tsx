import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import avatar  from "../../assets/user.jpg"

const {width,height} = Dimensions.get('screen')



const ChatPage: React.FC = (): React.ReactElement => {
  
    return (
        <ScrollView  style={{flex:1,width:width,height:height,padding:5}}>
        <View style={styles.avatarContainer}>
            <Image    style={styles.avatar} source={avatar}/>
            <Image  style={styles.avatar} source={avatar}/>

        </View>
        <View  style={styles.chatContainer}>
            

       
        <View style={{justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"orange", padding:10,width:width*0.5,borderRadius:20,height:height*0.05}}>
            <Text>Hey how are you been</Text>

        </View> 
        <View style={{justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"orange", padding:10,width:width*0.5,borderRadius:20,height:height*0.05}}>
            <Text>wanna to catch drink</Text>

        </View>
<Text   style={{fontSize:12,color:"grey"}}>12:55 pm</Text>
        <View style={{marginLeft:width*0.4,justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"pink", padding:10,width:width*0.5,borderRadius:20,height:height*0.05}}>
            <Text>Hey how are you been</Text>

        </View> 
        <View style={{marginLeft:width*0.4,justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"pink", padding:10,width:width*0.5,borderRadius:20,height:height*0.05}}>
            <Text>yes sure why not </Text>

        </View> 
        <Text   style={{marginLeft:width*0.4,fontSize:12,color:"grey"}}>12:55 pm</Text>

        </View>
        </ScrollView>

    );

};

const styles = StyleSheet.create({
    avatar:{
width:width*0.2,
height:height*0.08,
borderRadius:35    },
    avatarContainer:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        width:width,
        height:height*0.1,
        gap:10
    },
    chatContainer:{
        marginTop:height*0.08,
        gap:9
    }
});
export default ChatPage;