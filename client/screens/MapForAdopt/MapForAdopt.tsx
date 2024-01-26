import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch } from "react-redux";
import { locAgn } from "../../store/location";
import * as Location from "expo-location";
import { SvgXml } from "react-native-svg";


const MapForEvent = ({ navigation }) => {
  const [getLocation, setGetLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 36.842278,
    longitude: 10.187765,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
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
  }, []);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const dispatch = useDispatch();
  const Person1= `<svg xmlns="http://www.w3.org/2000/svg" fill=orange viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>`;

  const Person = `<svg xmlns="http://www.w3.org/2000/svg" fill=#A9A9A9 viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>`;
  const handleMapPress = (e) => {
    const selectedLatitude = e.nativeEvent.coordinate.latitude;
    const selectedLongitude = e.nativeEvent.coordinate.longitude;

    setSelectedLocation({
      latitude: selectedLatitude,
      longitude: selectedLongitude,
    });
    console.log("selected", selectedLocation);
  };

  const handleLoc = () => {
    if (selectedLocation) {
      dispatch(locAgn(JSON.stringify(selectedLocation)));
      navigation.navigate("AddNewAdoptation");
    } else {
    }
  };
 useEffect(()=>{
    handleMapPress
 },[])
  // const customMapStyle = [
  //   {
  //     "featureType": "road.arterial",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#000000" // Change the color of roads to red
  //       }
  //     ]
  //   },
  //   {
  //     "featureType": "poi",
  //     "elementType": "geometry",
  //     "stylers": [
  //       { "visibility": "off" }
  //     ]
  //   },
  //   {
  //     "featureType": "landscape",
  //     "elementType": "geometry",
  //     "stylers": [
  //       { "visibility": "off" }
  //     ]
  //   },
  //   {
  //     "featureType": "water",
  //     "elementType": "geometry",
  //     "stylers": [
  //       {
  //         "color": "#00FFFF" // Change the color of water to blue
  //       }
  //     ]
  //   }
  // ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion} onPress={handleMapPress}>
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title="Selected Location">
            <SvgXml xml={Person1} width="30" height="30" />
          </Marker>
        )}
        {getLocation && (
          <Marker
            coordinate={{
              latitude: getLocation.latitude,
              longitude: getLocation.longitude,
            }}
            title="Your location"
          >
            <SvgXml xml={Person} width="30" height="30" />
          </Marker>
        )}
      </MapView>
      <Button title="Add This Address" onPress={handleLoc} />
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
});

export default MapForEvent;
