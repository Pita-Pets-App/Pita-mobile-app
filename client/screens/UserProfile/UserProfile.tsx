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
import user from '../../assets/user.jpg'

const { width, height } = Dimensions.get("screen");
const UserProfile: React.FC = () => {
  return (
    <ScrollView>
        <View><Image style={{width:width*1,height:height*0.35}} source={user}></Image></View>
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
