import React from 'react';
import { ScrollView, View } from 'react-native';
import ActionButtons from '../components/ActionButtons';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import RecentActivityItem from '../components/RecentActivityItem';
import SummaryCard from '../components/SummaryCard';

const HomeScreen = () => (
  <View className="relative flex-1 bg-background">
    <Header />
    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
      <SummaryCard />
      <ActionButtons />
      <RecentActivityItem type="+" amount="20" label="Salary" date="Aug 27" />
      <RecentActivityItem type="-" amount="5" label="Coffee" date="Aug 26" />
      <RecentActivityItem type="+" amount="10" label="Gift" date="Aug 25" />
    </ScrollView>
    <BottomNav />
  </View>
);

export default HomeScreen;
