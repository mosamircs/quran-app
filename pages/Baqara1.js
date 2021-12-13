import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Baqara() {
  return (
    <View style={styles.container}>
      <Text style={styles.baqara1Main}>
        سورة البقرة
      </Text>
      <Text style={styles.baqara1Main}>
      الم ﴿1﴾ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ ﴿2﴾ 
      الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ﴿3﴾
       وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ﴿4﴾ 
      أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ ﴿5﴾
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
  baqara1Main: {
    alignItems: 'center',
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 24
  },
});
