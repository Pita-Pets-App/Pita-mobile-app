import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

type Review = {
  title: string;
  rating: number;
  body: string;
  date: string;
};

const Star = ({ selected = false, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={selected ? styles.starSelected : styles.star}>★</Text>
  </TouchableOpacity>
);

export default function App() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState('');

  const handleAddReview = () => {
    const newReview: Review = {
      title,
      rating,
      body,
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
    setTitle('');
    setRating(0);
    setBody('');
  };

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <ScrollView style={styles.container}>
      {reviews.map((review, index) => (
        <View key={index} style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>{review.title}</Text>
          <Text style={styles.reviewRating}>{'★'.repeat(review.rating)} stars</Text>
          <Text style={styles.reviewBody}>{review.body}</Text>
          <Text style={styles.reviewDate}>{review.date}</Text>
        </View>
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              selected={star <= rating}
              onPress={() => handleStarPress(star)}
            />
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Body"
          value={body}
          onChangeText={setBody}
          multiline
        />
        <Button title="Add Review" onPress={handleAddReview} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  reviewContainer: {
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    borderRadius: 6,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviewRating: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  reviewBody: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  inputContainer: {
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
    borderRadius: 6,
  },
  starContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 8,
  },
  star: {
    fontSize: 25,
    color: 'gray',
  },
  starSelected: {
    fontSize: 25,
    color: 'orange',
  },
});
