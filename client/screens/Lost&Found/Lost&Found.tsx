import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import chien from "../../assets/chien.jpg";
const { width, height } = Dimensions.get("screen");
const LostFound: React.FC <{navigation:any}> = ({navigation}) => {
  return (
    <View style={styles.alllf}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.bt} >
          <View>
            <Text style={{ color: "#fff", fontSize: 17 }}>Lost</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bt}>
          <View>
            <Text style={{ color: "#fff", fontSize: 17 }}>Found</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <ScrollView style={styles.apdpostes}>
        <TouchableOpacity onPress={()=>{navigation.navigate('LostFounDetails')}}>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.found}>
              <Text style={styles.statusText}>Found</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.lost}>
              <Text style={styles.statusText}>Lost</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.lost}>
              <Text style={styles.statusText}>Lost</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.found}>
              <Text style={styles.statusText}>Found</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.found}>
              <Text style={styles.statusText}>Found</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.onepost}>
          <Image style={styles.image} source={chien}></Image>
          <View  style={{width:width*0.45,marginLeft:10}}>
            <View style={styles.lost}>
              <Text style={styles.statusText}>Lost</Text>
            </View>
            <View>
              <View>
                <Text style={{fontSize:20,fontWeight:"bold"}}>PetName</Text>
              </View>
              <View>
                <Text>14/01/2024</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  alllf: {
    height: height,
  },
  search: {
    backgroundColor: "#fff",
    height: height * 0.1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffc368",
    height: height * 0.06,
    width: width * 0.25,
    borderRadius: 10,
  },
  apdpostes: {
    backgroundColor: "#fff",
    display: "flex",
    padding: 17,
  },
  onepost: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.17,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth:1,
    marginHorizontal:10
  },
  image: {
    width: width * 0.35,
    height: height * 0.15,
    margin: 10,
    borderRadius: 15,
  },
  found: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center", 
    backgroundColor: "green",
    marginBottom: 20,
    borderRadius: 10,
    width:width*0.15,
    padding: 5,
    marginLeft:80
  },
  lost: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center", 
    backgroundColor: "red",
    marginBottom: 20,
    borderRadius: 10,
    width:width*0.15,
    padding: 5,
    marginLeft:80
  },
  statusText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold", 
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#7f7f7f',
    backgroundColor:"#fff",
    paddingVertical: 5,
  },
});
export default LostFound;
