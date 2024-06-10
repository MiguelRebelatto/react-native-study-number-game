import { Alert, StyleSheet, View } from 'react-native';
import Title from '../@components/ui/title';
import NumberContainer from '../@components/game/number-container';
import PrimaryButton from '../@components/ui/primary-button';
import { useState, useEffect } from 'react';
import Card from '../@components/ui/card';
import InstructionText from '../@components/ui/intruction-text';

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
        <View style={styles.screenContainer}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton title="+" onPress={nextGuessHandler.bind(this, 'lower')} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton title="-" onPress={nextGuessHandler.bind(this, 'greater')} />
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 8
    },
    buttonContainer: {
        flex: 1
    }
});
