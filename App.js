import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import { useFonts } from 'expo-font';

import StartScreenGame from './@pages/start-screen-game';
import GameScreen from './@pages/game-screen';
import Colors from './constants/colors';
import GameOverScreen from './@pages/game-over-screen';
// import AppLoading from 'expo-app-loading';

export default function App() {
  const [useNumber, setUseNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // })

  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  function numberHandler(pickedNumber) {
    setUseNumber(pickedNumber);
    setGameIsOver(false);
  }

  function startNewGameHandler() {
    console.log("startNewGameHandler");
    setUseNumber(null);
    setGuessRounds(0);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  let screen = <StartScreenGame onPickNumber={numberHandler} />

  if (useNumber) {
    screen = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && useNumber) {
    screen = <GameOverScreen userNumber={useNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
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
