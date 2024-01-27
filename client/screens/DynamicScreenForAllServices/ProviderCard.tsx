import React from 'react';
import { View, Text, StyleSheet ,Dimensions,Image} from 'react-native';
const { width, height } = Dimensions.get("screen");
import favori from '../../assets/favori.png'
import loc from "../../assets/localisation.png"
interface ProviderCardProps {
  email: string;
  fname: string;
  lname: string;
  image:any;
  review:Review
  provider_experience:string
}
interface Review {
  reviewsVal:number;
  reviewsNum:number
}

const ProviderCard: React.FC<ProviderCardProps> = ({ email, fname, lname,image,review,provider_experience }) => {
  const fullName = `${fname} ${lname}`;
  console.log(review);
  
  return (
    <View style={styles.card}>
      <View style={{display:"flex",flexDirection:'row'}}>
        <Image style={{width:width*0.15,height:width*0.15,borderRadius:50}} source={{uri:image}}></Image>
        <View style={{marginLeft:30}}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text>{email}</Text>
          </View>  
      </View>
      <View style={{display:'flex',flexDirection:"row",alignItems:"center",marginLeft:90}}>
      <Image style={{width:width*0.05,height:width*0.05, marginRight:5}} source={favori}></Image>
      <Text style={{fontSize:15,fontWeight:"bold"}}>{review.reviewsVal}</Text>
      <Text>  ({review.reviewsNum} reviews)</Text>
      </View>
      <View style={{display:'flex',flexDirection:"row",alignItems:"center",gap:20,marginTop:10}}>
      
      <Text style={{fontSize:14,color:"grey"}}>{provider_experience} of experience</Text>
      <View  style={{display:'flex',flexDirection:"row",alignItems:"center",gap:2}}>
      <Image style={{width:width*0.05,height:width*0.05}} source={loc}></Image>
        <Text>Ariana</Text>
        </View>
    
      </View>
      {/* <Text style={styles.serviceName}>{email}</Text>
      <Text style={styles.fullName}>{fullName}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width:width*0.85
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ProviderCard;
