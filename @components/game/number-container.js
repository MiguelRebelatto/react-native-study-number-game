import { Text, StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: deviceWidth < 380 ? 24 : 36,
        // fontFamily: 'opens-sans-bold',
        color: Colors.accent500,
        textAlign: 'center',
    }
});
