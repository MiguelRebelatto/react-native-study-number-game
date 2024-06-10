import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../@components/ui/title';


function GameOverScreen({ userNumber }) {

    return (
        <View style={styles.container}>
            <Title>Game over!!!</Title>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    title: {
        flex: 1,
    },

});
