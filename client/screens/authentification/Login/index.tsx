import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login_me } from '../../../lib/apiCalls';
import { useDispatch } from 'react-redux'; 
import { setAuthTokenAction } from '../../../lib/redux/auth/authThunks';
import { setUserData } from '../../../lib/redux/user/userSlice';


const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    user_password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    if (!formData.email || !formData.user_password) {
      Alert.alert('Login Error', 'All fields are required');
      setLoading(false);
      return;
    }
      
    try {
        const data = await login_me(formData);
  
        if (data) {
          dispatch(setAuthTokenAction(data.token));
          dispatch(setUserData(data))
  
          setLoading(false);

          Alert.alert('Success', data.message);
          
          setTimeout(() => {
            navigation.navigate('Home' as never); 
          }, 2000);

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
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
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
