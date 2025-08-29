import React from 'react';
import { Text, View } from 'react-native';

const Header = () => (
  <View className="flex-row items-center justify-between px-4 py-3 bg-background">
    <Text className="text-lg font-bold text-text">PiggyBank Logger</Text>
    <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
      <Text className="text-white font-bold">P</Text>
    </View>
  </View>
);

export default Header;
