import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../@components/ui/title';
import NumberContainer from '../@components/game/number-container';
import PrimaryButton from '../@components/ui/primary-button';
import { useState, useEffect } from 'react';
import Colors from '../constants/colors';

function generateRandomBetween(min, max, exclude) {
    const random = Math.floor(Math.random() * (max - min)) + min;

    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return random;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const intialGuess = generateRandomBetween(1, 100, userNumber)
    console.log("intialGuess", intialGuess);
    const [currentGuess, setCurrentGuess] = useState(intialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])
    /* direction: 'lower' | 'greater' */
    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("I know You are lying", "Go again!", [{ text: "okay", style: 'cancel' }])
            return;

        }
        if (direction === 'lower') {
            maxBoundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandom = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandom);
    }

    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.title}>Higher or lower?</Text>
                <View>
                    <PrimaryButton title="+" onPress={nextGuessHandler.bind(this, 'lower')} />
                    <PrimaryButton title="-" onPress={nextGuessHandler.bind(this, 'greater')} />
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 100
    },
    title: {
        fontSize: 18,
        color: Colors.accent100
    },

});
