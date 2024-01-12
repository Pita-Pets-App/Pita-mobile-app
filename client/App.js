import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import UserProfile from "./screens/UserProfile/UserProfile.tsx"
import Services from "./screens/Servicess/services";
import Adoptation from "./screens/Adoptation/Adoptation"
import Navbar from "./screens/Home/Components/Navbar";
import AdoptationDetails from "./screens/AdoptationDetails/AdoptationDetails";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      
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
        
        name="Adoptation"
        component={Adoptation} />
         <Stack.Screen
        
        name="AdoptationDetails"
        component={AdoptationDetails} />
      </Stack.Navigator>
      <Navbar/>

    </NavigationContainer>
  );
}


