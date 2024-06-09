import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../@components/primary-button';
import { useState } from 'react';

function StartScreenGame() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    console.log("numberInputHandler!");
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const numberEntered = parseInt(enteredNumber);

    if (isNaN(numberEntered) || numberEntered <= 0 || numberEntered > 99) {
      Alert.alert('invalid', 'invalid', [{ text: 'ok', style: 'destructive', onPress: resetInputHandler }])
      console.log("invalid!");
      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Reset' onPress={resetInputHandler}></PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Confirm' onPress={confirmInputHandler}></PrimaryButton>
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
