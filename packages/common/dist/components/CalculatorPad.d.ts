import React from 'react';
interface props {
    op1: string;
    op2: string;
    binop: string;
    result: string;
    setOp1: Function;
    setOp2: Function;
    setBinop: Function;
    setResult: Function;
}
declare class CalculatorPad extends React.Component<props> {
    setOp: (val: string) => void;
    clear: () => void;
    render(): JSX.Element;
}
export default CalculatorPad;
