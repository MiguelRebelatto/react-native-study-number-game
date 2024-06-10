import { Alert, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Card from '../@components/ui/card';
import Title from '../@components/ui/title';
import InstructionText from '../@components/ui/intruction-text';
import PrimaryButton from '../@components/ui/primary-button';
import NumberContainer from '../@components/game/number-container';

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

    // execute on init component
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

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
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
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
