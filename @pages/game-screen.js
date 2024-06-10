import { Alert, StyleSheet, View, FlatList, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Card from '../@components/ui/card';
import Title from '../@components/ui/title';
import InstructionText from '../@components/ui/intruction-text';
import PrimaryButton from '../@components/ui/primary-button';
import NumberContainer from '../@components/game/number-container';
import GuessLogItem from '../@components/game/guess-log-item';

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
    const [currentGuess, setCurrentGuess] = useState(intialGuess);
    const [guessRounds, setGuessRounds] = useState([intialGuess]);

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    // execute on init component
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    let guessRoundsListLenght = guessRounds.length;

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
        setGuessRounds(prevGuessRounds => [newRandom, ...prevGuessRounds]);
    }

    const marginTop = width > 500 ? 30 : 60;

    let content = <>
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
    </>

    if (width > 500) {
        content = <>
            <Title>Opponent's Guess</Title>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </>
    }

    return (
        <View style={[styles.screenContainer, { marginTop: marginTop }]}>
            {content}
            <View style={styles.roundsContainer}>
                {/* {guessRounds.map(item => (<Text key={item}>{item}</Text>))} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumer={guessRoundsListLenght - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
        marginTop: 60,
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
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    roundsContainer: {
        flex: 1,
        padding: 16
    }
});
