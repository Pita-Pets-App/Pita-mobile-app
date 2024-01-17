import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
type DrNambuvanProps = {

};
const { width, height } = Dimensions.get('screen')
const Onevet: React.FC<DrNambuvanProps> = () => {
   const navigation=useNavigation()
 return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require("../../../assets/vet.png")}
      />
      <TouchableOpacity onPress={()=>navigation.navigate("Review" as never)}><View style={styles.infoUser}>
      <Text style={styles.name}>Dr. Nambuvan</Text>
      <Text style={styles.title}>Bachelor of Veterinary Science</Text>
      <View style={styles.rating}>
      </View>
      
        {/* You can add a rating component here */}
      </View>
      </TouchableOpacity>
      <Text style={styles.timings}>Monday - Friday at 8.00 am - 5.00pm</Text>
      <Text style={styles.price}>1000 LKR for an Appointment</Text>
      <Text style={styles.distance}>25 km</Text>
      <Text style={styles.description}>
        Our paradise is situated in the heart of the town with a pleasant
        environment. We are ready to treat your beloved doggos & puppers with love
        and involvement.
      </Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookText}>Book an Appointment</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 card: {
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
   //  paddingVertical:width*0.15, 
   //  paddingHorizontal:width*0.2,
 },
 image: {
    width: width*1,
    height: height*0.35,
 },
 name: {
   textAlign:"center",
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
    
 },
 title: {
   textAlign:"center",
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
 },
 rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
 },
 timings: {
    fontSize: 14,
    color: '#888888',
    marginTop: 10,
 },
 price: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
 },
 distance: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
 },
 description: {
    fontSize: 14,
    color: '#888888',
    marginTop: 10,
    textAlign: 'justify',
 },
 bookButton: {
    backgroundColor: '#1C1C1C',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    
 },
 bookText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
 },
 infoUser:{
   padding:20,
   backgroundColor:'ffff',
   display:"flex",
   alignContent:'center',
   justifyContent:"center",
   marginVertical:20,
   marginHorizontal:45,
   borderRadius:20,
   borderWidth: 0.5, 
   borderColor: 'black',
   
}
});

export default Onevet;