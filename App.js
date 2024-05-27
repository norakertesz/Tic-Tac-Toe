import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Game from './src/Game';

export default function App() {
  return (
    <ImageBackground 
      source={require('./src/img/background.jpg')}
      style={styles.container}
      imageStyle={{ opacity: 0.2 }}
    >
      <View style={styles.overlay}>
        <Game />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
