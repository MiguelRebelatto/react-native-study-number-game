import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../@components/primary-button';

function StartScreenGame() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Reset'></PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Confirm'></PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartScreenGame;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#42063c',
    borderRadius: 8,
    elevation: 4, // android shadow
    shadowColor: 'black', // ios shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 22,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1
  }
});
