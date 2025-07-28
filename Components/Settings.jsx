import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive', 
          onPress: () => {
            Alert.alert('Logged Out', 'You have been successfully logged out.');
            // Navigate to Login page
            navigation.navigate('Login');
          }
        }
      ]
    );
  };

  const viewTerms = () => {
    Alert.alert(
      'Terms & Conditions',
      'By using this app, you agree to our terms and conditions. This includes following all applicable laws and regulations, respecting other users, and using the app responsibly.',
      [{ text: 'OK' }]
    );
  };

  const viewPrivacy = () => {
    Alert.alert(
      'Privacy Policy',
      'We respect your privacy. Your personal information is collected and used only for the purposes stated in this policy. We do not share your data with third parties without your consent.',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        <TouchableOpacity style={styles.button} onPress={viewTerms}>
          <Text style={styles.buttonText}>View Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={viewPrivacy}>
          <Text style={styles.buttonText}>View Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

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
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingsScreen; 