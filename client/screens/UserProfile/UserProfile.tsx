import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import UserPets from "./component/UserPets";
import UserInfo from "./component/UserInfo";

const { width, height } = Dimensions.get("screen");
const UserProfile: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.UsersProfile}>
        <UserInfo />
        <UserPets />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  UsersProfile: {
    display: "flex",
  },
});
export default UserProfile;
