import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon library

const { width, height } = Dimensions.get("screen");

const Blogs: React.FC = ({ route }: any): React.ReactElement => {
  const [newTitle, setNewTitle] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [authorName, setAuthorName] = useState("John Doe"); // Default author name
  const [authorImage, setAuthorImage] = useState(
    "https://placekitten.com/100/100" // Default author image
  );

  const articles = [
    {
      id: 1,
      title: "Exploring React Native",
      subject: "Learn how to build mobile apps with React Native.",
      author: "Jane Smith",
      image: "https://placekitten.com/100/101",
    },
    {
      id: 2,
      title: "Cooking Tips for Beginners",
      subject: "Discover easy recipes and cooking techniques for beginners.",
      author: "Mike Johnson",
      image: "https://placekitten.com/100/102",
    },
    {
      id: 3,
      title: "Fitness at Home",
      subject: "Stay fit at home with these simple workout routines.",
      author: "Emily Davis",
      image: "https://placekitten.com/100/103",
    },
  ];

  const handleAddBlog = () => {
    // Handle adding a new blog (you can implement this functionality)
    // For now, let's just log the new title, subject, author name, and author image
    console.log("New Title:", newTitle);
    console.log("New Subject:", newSubject);
    console.log("Author Name:", authorName);
    console.log("Author Image:", authorImage);
    // Clear the input fields after adding the blog
    setNewTitle("");
    setNewSubject("");
  };

  const handleLike = (articleId: number) => {
    // Handle the like action for the specified articleId
    console.log(`Liked article with id ${articleId}`);
  };

  const handleDislike = (articleId: number) => {
    // Handle the dislike action for the specified articleId
    console.log(`Disliked article with id ${articleId}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Blogs</Text>
      </View>

      {/* Add Blog Form */}
      <View style={styles.addBlogContainer}>
        {/* Title Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Blog Title"
          value={newTitle}
          onChangeText={(text) => setNewTitle(text)}
        />

        {/* Subject Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter Blog Subject"
          value={newSubject}
          onChangeText={(text) => setNewSubject(text)}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddBlog}>
          <Text style={styles.buttonText}>Add Blog</Text>
        </TouchableOpacity>
      </View>

      {/* Display Existing Blogs (You can map through your blogs data here) */}
      <View style={styles.existingBlogs}>
        {articles.map((article) => (
          <View key={article.id} style={styles.blogCard}>
            <Image
              source={{ uri: article.image }}
              style={styles.authorImage}
              resizeMode="cover"
            />
            <View style={styles.blogInfo}>
              <Text style={styles.authorName}>{article.author}</Text>
              <Text style={styles.blogTitle}>{article.title}</Text>
              <Text style={styles.blogContent}>{article.subject}</Text>

              {/* Like and Dislike Icons */}
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => handleLike(article.id)}
                  style={styles.iconButton}
                >
                  <Icon name="thumbs-up" size={20} color="#4e9d91" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDislike(article.id)}
                  style={styles.iconButton}
                >
                  <Icon name="thumbs-down" size={20} color="#4e9d91" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4e9d91",
  },
  addBlogContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#4e9d91",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#4e9d91",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  existingBlogs: {
    marginBottom: 20,
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
  authorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4e9d91",
    marginBottom: 8,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  blogContent: {
    fontSize: 16,
    color: "#555",
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconButton: {
    marginRight: 10,
  },
});

export default Blogs;
