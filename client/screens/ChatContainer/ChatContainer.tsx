import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { port } from '../../port';
import { RouteProp, useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

type RootStackParamList = {
  ChatPage: { receiver: string };

};

const ChatContainer: React.FC = (): React.ReactElement => {
  const [roomsData, setRoomsData] = useState([]);


  const navigation=useNavigation()

  const getData = async () => {
    try {
      const result = await axios.put(`${port}/api/Rooms/2`);
      console.log(result.data);
      setRoomsData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("ChatPage", {
        receiver: item[0].id,
      } as RouteProp<RootStackParamList, 'ChatPage'>);
    }}
  >

    <View style={styles.pageContainer}>
      <Image source={{ uri: item[0].image }} style={{ width: width * 0.2, height: height * 0.09, borderRadius: 60 }} />
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "column", flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>{item[0].fname}</Text>
        <Text style={{ fontSize: 16, color: "grey" }}>{item[item.length-1].msg}</Text>
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "grey" }}>{item[item.length-1].createdAt.slice(0,10)}</Text>
        {(2==item[item.length-1].user1)&&<Text style={{ fontSize: 16, color: "grey" }}>You</Text>}
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={roomsData}
      renderItem={renderItem}
      keyExtractor={(item) => item[0].id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: width,
    height: height * 0.13,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1.5
  }
});

export default ChatContainer;
