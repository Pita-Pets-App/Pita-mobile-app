import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import flech from "../../assets/left-arrow.png";
import CartAdoptation from "./Components/CartAdoptation"
// import LeftDirection from "../../assets/leftDirection.svg"

const { width, height } = Dimensions.get('screen');
import { Svg, Path } from 'react-native-svg';

const Adoptation: React.FC = ({navigation}): React.ReactElement => {
  return (
    <ScrollView  style={{padding:8,backgroundColor:"white",margin:2}}  >
      <View style={styles.title}>
      <Svg  onPress={()=>{
                navigation.navigate("Home")
            }} height="30" width="30" viewBox="0 0 34.075 34.075" fill="white" stroke="white">
        <Path d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79 L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792 C25.58,33.883,25.075,34.075,24.57,34.075z" fill="white" />
      </Svg>
        <Text   style={{fontSize:28,color:"white",fontWeight:"bold"}}>Adoptation</Text>
      </View>
<View style={styles.allPages} >
      
<CartAdoptation style={styles.cartAdoptation} />
<CartAdoptation style={styles.cartAdoptation} />
<CartAdoptation style={styles.cartAdoptation} />
<CartAdoptation style={styles.cartAdoptation} />
<CartAdoptation style={styles.cartAdoptation} />





      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  allPages: {
    padding: 10,
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    columnGap:10,
    rowGap:10
  },
  cartAdoptation: {
    width: (width -30) / 2,
  },
  title:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"#ffc368",
    height:height*0.07,
    gap:60
    
  }
});

export default Adoptation;
