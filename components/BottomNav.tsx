import React from 'react';
import { Text, View } from 'react-native';

const BottomNav = () => (
  <View className="flex-row justify-around items-center py-3 border-t border-gray-200 bg-background">
    <Text className="text-text font-medium">Home</Text>
    <Text className="text-muted">Stats</Text>
    <Text className="text-muted">Settings</Text>
  </View>
);

export default BottomNav;
