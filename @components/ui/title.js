import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {

    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'opens-sans-bold',
        fontSize: 24,
        color: Colors.accent100,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent100,
        padding: 12
    }
});
