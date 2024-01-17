import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { SvgXml } from "react-native-svg";
import Slider from "@react-native-community/slider";
import * as geolib from "geolib";
import { useDispatch, useSelector } from "react-redux";
import petShop from "../../assets/pet-shop.png"
// import {getProviderData} from "../../store/mapSlice"
// import ItineraryModal from "../components/ItinerairyModal.jsx";
import { useNavigation } from "@react-navigation/native";
import Loc from "../../assets/loc.svg";
import Sat from "../../assets/satellite-dish-solid.svg";
import Carte from "../../assets/map-solid.svg";
import HouCar from "../../assets/car-garage.svg";
import { Audio } from 'expo-av';

import axios from "axios";
const google_api = "AIzaSyA6k67mLz5qFbAOpq2zx1GBX9gXqNBeS-Y";

const Map = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [getLocation, setGetLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 50.842278,
    longitude: 30.187765,
    latitudeDelta: 0.01,
    longitudeDelta: 0.02,
  });
  
  const [itineraryMode, setItineraryMode] = useState(false);
  const [filterRadius, setFilterRadius] = useState(10);
  const [sliderValue, setSliderValue] = useState(10);
  const [estimatedDuration, setEstimatedDuration] = useState(null);
  const [mapType, setMapType] = useState("standard");
