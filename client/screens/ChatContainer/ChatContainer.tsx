import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import avatar  from "../../assets/user.jpg"

const {width,height} = Dimensions.get('screen')



const ChatContainer: React.FC = (): React.ReactElement => {
  
    return (
        <ScrollView  style={{flex:1,width:width,height:height}}>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
            <View   style={styles.pageContainer}>
              <Image  source={avatar}   style={{width:width*0.2,height:height*0.09,borderRadius:60}} />
              <View style={{justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:width*0.5}}>
            <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Pranav Ray</Text>
            <Text  style={{fontSize:16,color:"grey"}}>Okay Sure</Text>
              </View>
              <View  style={{justifyContent:"flex-end",alignItems:"center"}} >
                <Text  style={{fontSize:16,color:"grey"}}>12:55 pm</Text>
              </View>
            </View>
        </ScrollView>

    );

};

const styles = StyleSheet.create({
  pageContainer: {

    width:width,
    height:height*0.13,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    gap:2,
    borderBottomColor:"grey",
    borderBottomWidth:1.5
  }
});
export default ChatContainer;