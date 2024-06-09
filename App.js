import { StyleSheet, ImageBackground } from 'react-native';
import StartScreenGame from './@pages/start-screen-game';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={["#ddb52f", "#4e0329"]} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.appContainer}
        imageStyle={styles.imageBackground}
      >
        <StartScreenGame></StartScreenGame>
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
