import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, FlatList,TextInput,TouchableOpacity,Keyboard } from 'react-native';
import avatar  from "../../assets/user.jpg"
import axios from 'axios';
import { port } from '../../port';
import { useNavigation } from '@react-navigation/native';
import send from '../../assets/paper-plane.png'

const {width,height} = Dimensions.get('screen')


const ChatPage: React.FC = ({route}): React.ReactElement => {
    const [conv, setConv] = useState([]);
    const [newMsg, setNewMsg] = useState("");
    const [refresh,setRefresh]=useState(false)
    const navigation = useNavigation(); 
    const {receiver}=route.params
    console.log(receiver);
    
    const getData = async () => {
      try {
        const result = await axios.put(`${port}/api/Chat/2`,{reciver:receiver});
        console.log(result.data);
        setConv(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      getData();
    }, [refresh]);

    const renderConv=({item})=>(
        
        <View>
            {(item.user2==2&&item.msg)?<View>
        <View style={{justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"orange", padding:10,width:width*0.5,borderRadius:20,height:height*0.05}}>
            <Text>{item.msg}</Text>

        </View>
<Text   style={{fontSize:12,color:"grey"}}>12:55 pm</Text>
</View>:item.msg?<View style={{marginLeft:width*0.4,justifyContent:"center",alignItems:"flex-start",flexDirection:"column",backgroundColor:"pink", padding:10,width:width*0.5,borderRadius:20,height:height*0.05}}>
            <Text>{item.msg}</Text>

        </View>:"" }
           
        </View> 
        
    )
    useEffect(() => {
        navigation.setOptions({
          title: `${conv[0]?.fname} ${conv[0]?.lname}`,
          headerStyle: {
            backgroundColor: '#ffc368',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={styles.headerRightContainer}>
 <Image style={styles.profileImage} source={{ uri: conv[0]?.image }} />
            </View>
          ),
        });
      }, [navigation, conv,refresh]);

      const handleSend=async()=>{
        console.log("newMsg",newMsg);
        
        const result=await axios.post(`${port}/api/Chat`,{
            msg:newMsg,
            user1:2,
            user2:receiver
        })
        Keyboard.dismiss()  
        setNewMsg("") 
        setRefresh(!refresh)
      }

    return (
        
        <View style={{ flex: 1 }}>
  <FlatList
    style={{ width: width, height: height, padding: 5,display:"flex",flexDirection:"column-reverse"}}
    data={conv}
    renderItem={renderConv}

  />
  <View  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:10}}>
    <TextInput
    style={{backgroundColor:"grey",width:width*0.8}}
      onChangeText={setNewMsg}
      value={newMsg}
    />
    <TouchableOpacity onPress={()=>{handleSend()}}>
    <Image source={send} style={{width:width*0.1,height:height*0.04}}></Image>
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