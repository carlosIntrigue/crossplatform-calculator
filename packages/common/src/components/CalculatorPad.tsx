import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorButton from './CalculatorButton';
import console = require('console');

interface props{
  op1:string,
  op2: string,
  binop: string,
  result: string,
  setOp1:Function,
  setOp2: Function,
  setBinop: Function,
  setResult: Function,
  
}

class CalculatorPad extends React.Component<props>{

  setOp = (val:string)=>{
    const{op1,op2, setOp1, setOp2, binop }= this.props;
    if(binop.length===0){
      setOp1(op1+val);
    }else if(op2.length===0){
      setOp2(op2+val);
    }
  }

  clear =()=>{
    const {setOp1, setOp2, setBinop, setResult } =this.props;
    setOp1("");
    setOp2("");
    setBinop("");
    setResult("");
  }
  render(){
    const{op1,op2, setOp1, setOp2 }= this.props;

    

    const a= (val:string)=>{
      const{op1,op2, setOp1, setOp2,binop, result }= this.props;
      if(result.length) return;
      if(binop.length===0){
        let temp = op1+val;
        if(!isNaN(parseInt(temp)))
          setOp1(op1+val);
      }else{
        if(!isNaN(parseInt(op2+val)))
          setOp2(op2+val);
      }
    }
    const b= (val:string)=>{
      const{op1,binop,setBinop , result}= this.props;
      if(result.length) return;

      if(op1.length){
        setBinop(val);
      }
    }
    const d =()=>{
      const{op1, op2, binop, setResult, setBinop}= this.props;
      if(!isNaN(parseInt(op1)) && !isNaN(parseInt(op2))&&(binop!=="")){

        let p1 = parseFloat(op1), p2 = parseFloat(op2);
        let res;
        switch(binop){
          case '+':
            res= p1+p2;
            break;
          case '-':
            res= p1-p2;
            break;

          case '*':
            res=p1*p2;
            break;

          default:
            res=0;
            break;

        }
        setResult(res+'');

      }
    }
      return(<>
      <View style={styles.buttonRow}><CalculatorButton title={"1"} onPress={()=>a("1")}/><CalculatorButton title={"2"} onPress={()=>a("2")}/><CalculatorButton title={"3"} onPress={()=>a("3")}/><CalculatorButton title={"+"} onPress={()=>b("+")}/></View>
      <View style={styles.buttonRow}><CalculatorButton title={"4"} onPress={()=>a("4")}/><CalculatorButton title={"5"} onPress={()=>a("5")}/><CalculatorButton title={"6"} onPress={()=>a("6")}/><CalculatorButton title={"-"} onPress={()=>b("-")}/></View>
      <View style={styles.buttonRow}><CalculatorButton title={"7"} onPress={()=>a("7")}/><CalculatorButton title={"8"} onPress={()=>a("8")}/><CalculatorButton title={"9"} onPress={()=>a("9")}/><CalculatorButton title={"*"} onPress={()=>b("*")}/></View>
      <View style={styles.buttonRow}><CalculatorButton title={"."} onPress={()=>a(".")}/><CalculatorButton title={"0"} onPress={()=>a("0")}/><CalculatorButton title={"C"} onPress={this.clear}/><CalculatorButton title={"="} onPress={()=>d()}/></View>
</>
    );
  }

}
export default CalculatorPad;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", margin: 5, },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", },
});
