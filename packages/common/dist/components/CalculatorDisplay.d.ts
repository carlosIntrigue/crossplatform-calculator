import React from 'react';
interface props {
    op1: string;
    op2: string;
    binop: string;
    result: string;
}
export default class CalculatorDisplay extends React.Component<props> {
    render(): JSX.Element;
}
export {};
