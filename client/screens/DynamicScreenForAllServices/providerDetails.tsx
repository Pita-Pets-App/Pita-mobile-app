
import React from 'react';
import { View, Text } from 'react-native';

const ProviderDetails: React.FC = ({ route }: any) => {
  const { provider } = route.params;

  return (
    <View>
      <Text>Email: {provider.email}</Text>
      <Text>Name: {`${provider.fname} ${provider.lname}`}</Text>
      <Text>{provider.provider_description}</Text>
    </View>
  );
};

export default ProviderDetails;
