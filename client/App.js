import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import AddReview from "./screens/Allvets/Components/Addreview"
import PetsProfile from "./screens/PetsProfiles/PetsProfiles"
import ChatContainer from "./screens/ChatContainer/ChatContainer"
import ChatPage from "./screens/ChatPage/ChatPage";
import Login from "./screens/authentification/Login/index.tsx"
import Register from "./screens/authentification/Register/index.tsx"
import LostFound from "./screens/Lost&Found/Lost&Found";
import LostFounDetails from "./screens/L&fDetails/L&FDetails";
import Welcome1 from "./screens/welcomingPages/welcome1";
import Welcome2 from "./screens/welcomingPages/welcome2";
import welcome3 from "./screens/welcomingPages/welcome3";
import store from "./lib/redux/store"
import Comment from "./screens/Lost&Found/Comments"
import Map from "./screens/MapForUser/Map"
import Events from "./screens/Events/Events"
import ProvCV from "./screens/authentification/Provider/RegisterForm/putcv";
import { Provider } from "react-redux";
import MapForAdopt from "./screens/MapForAdopt/MapForAdopt"
import MapForEvent from "./screens/MapForEvent/MapForEvent";
import EditProfile from "./screens/UserProfile/EditProfile";
import AllPets from "./screens/UserProfile/AllPetsU";
import AddPet from "./screens/UserProfile/AddPet";
import EditPet from "./screens/PetsProfiles/EditPet";
import DynamicScreenAllServices from "./screens/DynamicScreenForAllServices/index"
import ProviderDetails from "./screens/DynamicScreenForAllServices/providerDetails"
import RegisterOrLogin from "./screens/welcomingPages/registerOrloginUser";
import AddNewAdoptation from "./screens/AddNewAdoptation/AddNewAdoptation"
import ProviderOneEvent from "./screens/ProviderEvents/OneEvent"
import Blogs from "./screens/Blogs/Blogs";
import RegisterOrLoginP from "./screens/welcomingPages/registerOrloginProvider";
import ProvOrUser from "./screens/welcomingPages/providerOrUser"
import RegisterProvider from "./screens/authentification/Provider/RegisterForm"
import LoginProvider from "./screens/authentification/Provider/LoginProvider"
import ProviderProfile from "./screens/ProviderProfile/ProviderProfile"
import OtherProfile from "./screens/OtherProfile/OtherProfile"
import CompleteProvider from "./screens/authentification/Complete/Complete"
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false}} />
           <Stack.Screen
        name="ProvOrUser"
        component={ProvOrUser}
        options={{
          headerShown: false}} />
        <Stack.Screen
        name="Register"
        component={Register} />
        <Stack.Screen
        name="RegisterProvider"
        component={RegisterProvider} />
        <Stack.Screen
        name="LoginProvider"
        component={LoginProvider} />
        <Stack.Screen
        name="DynamicScreenAllServices"
        component={DynamicScreenAllServices} 
        options={{
          title: 'Service',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
           <Stack.Screen
        name="CompleteProvider"
        component={CompleteProvider} 
        options={{
          title: 'Complete Your Info',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
           <Stack.Screen
        name="MapForAdopt"
        component={MapForAdopt}
        options={{
          headerShown:false
        }} />
         <Stack.Screen name="ProviderDetails" component={ProviderDetails} />
        <Stack.Screen
        name="Welcome1"
        component={Welcome1}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        name="RegisterOrLoginP"
        component={RegisterOrLoginP}
        options={{
          headerShown:false
        }} />
         <Stack.Screen
        name="Blogs"
        component={Blogs}
        options={{
          title: 'Blogs',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }}/>
         <Stack.Screen
        name="AddNewAdoptation"
        component={AddNewAdoptation}
        options={{
          headerShown:true
        }} />
         <Stack.Screen
        name="MapForEvent"
        component={MapForEvent}
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
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false,
        }} />
        <Stack.Screen
        name="ProvCV"
        component={ProvCV}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        name="RegisterOrLogin"
        component={RegisterOrLogin}
        options={{
          headerShown:false
        }} />
        
        <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
         <Stack.Screen
        name="OtherProfile"
        component={OtherProfile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen
        name="Services"
        component={Services} 
        options={{
          title: 'Services',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         <Stack.Screen
        name="ProviderProfile"
        component={ProviderProfile} 
        options={{
          title: 'ProviderProfile',
          headerStyle: {
            backgroundColor: '#4e9d91',
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
        component={Allvets}
        options={{
          title: 'Veterinairians',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        <Stack.Screen
        name="Onevet"
        component={Onevet}
        options={{
          title: 'Veterinairian',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        <Stack.Screen
        name="Review"
        component={Review}
        options={{
          title: 'Review',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
         <Stack.Screen
        
        name="Adoptation"
        component={Adoptation} 
        options={{
          
            headerShown:true,
          
          title: 'Adaptaion Interface',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen
        
        name="comment"
        component={Comment} 
        options={{
          
            headerShown:true,
          
          title: 'Comment',
          headerStyle: {
            backgroundColor: '#4e9d91',
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
          headerShown:false
        }} />
        <Stack.Screen
        
        name="AddReview"
        component={AddReview} 
        options={{
          title: 'Add Review',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
     <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerShown:false
        }} />
        <Stack.Screen
        
        name="Events"

        component={Events} 
        options={{
          title: 'Events',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} 
       />

       
        <Stack.Screen
        
        name="PetsProfile"
        component={PetsProfile}
        options={{
          title: 'Pet Profile',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />

<Stack.Screen
        
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
          <Stack.Screen
        
        name="ProviderOneEvent"
        component={ProviderOneEvent}
        options={{
          title: 'ProviderOneEvent',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
          <Stack.Screen
        
        name="EditPet"
        component={EditPet}
        options={{
          title: 'Edit Pet',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
<Stack.Screen
        
        name="AllPets"
        component={AllPets}
        options={{
          title: 'All Pets',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />

<Stack.Screen
        
        name="AddPet"
        component={AddPet}
        options={{
          title: 'Add Pet',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        <Stack.Screen
        
        name="ChatContainer"
        component={ChatContainer}
        options={{
          title: 'Chat',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: false}} />
           <Stack.Screen
        name="ChatPage"
        component={ChatPage} />        
        <Stack.Screen
        name="LostFound"
        component={LostFound} 
        options={{
          title: 'Lost And Found',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen
        name="LostFounDetails"
        component={LostFounDetails} 
        options={{
          title: 'Lost And Found',
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
      {/* <Navbar/> */}
    </NavigationContainer>
    </Provider>
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
