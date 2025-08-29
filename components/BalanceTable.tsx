import React from 'react';
import { View, Text } from 'react-native';

const BalanceTable = () => (
  <View className="mx-4 my-2 p-4 rounded-lg bg-white shadow flex-row justify-between items-center">
    <View className="flex-1 items-center">
      <Text className="text-muted text-xs">Income</Text>
      <Text className="text-primary font-bold text-lg">ETB 70.00</Text>
    </View>
    <View className="flex-1 items-center">
      <Text className="text-muted text-xs">Expense</Text>
      <Text className="text-secondary font-bold text-lg">ETB 15.00</Text>
    </View>
    <View className="flex-1 items-center">
      <Text className="text-muted text-xs">Balance</Text>
      <Text className="text-accent font-bold text-lg">ETB 55.00</Text>
    </View>
  </View>
);

export default BalanceTable;