//   const providers = useSelector((state) => state.map.list);
const [providers,setProviders]=useState([])
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentProviderIndex, setCurrentProviderIndex] = useState(0);
 
  const mapRef = useRef(null);
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       "FiraMono-Bold": FiraMonoBold,
  //       "FiraMono-Medium": FiraMonoMedium,
  //     });
  //   };

  //   loadFonts();
  // }, []);
  const svgXml = `
  <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
    <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/>
  </svg>
`;
  const agen = ` <Svg width={30} height={20} viewBox="0 0 16.564 16.564">
  <G>
    <G>
      <Path fill="white" d="M12.085,11.966c-1.45-1.816-1.521-4.027-1.521-4.027c-0.092-0.073-0.18-0.175-0.316-0.264 c-0.032-0.021-0.054-0.038-0.085-0.057C10.053,7.542,9.922,7.47,9.796,7.42C9.392,7.255,9.034,7.201,8.585,7.182 C7.936,7.157,7.466,7.42,7.042,7.748C6.97,7.805,6.899,7.871,6.833,7.938c-0.153,0.154-0.21,0.228-0.34,0.366 C6.467,8.328,6.467,8.339,6.445,8.361c0,0-0.549,1.878-1.563,3.231c-1.013,1.353-2.331,1.874-2.331,2.226 c0,0.544,0.026,0.8,0.234,1.287c0.056,0.137,0.143,0.274,0.222,0.392c0.152,0.219,0.183,0.216,0.278,0.336 c0.082,0.104,0.209,0.199,0.32,0.281c0.085,0.066,0.183,0.13,0.279,0.181c0.014,0.006,0.03,0.015,0.045,0.024 c0.155,0.079,0.331,0.155,0.511,0.184l0.554,0.061h0.174c0.585-0.025,1.496-0.294,2.014-0.437c0.136-0.038,0.281-0.07,0.426-0.104 l0.942-0.117c0.462-0.028,1.322,0.158,1.791,0.294c0.531,0.158,1.169,0.335,1.72,0.364h0.288c0.537-0.029,1.037-0.223,1.441-0.557 c0.522-0.428,0.851-0.952,0.951-1.642C14.874,13.436,13.535,13.782,12.085,11.966z" />
      <Path
        fill="white"
        d="M15.926,6.508c0.072-0.097,0.129-0.202,0.163-0.313c0.061-0.199,0.062-0.405,0.008-0.594 c-0.05-0.189-0.148-0.364-0.327-0.505c-0.13,0.188-0.2,0.346-0.259,0.49c-0.064,0.144-0.104,0.271-0.142,0.39 c-0.028,0.087-0.048,0.171-0.069,0.258c-0.745-0.004-1.609,0.87-1.969,1.7c-0.415,0.958-0.102,2.015,0.698,2.361 s1.784-0.15,2.197-1.108C16.586,8.359,16.479,7.066,15.926,6.508z"
      />
      <Path
        fill="white"
        d="M10.824,6.566c1.054,0.225,2.127-0.616,2.396-1.878c0.225-1.053-0.182-2.523-0.935-3.114 c0.027-0.055,0.062-0.107,0.079-0.165c0.061-0.199,0.062-0.405,0.008-0.594c-0.05-0.188-0.148-0.364-0.328-0.504 c-0.13,0.188-0.199,0.346-0.258,0.49c-0.064,0.144-0.104,0.271-0.142,0.39c-0.013,0.042-0.023,0.082-0.033,0.122 c-0.99-0.024-1.954,1.373-2.207,2.56C9.135,5.135,9.77,6.341,10.824,6.566z"
      />
      <Path
        fill="white"
        d="M6.147,6.631C7.291,6.539,8.13,5.355,8.021,3.985C7.917,2.679,6.81,1.068,5.715,0.996 C5.705,0.958,5.695,0.92,5.683,0.88C5.646,0.76,5.606,0.633,5.542,0.49C5.483,0.346,5.414,0.188,5.283,0 c-0.18,0.141-0.278,0.316-0.328,0.505C4.902,0.693,4.903,0.899,4.964,1.098c0.01,0.031,0.031,0.06,0.043,0.091 c-0.796,0.524-1.219,1.99-1.129,3.125C3.987,5.685,5.003,6.721,6.147,6.631z"
      />
      <Path
        fill="white"
        d="M3.783,7.789C3.504,6.685,2.33,5.466,1.377,5.532c-0.01-0.038-0.019-0.075-0.032-0.113 C1.308,5.3,1.269,5.172,1.205,5.028c-0.059-0.143-0.129-0.301-0.258-0.49C0.767,4.68,0.669,4.854,0.619,5.043 C0.565,5.232,0.567,5.439,0.627,5.638c0.021,0.07,0.06,0.136,0.097,0.202C0.139,6.43,0,7.733,0.24,8.684 c0.297,1.173,1.33,1.923,2.31,1.675C3.527,10.111,4.08,8.96,3.783,7.789z"
      />
    </G>
  </G>
</Svg>`;

  const Person = `<svg xmlns="http://www.w3.org/2000/svg" fill=#001170 viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>`;


  const Person1 = `<svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>`

  const customMapStyle = [
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.province",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffc368",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit.station.bus",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit.station.rail",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#89bdd7",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ];
  useEffect(() => {
    const getProviderData = async () => {
      try {
        const res = await axios.get(
          `http://${process.env.EXPO_PUBLIC_SERVER_IP}:3000/api/provider`
        );
        setProviders(res.data);
      } catch (er) {
        console.error(JSON.stringify(er));
      }
    };
  
    // Call the getProviderData function to fetch provider data
    getProviderData();
  }, []);

  console.log(providers,"pro")
  // useEffect(() => {
  //   // Load the sound file
  //   const playSound = async () => {
  //     const { sound } = await Audio.Sound.createAsync(
  //       require('./assets/welcome.mp3')
  //     );
  //     await sound.playAsync();
  //   };

  //   // Play the sound when the component mounts
  //   playSound();

  //   // Unload the sound when the component unmounts
  //   return async () => {
  //     await sound.unloadAsync();
  //   };
  // }, []);
//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const userLocation = {
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       };
//       setGetLocation(userLocation);
//       setMapRegion({
//         ...mapRegion,
//         latitude: userLocation.latitude,
//         longitude: userLocation.longitude,
//       });
//     })();
//   }, [estimatedDuration, mapRegion]);
const svgXml3 = `
<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style>
  </defs>
  <polyline class="cls-1" points="1.5 23.48 1.5 9.16 12 1.52 22.5 9.16 22.5 23.48"/>
  <path class="cls-1" d="M7.23,14.89h9.55a1.91,1.91,0,0,1,1.91,1.91v3.82a0,0,0,0,1,0,0H5.32a0,0,0,0,1,0,0V16.8a1.91,1.91,0,0,1,1.91-1.91Z"/>
  <line class="cls-1" x1="10.09" y1="17.75" x2="8.18" y2="17.75"/>
  <line class="cls-1" x1="15.82" y1="17.75" x2="13.91" y2="17.75"/>
  <rect class="cls-1" x="7.23" y="20.61" width="0.95" height="1.91"/>
  <rect class="cls-1" x="15.82" y="20.61" width="0.95" height="1.91"/>
  <path class="cls-1" d="M16.77,14.89H7.23l.59-2.38a1.9,1.9,0,0,1,1.85-1.44h4.66a1.9,1.9,0,0,1,1.85,1.44Z"/>
</svg>`
useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const userLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setGetLocation(userLocation);
      setMapRegion({
        ...mapRegion,
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      });
    })();
  }, [estimatedDuration, mapRegion]);
  const handleSliderChange = (value) => {
    setSliderValue(value);
    setFilterRadius(value);
  };

  const handleSetItinerary = (provider) => {
    setSelectedProvider(provider);
    setTimeout(() => setModalVisible(true), 1500);
    getTime();
  
    const providerLocation = {
      latitude: provider.provider_lattitude,
      longitude: provider.provider_langitude,
    };
  
    mapRef.current.fitToCoordinates([providerLocation], {
      animated: true,
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  };

  const handleStartItinerary = () => {
    handleToggleItineraryMode();
    setModalVisible(false);

    setMapRegion({
      latitude: getLocation.latitude,
      longitude: getLocation.longitude,
      latitudeDelta: 0.002,
      longitudeDelta: 0.001,
    });
  };

  const handleToggleItineraryMode = () => {
    setItineraryMode(!itineraryMode);
  };

  const handleToggleMapType = () => {
    setMapType((prevMapType) =>
      prevMapType === "standard" ? "satellite" : "standard"
    );
  };

  const handleZoomToUser = () => {
    if (getLocation && getLocation.latitude && getLocation.longitude) {
      mapRef.current.animateToRegion({
        latitude: getLocation.latitude,
        longitude: getLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02,
      });
    } else {
      Alert.alert("provider not available", "Please enable provider services.");
    }
  };

  const svgXml1 = `
  <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
    <path d="M192 32c0-17.7 14.3-32 32-32C383.1 0 512 128.9 512 288c0 17.7-14.3 32-32 32s-32-14.3-32-32C448 164.3 347.7 64 224 64c-17.7 0-32-14.3-32-32zM60.6 220.6L164.7 324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32c-2.9 0-5.6-.4-8.3-1.1l-28.4 28.4L291.4 451.4c14.5 14.5 11.8 38.8-7.3 46.3C260.5 506.9 234.9 512 208 512C93.1 512 0 418.9 0 304c0-26.9 5.1-52.5 14.4-76.1c7.5-19 31.8-21.8 46.3-7.3zM224 96c106 0 192 86 192 192c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
  </svg>
`;
  const getTime = async () => {
    if (
      getLocation &&
      getLocation.latitude &&
      getLocation.longitude &&
      selectedProvider
    ) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/directions/json?origin=${
            getLocation.latitude
          },${getLocation.longitude}&destination=${
            (selectedProvider).provider_lattitude
          },${(selectedProvider). provider_langitude}&key=${google_api}`
        );
        const data = await response.json();
        if (data.status === "OK") {
          const duration = data.routes[0].legs[0].duration.text;
          setEstimatedDuration(duration);
        } else {
          console.error("Error calculating route: ", data.status);
        }
      } catch (error) {
        console.error("Error fetching route data: ", error);
      }
    }
  };
//   const handleNavigateToProfile = () => {
//     // Add logic to navigate to the agency's profile screen
//     if (selectedProvider) {
//       navigation.navigate("AgencyProfileUser", { agencyId: selectedAgency.id });
//     }
//   };
  const handleNextProvider = () => {
    if (providers&& providers.length > 0) {
      const nextIndex = (currentProviderIndex + 1) % providers.length;
      setCurrentProviderIndex(nextIndex);

      const nextProvider= providers[nextIndex];
      const nextProviderLocation = {
        latitude: (nextProvider).provider_lattitude,
        longitude:(nextProvider). provider_langitude,
      };

      mapRef.current.animateToRegion({
        latitude: nextProviderLocation.latitude,
        longitude: nextProviderLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02,
      });
    }
  };
  const svgXml2 = `
  <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 576 512">
    <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"/>
  </svg>`
  return (
    <View style={styles.container}>

 <MapView
   ref={mapRef}
   style={styles.map}
   region={mapRegion}
   mapType={mapType}
   customMapStyle={customMapStyle}
   onLayout={() => {
     mapRef.current.setCamera({
       center: {
         latitude: getLocation?.latitude,
         longitude: getLocation?.longitude,
       },
       pitch: 45,
       zoom: mapRegion.latitudeDelta,
     });
   }}
 > 
   {getLocation && getLocation?.latitude && getLocation?.longitude && (
     <Marker
       coordinate={{
         latitude: getLocation?.latitude,
         longitude: getLocation?.longitude,
       }}
       title="Your location"
     >
       <SvgXml xml={Person} width="30" height="30" />
     </Marker>
   )}
 {providers?.map((provider) => {
     const providerLocation = {
       latitude: provider. provider_lattitude*1,
       longitude:provider. provider_langitude*1,
     };

     if (getLocation && getLocation?.latitude && getLocation?.longitude) {
       const distance = geolib.getDistance(
         {
           latitude: getLocation.latitude,
           longitude: getLocation.longitude,
         },
         providerLocation
       ); 

       if (distance <= filterRadius * 1000) {
         return (
           <Marker
             coordinate={providerLocation}
            
             key={provider.id}
             title={provider.name}
             onPress={() => handleSetItinerary(provider)}
           >
             <SvgXml xml={Person1} width="30" height="30" />
           </Marker>
         );
       } else {
         return null;
       }
     } else {
       return null;
     }
   })} 
   {getLocation && getLocation?.latitude && getLocation?.longitude && (
     <Circle
       center={{
         latitude: getLocation.latitude,
         longitude: getLocation.longitude,
       }}
       radius={filterRadius * 1000}
       fillColor="rgba(255, 0, 0, 0.1)"
       strokeWidth={1}
       strokeColor="#ffc368"
     />
    
   )
   
   } console.log(lo)
    {itineraryMode && selectedProvider && getLocation && (
    <MapViewDirections
    origin={{
      latitude: getLocation.latitude,
      longitude: getLocation.longitude,
    }}
    destination={{
      latitude: selectedProvider.provider_lattitude*1,
      longitude: selectedProvider.provider_langitude*1,
    }}
    apikey={google_api}
    strokeWidth={5}
    strokeColor="#ffc368"
  />
   )} 
  </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleToggleMapType}
          style={styles.changeView}
        >
     {mapType==="satelitte"?<SvgXml xml={svgXml2} />:  <SvgXml xml={svgXml1} />}
        </TouchableOpacity>

         <TouchableOpacity style={styles.zoomButton} onPress={handleNextProvider}>
         <SvgXml xml={svgXml3} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomToUser} style={styles.locsvg}>
        <SvgXml xml={svgXml} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.sliderContainer}>
          <Text>Filter Radius: {sliderValue} km</Text>
          <Slider
            style={{ width: "80%", height: 40 }}
            minimumValue={1}
            maximumValue={50}
            step={1}
            value={sliderValue}
            onValueChange={handleSliderChange}
          />
        </View>
      </View>
      {/* <ItineraryModal
        isVisible={isModalVisible}
        handleNavigateToProfile={handleNavigateToProfile}
        estimatedDuration={estimatedDuration}
        agency={selectedAgency}
        closeModal={() => setModalVisible(false)}
        startItinerary={() => handleStartItinerary(selectedAgency)}
      /> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  zoomButton: {
  padding:10,
    backgroundColor: "lightgrey",

    margin: 5, 
    borderRadius: 5,
  },
  changeView: {
  padding:10,
    backgroundColor: "lightgrey",

    margin: 5, 
    borderRadius: 5,
  },
  locsvg: {
  padding:10,
    backgroundColor: "lightgrey",

    margin: 5, 
    borderRadius: 5,
   
  },
  sliderContainer: {
    flex: 1,
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Map;
