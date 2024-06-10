import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        // fontFamily: 'opens-sans-bold',
        color: Colors.accent500,
        textAlign: 'center',
    }
});
