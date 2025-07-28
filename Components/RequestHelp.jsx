import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

const RequestHelpScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [helpType, setHelpType] = useState('');
  const [description, setDescription] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const helpTypes = ['Food', 'Health', 'Education', 'Other'];

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !helpType || !description.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    try {
      const helpRequest = {
        name,
        phone,
        helpType,
        description,
        status: 'Pending', // ✅ Status added
        createdAt: new Date().toISOString(),
      };

      const newRef = push(ref(db, 'helpRequests'), helpRequest);
      console.log('Help Request Saved with Key:', newRef.key);

      Alert.alert(
        'Help Request Submitted',
        `Name: ${name}\nPhone: ${phone}\nHelp Type: ${helpType}\nStatus: Pending`
      );

      // Reset fields
      setName('');
      setPhone('');
      setHelpType('');
      setDescription('');
    } catch (error) {
      console.error('Firebase Error:', error.message);
      Alert.alert('Error', 'Failed to submit help request.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Need Assistance?</Text>
        <Text style={styles.subtitle}>Fill out the form below to request help</Text>

        <View style={styles.card}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name *</Text>
            <TextInput 
              style={styles.input} 
              value={name} 
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#94a3b8"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter your phone number"
              placeholderTextColor="#94a3b8"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Type of Help *</Text>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowDropdown(!showDropdown)}
            >
              <Text style={[styles.dropdownText, !helpType && styles.placeholder]}>
                {helpType || 'Select help type'}
              </Text>
            </TouchableOpacity>

            {showDropdown && (
              <View style={styles.dropdownList}>
                {helpTypes.map((type) => (
                  <TouchableOpacity
                    key={type}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setHelpType(type);
                      setShowDropdown(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{type}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Description *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Describe your issue clearly..."
              placeholderTextColor="#94a3b8"
              multiline
              numberOfLines={5}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#e0e7ff',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e3a8a',
    textAlign: 'center',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderColor: '#cbd5e1',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1e293b',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  dropdown: {
    backgroundColor: '#f9fafb',
    borderColor: '#cbd5e1',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#1e293b',
  },
  placeholder: {
    color: '#94a3b8',
  },
  dropdownList: {
    backgroundColor: '#fff',
    borderColor: '#cbd5e1',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 4,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomColor: '#e2e8f0',
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#1e293b',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default RequestHelpScreen;
