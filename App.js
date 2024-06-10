import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreenGame from './@pages/start-screen-game';
import GameScreen from './@pages/game-screen';
import Colors from './constants/colors';
import GameOverScreen from './@pages/game-over-screen';

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [gameoIsOver, setGameoIsOver] = useState(true);

  function numberHandler(pickedNumber) {
    setUseNumber(pickedNumber);
    setGameoIsOver(false);
  }

  let screen = <StartScreenGame onPickNumber={numberHandler} />

  if (useNumber) {
    screen = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler} />
  }

  if (gameoIsOver && useNumber) {
    screen = <GameOverScreen userNumber={useNumber} />
  }

  function gameOverHandler() {
    setGameoIsOver(true);
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.appContainer}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.appContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  imageBackground: {
    opacity: 0.15
  }
});
