import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login_me } from '../../../lib/apiCalls';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    user_Email: '',
    user_password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    if (!formData.user_Email || !formData.user_password) {
      Alert.alert('Login Error', 'All fields are required');
      setLoading(false);
      return;
    }
      
    try {
        const data = await login_me(formData);
  
        if (data.success) {
          
          await AsyncStorage.setItem('authToken', data.token);
  
          setLoading(false);
          Alert.alert('Success', data.message);
          // setTimeout(() => {
        //     navigation.navigate('Home'); to change
        //   }, 2000);
        } else {
          setLoading(false);
          Alert.alert('Error', data.message);
        }
      } catch (error) {
        setLoading(false);
        Alert.alert('Error', 'An unexpected error occurred');
      }
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.user_Email}
        onChangeText={(text) => setFormData({ ...formData, user_Email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.user_password}
        onChangeText={(text) => setFormData({ ...formData, user_password: text })}
      />
      <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleSubmit} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Login;
