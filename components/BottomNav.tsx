import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BottomNav = () => {
  const [active, setActive] = useState<'Home' | 'Stats' | 'Settings'>('Home');

  const NavItem = ({ label }: { label: 'Home' | 'Stats' | 'Settings' }) => (
    <Pressable
      onPress={() => setActive(label)}
      accessibilityRole="button"
      accessibilityState={{ selected: active === label }}
      className="px-4 py-2"
    >
      <Text className={active === label ? 'text-text font-semibold' : 'text-muted'}>
        {label}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Bottom nav */}
      <View className="absolute bottom-0 left-0 right-0 bg-background border-t border-gray-200">
        <View className="flex-row justify-around items-center py-3">
          <NavItem label="Home" />
          <NavItem label="Stats" />
          <NavItem label="Settings" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomNav;
