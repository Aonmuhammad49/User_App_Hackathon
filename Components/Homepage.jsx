import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const recentActivities = [
    { id: 1, title: 'Food Help Request', status: 'Approved', date: '2 days ago' },
    { id: 2, title: 'Doctor Appointment', status: 'Pending', date: '1 day ago' },
  ];

  const renderActionCard = (title, subtitle, navigateTo) => (
    <TouchableOpacity
      style={styles.actionCard}
      onPress={() => navigation.navigate(navigateTo)}
    >
      <View style={styles.actionContent}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderRecentCard = (activity) => (
    <View key={activity.id} style={styles.recentCard}>
      <Text style={styles.recentTitle}>{activity.title}</Text>
      <Text style={styles.recentStatus}>Status: {activity.status}</Text>
      <Text style={styles.recentDate}>{activity.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome back</Text>
            <Text style={styles.subText}>We're here to support you</Text>
          </View>

          <View style={styles.actionsContainer}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            {renderActionCard(
              'Book Appointment',
              'Schedule a new appointment',
              'BookAppointment'
            )}
            {renderActionCard(
              'Request Help',
              'Get assistance when needed',
              'RequestHelp'
            )}
          </View>

          <View style={styles.recentContainer}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            {recentActivities.map(renderRecentCard)}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
  mainContainer: { flex: 1 },
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 20 },

  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#2563eb',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#e0e7ff',
  },

  actionsContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 18,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  actionContent: {
    flexDirection: 'column',
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#555',
  },

  recentContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  recentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  recentStatus: {
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 4,
  },
  recentDate: {
    fontSize: 13,
    color: '#777',
  },
});

export default HomeScreen;
