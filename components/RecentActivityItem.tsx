import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  type: '+' | '-';
  amount: string;
  label: string;
  date: string;
}

const RecentActivityItem: React.FC<Props> = ({ type, amount, label, date }) => (
  <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
    <View className="flex-row items-center">
      <Text className={`mr-3 ${type === '+' ? 'text-primary' : 'text-secondary'} font-semibold`}>{type} ${amount}</Text>
      <Text className="text-text">{label}</Text>
    </View>
    <Text className="text-muted">{date}</Text>
  </View>
);

export default RecentActivityItem;
