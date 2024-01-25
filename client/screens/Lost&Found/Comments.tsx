import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';


const initialComments = [
  { id: '1', animalName: 'Cheetah', commentText: 'This is a speedy comment!', likes: 5, timestamp: '2 hours ago' },
 
];


const Comments = () => {
  const [newComment, setNewComment] = useState('');


  const [comments, setComments] = useState(initialComments);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObject = {
        id: String(comments.length + 1),
        animalName: 'YourAnimal', 
        commentText: newComment,
        likes: 0,
        timestamp: 'Just now',
      };

      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };


  const renderCommentItem = ({ item }) => (
    <View>
        
    <View style={styles.commentContainer}>
      <Image source={require('../../assets/dog.png')} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.animalName}>{item.animalName}</Text>
        <Text style={styles.commentText}>{item.commentText}</Text>
        <View style={styles.commentActions}>
          
        </View>
      </View>
    </View>
    </View>
  );
return (
    <View style={styles.container}>
        <Image source={require('../../assets/dog.png')} ></Image>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderCommentItem}
      />

      <View style={styles.addCommentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a funny comment..."
          value={newComment}
          onChangeText={(text) => setNewComment(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleAddComment}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  animalName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    marginBottom: 10,
  },
  commentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    padding: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  submitButton: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Comments;