import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({ roundNumer, guess }) {

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>#{roundNumer}</Text>
            <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: Colors.primary800,
        padding: 12,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.accent500,
        width: '100%',
        borderRadius: 40,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        // fontFamily: 'opens-sans',
        color: Colors.accent100,
        textAlign: 'center',
    }
});
