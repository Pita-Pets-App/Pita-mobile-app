import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProviderCardProps {
  email: string;
  fname: string;
  lname: string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ email, fname, lname }) => {
  const fullName = `${fname} ${lname}`;

  return (
    <View style={styles.card}>
      <Text style={styles.serviceName}>{email}</Text>
      <Text style={styles.fullName}>{fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  fullName: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProviderCard;
