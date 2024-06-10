import { StyleSheet, TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../@components/ui/primary-button';
import { useState } from 'react';
import Colors from '../constants/colors';
import Card from '../@components/ui/card';
import InstructionText from '../@components/ui/intruction-text';
import Title from '../@components/ui/title';

function StartScreenGame({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const { height, width } = useWindowDimensions();

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

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='padding'>
        <View style={[styles.screenContainer, { marginTop: marginTop }]}>
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
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartScreenGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
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
