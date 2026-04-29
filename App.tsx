import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [inches, setInches] = useState('');
  const [cm, setCm] = useState('');

  const handleInchesChange = (value: string) => {
    setInches(value);
    if (value) {
      const cmValue = (parseFloat(value) * 2.54).toFixed(2);
      setCm(cmValue);
    } else {
      setCm('');
    }
  };

  const handleCmChange = (value: string) => {
    setCm(value);
    if (value) {
      const inchesValue = (parseFloat(value) / 2.54).toFixed(2);
      setInches(inchesValue);
    } else {
      setInches('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.card}>
        <Text style={styles.title}>📏 Conversor de Polegadas</Text>
        <Text style={styles.subtitle}>Monitor em Polegadas</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Polegadas (in)</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite as polegadas"
            keyboardType="decimal-pad"
            value={inches}
            onChangeText={handleInchesChange}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.separator}>
          <Text style={styles.separatorText}>⇅</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Centímetros (cm)</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite os centímetros"
            keyboardType="decimal-pad"
            value={cm}
            onChangeText={handleCmChange}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.infoText}>💡 Dica: Meça a diagonal da sua tela</Text>
          <Text style={styles.infoText}>1 polegada = 2.54 cm</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00d4ff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 25,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#00d4ff',
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0f3460',
    borderColor: '#00d4ff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#fff',
  },
  separator: {
    alignItems: 'center',
    marginVertical: 15,
  },
  separatorText: {
    fontSize: 24,
    color: '#00d4ff',
  },
  info: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#0f3460',
    borderRadius: 10,
    borderLeftColor: '#00d4ff',
    borderLeftWidth: 4,
  },
  infoText: {
    color: '#00d4ff',
    fontSize: 13,
    marginBottom: 5,
    lineHeight: 18,
  },
});
