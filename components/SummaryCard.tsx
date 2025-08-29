import React from 'react';
import { Text, View } from 'react-native';

const SummaryCard = () => (
  <View className="m-4 p-4 rounded-lg bg-white shadow-md">
    <Text className="text-sm text-muted">Total Saved</Text>
  <Text className="text-2xl font-bold text-text mt-1">ETB 120.00</Text>
    <Text className="text-sm text-muted mt-2">This Month</Text>
  <Text className="text-lg font-semibold text-secondary">ETB 40.00</Text>
  </View>
);

export default SummaryCard;
