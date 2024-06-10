import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Title from '../@components/ui/title';
import Colors from '../constants/colors';
import PrimaryButton from '../@components/ui/primary-button';


function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.screenContainer}>
                <Title>Game over!!!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image source={require('../assets/images/success.png')} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
                    </Text>
                </View>
                <PrimaryButton onPress={onStartNewGame}>Start new Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    screenContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
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
