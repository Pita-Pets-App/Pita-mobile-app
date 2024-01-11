import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 Image,
 TouchableOpacity,
} from 'react-native';
import Navbar from "../../Home/Components/Navbar"
type DrNambuvanProps = {
 // You can add any props that the component needs here
};

const Onevet: React.FC<DrNambuvanProps> = () => {
 return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require("../../../assets/vet.png")}
      />
      <Text style={styles.name}>Dr. Nambuvan</Text>
      <Text style={styles.title}>Bachelor of Veterinary Science</Text>
      <View style={styles.rating}>
        {/* You can add a rating component here */}
      </View>
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
      <Navbar/>
    </View>
 );
};

const styles = StyleSheet.create({
 card: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 80,
 },
 image: {
    width: 100,
    height: 100,
    borderRadius: 70,
 },
 name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10,
 },
 title: {
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
});

export default Onevet;