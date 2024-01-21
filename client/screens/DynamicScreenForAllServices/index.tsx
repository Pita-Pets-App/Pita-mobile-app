import React, { useEffect, useState } from 'react';
import { ScrollView, View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { getProvidersByServicesId } from '../../lib/apiCalls';
import { useSelector } from 'react-redux';
import ProviderCard from './ProviderCard';

type Provider = {
  email: string;
  fname: string;
  lname: string;
};

const DynamicScreenAllServices: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, { serviceId: number }>, string>>();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const token = useSelector((state: RootState) => state.auth.authToken);
  const serviceId = route.params?.serviceId;

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await getProvidersByServicesId(serviceId, token);
        setProviders(response);
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProviders();
  }, [serviceId, token]);

  const handleCardPress = (provider: Provider) => {
    navigation.navigate('ProviderDetails' as never, { provider });
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.allPages}>
          {providers.map((provider, index) => (
            <TouchableOpacity key={index} onPress={() => handleCardPress(provider)}>
              <ProviderCard
                email={provider.email}
                fname={provider.fname}
                lname={provider.lname}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  allPages: {
    backgroundColor: '#ffc368',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    gap: 20,
  },
});

export default DynamicScreenAllServices;
