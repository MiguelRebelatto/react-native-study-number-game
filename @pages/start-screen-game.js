import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../@components/ui/primary-button';
import { useState } from 'react';
import Colors from '../constants/colors';
import Card from '../@components/ui/card';
import InstructionText from '../@components/ui/intruction-text';
import Title from '../@components/ui/title';

function StartScreenGame({ onPickNumber }) {
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

    onPickNumber(numberEntered);
  }

  return (
    <View style={styles.screenContainer}>
      <View>
        <Title>Guess my number</Title>
      </View>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
}

export default StartScreenGame;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 22,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 8
  },
  buttonContainer: {
    flex: 1
  }
});
