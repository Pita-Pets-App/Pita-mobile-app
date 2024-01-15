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
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");
import chien from "../../../assets/chien.jpg";

const CartAdoptation: React.FC = (): React.ReactElement => {
  const navigation=useNavigation()
  return (
    <View style={styles.allPages}>
      <TouchableOpacity onPress={()=>navigation.navigate("AdoptationDetails" as never)}>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
      <Text style={{ fontSize: 11, fontWeight: "bold" }}>
        MO213-Pominirania White
      </Text>
      <View style={styles.description}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Genre:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
            male
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Age:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          2 monthes
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
      <Text style={{ fontSize: 11, fontWeight: "bold" }}>
        MO213-Pominirania White
      </Text>
      <View style={styles.description}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Genre:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
            male
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Age:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          2 monthes
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
      <Text style={{ fontSize: 11, fontWeight: "bold" }}>
        MO213-Pominirania White
      </Text>
      <View style={styles.description}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Genre:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
            male
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Age:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          2 monthes
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
      <Text style={{ fontSize: 11, fontWeight: "bold" }}>
        MO213-Pominirania White
      </Text>
      <View style={styles.description}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Genre:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
            male
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Age:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          2 monthes
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.allPag}>
      <Image source={chien} style={styles.animalPicture}></Image>
      <Text style={{ fontSize: 11, fontWeight: "bold" }}>
        MO213-Pominirania White
      </Text>
      <View style={styles.description}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Genre:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
            male
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 11, color: "grey" }}>Age:</Text>

          <Text style={{ fontSize: 11, color: "grey", fontWeight: "bold" }}>
          2 monthes
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    
    </View>
  );
};
const styles = StyleSheet.create({
  allPages: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: 10,
    rowGap: 10,
  },
  allPag: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    width: width * 0.45,
    height: height * 0.27,
    gap: 7,
    borderRadius: 15,
    borderColor:"black",
    paddingTop:10
  },
  animalPicture: {
    width: width * 0.4,
    height: height * 0.18,
    borderRadius: 15,
    
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:10
    
  },
});
export default CartAdoptation;
