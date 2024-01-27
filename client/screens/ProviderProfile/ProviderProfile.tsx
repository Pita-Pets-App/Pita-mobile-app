import React,{useState,useEffect} from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"
import Icon from "react-native-vector-icons/FontAwesome"; 
import user from '../../assets/user.jpg'
import Navbar from "../Home/Components/Navbar";
import ProviderInfo from "./component/ProviderInfo";
import axios from "axios";
import { port } from "../../port";
import { useSelector } from 'react-redux';
import adpimg from '../../assets/adpimg.png'
import { useNavigation } from "@react-navigation/native";
interface UserInfo {
  image:string;

}
interface UserInfoProps {
  image?: string;
  fname?: string;
  lname?: string;
  email?: string;
}

const { width, height } = Dimensions.get("screen");
const ProviderProfile: React.FC = () => {
//   const userData = useSelector((state: RootState) => state.user?.userData);
//   const authData = useSelector((state: RootState) => state.auth);
//   console.log("user from user profile",userData);
//   console.log("auth from userprofule",authData);
const articles = [
  {
    id: 1,
    title: " React Native",
    subject: "Learn how to build mobile apps with React Native.",
    author: "Jane Smith",
    image: "https://placekitten.com/100/101",
    articleImage: "https://placekitten.com/200/200", // Additional photo for the article
  },
  {
    id: 2,
    title: "Cooking Tips ",
    subject: "Discover easy recipes and cooking techniques for beginners.",
    author: "Mike Johnson",
    image: "https://placekitten.com/100/102",
    articleImage: "https://placekitten.com/201/201",
  },
  {
    id: 3,
    title: "Fitness at Home",
    subject: "Stay fit at home with these simple workout routines.",
    author: "Emily Davis",
    image: "https://placekitten.com/100/103",
    articleImage: "https://placekitten.com/202/202",
  },
];
const navigation=useNavigation()
const handleLike = (articleId: number) => {
  console.log(`Liked article with id ${articleId}`);
};

const handleDislike = (articleId: number) => {
  console.log(`Disliked article with id ${articleId}`);
};
  
  return (
    <View style={styles.container}>
    <ScrollView>
        <View><Image style={{width:width*1,height:height*0.35}} source={user}></Image></View>
      <View style={styles.UsersProfile}>
        <ProviderInfo/>
        <View style={{backgroundColor:"#fff",margin:15,borderRadius:20}}>
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignContent:"center",marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:"#4e9d91"}}>My Events</Text>
            <View style={{borderColor:"#4e9d91",borderWidth:1.5,paddingHorizontal:7,paddingVertical:3.5,borderRadius:20}}>
            <Text style={{fontSize:16,color:"#4e9d91"}}>See all</Text>
            </View>
            </View>
            <ScrollView horizontal> 
            <View style={styles.containerEv}>
      <TouchableOpacity onPress={()=>{navigation.navigate("ProviderOneEvent"as never)}}>
      {/* {{uri:e.event_images[0]}} */}
<Image style={styles.image} source={adpimg} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <Image
                source={{uri:"https://placekitten.com/100/102"}}
                style={styles.profileIcon}
              ></Image>
              {/* {e.owner.fname} */}
              <Text style={styles.createdBy}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerEv}>
      <TouchableOpacity>
      {/* {{uri:e.event_images[0]}} */}
<Image style={styles.image} source={adpimg} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <FontAwesome
                name="user-circle"
                size={24}
                color="#fff"
                style={styles.profileIcon}
              />
              {/* {e.owner.fname} */}
              <Text style={styles.createdBy}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerEv}>
      <TouchableOpacity>
      {/* {{uri:e.event_images[0]}} */}
<Image style={styles.image} source={adpimg} />
          <View style={styles.overlay}>
            <View style={styles.createdByContainer}>
              <FontAwesome
                name="user-circle"
                size={24}
                color="#fff"
                style={styles.profileIcon}
              />
              {/* {e.owner.fname} */}
              <Text style={styles.createdBy}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
               
            </View>
            <View style={{margin:15}}>
            <Text style={{marginLeft:20,fontSize:20,fontWeight:"bold",marginBottom:20,marginTop:10,color:"#4e9d91"}}>My Blogs</Text>
            {articles.map((article) => (
          <View key={article.id} style={styles.blogCard}>
            <Image
              source={{ uri: article.image }}
              style={styles.authorImage}
              resizeMode="cover"
            />
            <View style={styles.blogInfo}>
              <View style={styles.titleContainer}>
                <Text style={styles.authorName}>{article.author}</Text>
                <Text style={styles.blogTitle}>{article.title}</Text>
              </View>
              <Text style={styles.blogContent}>{article.subject}</Text>
              <Image
                source={{ uri: article.articleImage }}
                style={styles.articleImage}
                resizeMode="cover"
              />
              <View style={styles.iconContainer}>
              </View>
            </View>
          </View>
        ))}
      </View>
      </View>
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerEv: {
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 15,
        height:height*0.2,
        width:width*0.65,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderWidth: 2,
        borderColor: "black",
      },
  UsersProfile: {
    display: "flex",
  },
  image: {
    height:height*0.2,
    width:width*0.65,
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
  blogCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    flexDirection: "row",
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  blogInfo: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4e9d91",
    marginRight: 8,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  blogContent: {
    fontSize: 16,
    color: "#555",
  },
  articleImage: {
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconButton: {
    marginRight: 10,
  },
});
export default ProviderProfile;
