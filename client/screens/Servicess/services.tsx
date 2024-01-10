import React from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions,TouchableOpacity,Image} from 'react-native';
import Veto from "../../assets/veterinaire.png"
import emergecy from "../../assets/emergecy.png"
const { width, height } = Dimensions.get('screen')
const Services: React.FC = () => {
    return (
        <ScrollView style={styles.UsersServicesp}>
            <View style={styles.UsersServices} >
                <TouchableOpacity style={styles.Service}><Image style={{width:width*0.25,height:height*0.11}} source={Veto}></Image></TouchableOpacity>
                <TouchableOpacity style={styles.Service}><Image style={{width:width*0.25,height:height*0.11}} source={emergecy}></Image></TouchableOpacity>
                <TouchableOpacity style={styles.Service}><Text>gffggffg</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Service}><Text>gffggffg</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Service}><Text>gffggffg</Text></TouchableOpacity>
                {/* <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View>
                <View style={styles.Service}><Text>gffggffg</Text></View> */}
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    UsersServicesp: {
   backgroundColor:"#ffc368",
},
UsersServices :{
    paddingTop:20,
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    
},
Service : {
    backgroundColor:"white",
    width:width*0.35,
    height:height*0.155,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    margin:10,
    display:'flex',
}
})
export default Services;

