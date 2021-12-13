import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fateha from './pages/Fateha';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Fateha"
          component={Fateha}
          options={{ title: 'Fateha' }}
        />
        <Stack.Screen name="Baqara1" component={Baqara1} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },fatehaHeader:{

  },
  fatehaMain:{
    alignItems:'center',
    justifyContent:"center",
    fontWeight:"bold",
    fontSize:24
  },
});
