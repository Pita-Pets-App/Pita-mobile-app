
import React from 'react';
import { View, Text,Image,Dimensions ,StyleSheet} from 'react-native';
import vet from "../../assets/vet.png"
import loc from "../../assets/localisation.png"
import favori from '../../assets/favori.png'
const { width, height } = Dimensions.get('screen');
const ProviderDetails: React.FC = ({ route }: any) => {
  const { provider } = route.params;
   console.log(provider.image[0]);
   
  return (
    <View>
      <Image style={{width:width,height:width*0.8,position:'absolute'}} source={{uri:"https://tse1.mm.bing.net/th?id=OIP.ZIyclPpdPSFRiXNl7dHp_wHaE8&pid=Api&P=0&h=180"}}></Image>
      <View style={{backgroundColor:"white",height:height,borderRadius:50,marginTop:255}}>
      <View style={styles.container}>
      <Text style={styles.name}>{`${provider.fname} ${provider.lname}`}</Text>
      <Text style={styles.email}>{provider.email}</Text>
      <View style={styles.reviewContainer}>
        <Text>{provider.review.reviewsVal}</Text>
        <Image style={styles.icon} source={favori}></Image>
        <Text style={styles.reviewText}>({provider.review.reviewsNum} reviews)</Text>
      </View>
      <View style={styles.locationContainer}>
        <Image style={styles.icon} source={loc}></Image>
        <Text style={styles.locationText}>Ariana</Text>
      </View>
    </View>
       <View style={{marginHorizontal:30,marginTop:20}}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>About {provider.fname}</Text>
      <Text style={{fontSize:15}}>{provider.provider_description}</Text>
      </View>
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    marginHorizontal: 30,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 5,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginTop: 20,
    marginLeft: 10,
  },
  icon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 5,
  },
  reviewText: {
    color: 'grey',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  locationText: {
    fontSize: 16,
  },
});

export default ProviderDetails;
