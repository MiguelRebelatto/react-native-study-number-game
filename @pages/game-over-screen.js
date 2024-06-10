import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../@components/ui/title';
import Colors from '../constants/colors';
import PrimaryButton from '../@components/ui/primary-button';


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {

    return (
        <View style={styles.screenContainer}>
            <Title>Game over!!!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
                </Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        // fontFamily: 'opens-sans',
        fontSize: 24,
        color: Colors.accent100,
        textAlign: 'center',
        marginBottom: 24
    },
    highlightText: {
        // fontFamily: 'opens-sans-bold',
        fontWeight: "bold",
        color: Colors.primary500
    }
});
