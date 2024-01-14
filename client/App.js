import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import UserProfile from "./screens/UserProfile/UserProfile.tsx"
import Services from "./screens/Servicess/services";
import Vets from "./screens/Allvets/Allvets"
import Adoptation from "./screens/Adoptation/Adoptation"
import Navbar from "./screens/Home/Components/Navbar";
import AdoptationDetails from "./screens/AdoptationDetails/AdoptationDetails";
import Allvets from "./screens/Allvets/Components/Veteri"
import Review from "./screens/Allvets/Components/AddRate"
import Onevet from "./screens/Allvets/Components/Onevett";
import Login from "./screens/authentification/Login/index.tsx"
import Register from "./screens/authentification/Register/index.tsx"
import LostFound from "./screens/Lost&Found/Lost&Found";
import LostFounDetails from "./screens/L&fDetails/L&FDetails";
import Welcome1 from "./screens/welcomingPages/welcome1";
import Welcome2 from "./screens/welcomingPages/welcome2";
import welcome3 from "./screens/welcomingPages/welcome3";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome1">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home', 
          headerStyle: {
            backgroundColor: '#ffc368', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }} />
        <Stack.Screen
        name="Register"
        component={Register} />
        <Stack.Screen
        name="Welcome1"
        component={Welcome1}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        name="Welcome2"
        component={Welcome2}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        name="welcome3"
        component={welcome3}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        name="Login"
        component={Login} />
        <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }} />
        <Stack.Screen
        name="Services"
        component={Services} 
        options={{
          title: 'Services',
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen
        name="vets"
        component={Vets} />
         <Stack.Screen
        name="Allvets"
        component={Allvets} />
        <Stack.Screen
        name="Onevet"
        component={Onevet} />
        <Stack.Screen
        name="Review"
        component={Review} />
         <Stack.Screen
        
        name="Adoptation"
        component={Adoptation} 
        options={{
          title: 'Adaptaion Interface',
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         <Stack.Screen
        
        name="AdoptationDetails"
        component={AdoptationDetails} 
        options={{
          title: 'Adaptaion Interface',
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen
        
        name="LostFound"
        component={LostFound} 
        options={{
          title: 'Lost And Found',
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        
        name="LostFounDetails"
        component={LostFounDetails} 
        options={{
          title: 'Lost And Found',
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
      {/* <Navbar/> */}
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
