import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const appointments = [
  { id: 1, title: 'Doctor Appointment', date: '2024-07-01 10:00', status: 'Pending' },
  { id: 2, title: 'Dentist Appointment', date: '2024-07-03 14:30', status: 'Approved' },
];

const helpRequests = [
  { id: 1, type: 'Food', date: '2024-06-28 09:00', status: 'Approved' },
  { id: 2, type: 'Education', date: '2024-06-29 16:00', status: 'Rejected' },
  { id: 3, type: 'Health', date: '2024-07-02 11:00', status: 'Pending' },
];

const statusColors = {
  Pending: '#ff9800',
  Approved: '#4caf50',
  Rejected: '#f44336',
};

const MyRequestsScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>My Requests</Text>

    <Text style={styles.sectionTitle}>Appointments</Text>
    {appointments.length === 0 ? (
      <Text style={styles.emptyText}>No appointments found.</Text>
    ) : (
      appointments.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
          <Text style={[styles.status, { color: statusColors[item.status] }]}>{item.status}</Text>
        </View>
      ))
    )}

    <Text style={styles.sectionTitle}>Help Requests</Text>
    {helpRequests.length === 0 ? (
      <Text style={styles.emptyText}>No help requests found.</Text>
    ) : (
      helpRequests.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.type} Help</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
          <Text style={[styles.status, { color: statusColors[item.status] }]}>{item.status}</Text>
        </View>
      ))
    )}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb',
    marginTop: 15,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  status: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  },
  emptyText: {
    color: '#888',
    fontStyle: 'italic',
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default MyRequestsScreen; 