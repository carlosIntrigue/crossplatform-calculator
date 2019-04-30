import React from 'react';
interface props {
    radius: number;
    backgroundColor: string;
    onPress: Function;
    color: string;
    title: string;
}
export default class CalcButton extends React.Component<props> {
    static defaultProps: {
        onPress: () => void;
        title: string;
        color: string;
        backgroundColor: string;
        radius: number;
        style: {};
    };
    render(): JSX.Element;
}
export {};
