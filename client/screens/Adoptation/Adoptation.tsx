import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import CartAdoptation from "./Components/CartAdoptation";

const { width, height } = Dimensions.get("screen");


const Adoptation: React.FC = (): React.ReactElement => {
  return (
    <ScrollView style={{ backgroundColor: "white", margin: 2 }}>
      <CartAdoptation/>
    </ScrollView>
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
  cartAdoptation: {
    width: width * 0.45,
  },
  title: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffc368",
    height: height * 0.09,
    gap: 60,
  },
});

export default Adoptation;
