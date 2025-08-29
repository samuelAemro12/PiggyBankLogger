import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  type: '+' | '-';
  amount: string;
  label: string;
  date: string;
}

const RecentActivityItem: React.FC<Props> = ({ type, amount, label, date }) => (
  <View>
    <Text>{`${type} $${amount}   ${label}   ${date}`}</Text>
  </View>
);

export default RecentActivityItem;
