import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface props{
  op1:string,
  op2:string,
  binop:string,
  result:string
}
export default class CalculatorDisplay extends React.Component<props>{
  render(){
    const {op1, op2, binop, result} = this.props;
    return(
      <View><Text style={styles.display}>{op1}{binop}{op2} {result.length?"="+result:""} </Text></View>
    );
  }

}

const styles = StyleSheet.create({
  display: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
