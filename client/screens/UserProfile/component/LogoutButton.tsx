import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../../lib/redux/auth/authSlice';
import { clearUser } from '../../../lib/redux/user/userSlice';

const useLogout = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      dispatch(clearToken());
      dispatch(clearUser());
      navigation.navigate('Login' as never);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return handleLogout;
};

export default LogoutButton;
