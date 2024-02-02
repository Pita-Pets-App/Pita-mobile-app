import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, FlatList,TextInput,TouchableOpacity,Keyboard } from 'react-native';
import axios from 'axios';
import { port } from '../../port';
import { useNavigation } from '@react-navigation/native';
import send from '../../assets/paper-plane1.png'
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:3001`);

const {width,height} = Dimensions.get('screen')


const ChatPage: React.FC = ({route}:any): React.ReactElement => {
    const [conv, setConv] = useState([]);
    const [name, setName] =  useState<Name>({});
    const [newMsg, setNewMsg] = useState("");
    const [refresh,setRefresh]=useState(false)
    const navigation = useNavigation(); 
    console.log(conv);
    const userId = useSelector((state: RootState) => state.user?.userData.id);
    const {receiver}=route.params
    console.log(receiver);
    const token = useSelector((state: RootState) => state.auth.authToken);
    const getData = async () => {
      try {
        const result = await axios.put(`${port}/api/Chat/${userId}`,{reciver:receiver});
        setName(result.data[0])
        setConv(result.data.slice(1));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
       
    useEffect(() => {
        socket.connect();
        socket.on('recive', (message) => {
          setConv([...conv,message])

          setRefresh(!refresh); 
        });
    
        return () => {
          socket.disconnect();
        };
      }, [refresh]);

       
  
    useEffect(() => {
      getData();
    }, [refresh]);

    const renderConv=({item})=>(
        
        <View key={item.id}>
            {(item.user2==userId&&item.msg)?
        <View style={{justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"#e9e9eb", padding:10,width:width*0.5,borderRadius:20,height:height*0.05,marginVertical:5}}>
            <Text>{item.msg}</Text>

       
</View>:item.msg?<View  style={{marginLeft:width*0.4,justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"#34ca5a", padding:10,width:width*0.5,borderRadius:20,height:height*0.05,marginVertical:5}}>
            <Text>{item.msg}</Text>

        </View>:"" }
           
        </View> 
        
    )
    useEffect(() => {
        navigation.setOptions({
          title: `${name?.fname} ${name?.lname}`,
          headerStyle: {
            backgroundColor: '#4e9d91',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={styles.headerRightContainer}>
 <Image style={styles.profileImage} source={{ uri: name?.image }} />
            </View>
          ),
        });
      }, [navigation, conv,refresh]);

      const handleSend=async()=>{
        console.log("newMsg",newMsg);
        let obj={
            msg:newMsg,
            user1:userId,
            user2:receiver
        }
        const result=await axios.post(`${port}/api/Chat`,obj,{
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        Keyboard.dismiss()  
        await socket.emit('add', { msg: newMsg, user1: userId, user2: receiver });
        setConv([...conv,obj])
        setNewMsg("") 
        setRefresh(!refresh)
      }

    return (
        
        <View style={{ flex: 1 }}>
  <FlatList
    style={{ width: width, height: height, padding: 5}}
    data={conv}
    renderItem={renderConv}
    keyExtractor={(item) => item.id}

  />
  <View  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10,alignItems:"center"}}>
    <TextInput
    placeholder='message'
    style={{backgroundColor:"grey",width:width*0.8,height:height*0.05,borderRadius:20,paddingHorizontal:15}}
      onChangeText={setNewMsg}
      value={newMsg}


    />
    <TouchableOpacity onPress={()=>{handleSend()}}>
    <Image source={send} style={{width:width*0.077,height:height*0.03}}></Image>
    </TouchableOpacity>
  </View>
</View>

      );

};

const styles = StyleSheet.create({
    avatar:{
width:width*0.2,
height:height*0.08,
borderRadius:35    },
    avatarContainer:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        width:width,
        height:height*0.1,
        gap:10
    },
    chatContainer:{
        marginTop:height*0.08,
        gap:9
    },
    headerRightContainer: {
        marginRight: 10,
      },
      profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
      },
});
export default ChatPage;