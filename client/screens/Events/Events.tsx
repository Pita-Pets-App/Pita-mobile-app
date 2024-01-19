import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import chien from "../../assets/chien.jpg";

const { width, height } = Dimensions.get("screen");

const EventCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderRadius: 15,
      margin: 15,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    image: {
      width: "100%",
      height: height * 0.3,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      justifyContent: "flex-end",
      padding: 15,
      borderRadius: 15,
    },
    createdByContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    createdBy: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#ffffff",
    },
    profileIcon: {
      marginRight: 10,
    },
    content: {
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#FFA500", // Light Orange
    },
    description: {
      fontSize: 16,
      marginBottom: 5,
      color: "#333333", // Darker Gray
    },
    date: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
      color: "#333333", // Darker Gray
    },
    status: {
      fontSize: 16,
      marginBottom: 10,
      color: "#333333", // Darker Gray
    },
    customStyle: {
      backgroundColor: "#FFA500", // Light Orange
      borderWidth: 2,
      borderColor: "black",
    },
    customText: {
      color: "#333333", // Darker Gray
      fontSize: 20,
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: "#FFA500", // Light Orange
      padding: 15,
      borderRadius: 10,
      width: "100%",
      alignItems: "center",
    },
    addButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      width: width * 0.8,
      alignItems: "center",
    },
    input: {
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 5,
      height: 40,
      width: "100%",
      marginBottom: 10,
      paddingLeft: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start", // Updated from "center" to "flex-start"
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 12,
        padding: 5,
        borderColor: "#ddd",
      },
      
    mapMarkerIcon: {
      fontSize: 30,
      color: "#333333", 
    },
    locationText: {
      fontSize: 18,
      color: "#333333", // Darker Gray
      marginLeft: 5,
    },
  });

  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={styles.addButtonText}>Add Event</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.container, styles.customStyle]}>
        <TouchableOpacity activeOpacity={0.7} onPress={toggleDetails}>
          <Image style={styles.image} source={chien} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <FontAwesome
                name="user-circle"
                size={24}
                color="#fff"
                style={styles.profileIcon}
              />
              <Text style={styles.createdBy}>Created by: OussemaChrif</Text>
            </View>
          </View>
        </TouchableOpacity>

        {showDetails && (
          <View style={styles.content}>
            <Text style={[styles.title, styles.customText]}>Event Title:</Text>
            <Text style={[styles.title, styles.customText]}>Event Description: vfjibfucdj</Text>
            <Text style={[styles.title, styles.customText]}>Event Date: January 20, 2024</Text>
            <Text style={[styles.title, styles.customText]}>Status: Active</Text>
          </View>
        )}
      </View>

      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput style={styles.input} placeholder="Event Title" />
            <TextInput style={styles.input} placeholder="Event Description" />
            <TextInput style={styles.input} placeholder="Event Date" />

            <View style={styles.inputContainer}>
              <TouchableOpacity>
                <FontAwesome name="map-marker" style={styles.mapMarkerIcon} />
              </TouchableOpacity>
              <Text style={styles.locationText}>Location</Text>
            </View>

            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
              <Text style={styles.addButtonText}>Add Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default EventCard;
