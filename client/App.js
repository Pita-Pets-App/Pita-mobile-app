import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import UserProfile from "./screens/UserProfile/UserProfile.tsx"
import Services from "./screens/Servicess/services";
import Allvets from "./screens/Allvets/Components/Veteri"
import Navbar from "./screens/Home/Components/Navbar"
import Onevet from "./screens/Allvets/Components/Onevett";
import Review from "./screens/Allvets/Components/AddRate"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onevet">
        <Stack.Screen
        name="Home"
        component={Home} />
        <Stack.Screen
        name="UserProfile"
        component={UserProfile} />
        <Stack.Screen
        name="Services"
        component={Services} />
        <Stack.Screen
        name="Allvets"
        component={Allvets} />
        <Stack.Screen
        name="Onevet"
        component={Onevet} />
        <Stack.Screen
        name="Review"
        component={Review} />
      </Stack.Navigator>
        <Navbar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff4",
    alignItems: "center",
    justifyContent: "center",
  },
});