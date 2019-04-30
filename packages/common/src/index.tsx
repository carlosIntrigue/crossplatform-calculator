/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CalculatorDisplay from './components/CalculatorDisplay';
import CalculatorPad from './components/CalculatorPad';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
    
});

interface Props {}

export const App = ()=>{
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [binop, setBinop] = useState("");
  const [result, setResult] = useState("");

  const props ={
    op1, setOp1, op2, setOp2, binop, setBinop, result, setResult
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> CROSS-PLATFORM REACT NATIVE CALCULATOR</Text>
      <CalculatorDisplay op1={op1} op2={op2} binop={binop} result={result}/>
      <CalculatorPad {...props}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});