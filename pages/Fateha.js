import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Fateha() {
  return (
    <View style={styles.container}>
      <Text style={styles.fatehaMain}>
        سورة الفاتحة
      </Text>
      <Text style={styles.fatehaMain}>
        بِسۡمِ ٱللَّه ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (1)
        ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ (2)
        ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ (3)
        مَٰلِكِ يَوۡمِ ٱلدِّينِ (4)
        إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ (5)
        ٱهۡدِنَا
        ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ (6)
        صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ
        عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ
        وَلَا ٱلضَّآلِّينَ (7)
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fatehaMain: {
    alignItems: 'center',
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 24
  },
});
