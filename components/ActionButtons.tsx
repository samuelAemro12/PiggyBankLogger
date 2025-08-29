import React from 'react';
import { Pressable, Text, View } from 'react-native';

const ActionButtons = () => (
  <View className="flex-row justify-around my-4 px-4">
    <Pressable className="px-4 py-3 rounded-lg bg-primary">
      <Text className="text-white font-semibold">+ Add Deposit</Text>
    </Pressable>
    <Pressable className="px-4 py-3 rounded-lg bg-secondary">
      <Text className="text-white font-semibold">- Add Expense</Text>
    </Pressable>
  </View>
);

export default ActionButtons;
