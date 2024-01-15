import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// TypeScript interface for user review data
interface ReviewData {
 userName: string;
 review: string;
 rating: number;
 
}
const reviewData: ReviewData[] = [
    {
      userName: 'John Doe',
      review: 'hhiugguyguy',
      rating: 5,
    },
    {
      userName: 'Jane Doe',
      review: 'uufdtslgi',
      rating: 4,
    },
 ];
// Review component that takes user review data as a prop
const Review: React.FC<ReviewData> = ({ userName, review, rating }) => {
 return (
    <View style={styles.reviewContainer}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.review}>{review}</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            key={i}
            source={require('../../../assets/vector60.png')}
            style={[styles.star, rating >= i ? styles.activeStar : styles.inactiveStar]}
          />
        ))}
      </View>
    </View>
 );
};

const App = () => {
 

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews</Text>
      {reviewData.map((data, index) => (
        <Review key={index} {...data} />
      ))}
      <TouchableOpacity style={styles.postReviewButton}>
        <Text style={styles.postReviewText}>Post a Review</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
 },
 title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
 },
 reviewContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
 },
 userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
 },
 review: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
 },
 ratingContainer: {
    flexDirection: 'row',
 },
 star: {
    width: 20,
    height: 20,
    tintColor: '#fcdb00',
 },
 activeStar: {
    tintColor: '#f1c40f',
 },
 inactiveStar: {
    tintColor: '#ddd',
 },
 postReviewButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
 },
 postReviewText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
 },
});

export default App;