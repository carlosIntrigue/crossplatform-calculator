"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var CalculatorDisplay_1 = __importDefault(require("./components/CalculatorDisplay"));
var CalculatorPad_1 = __importDefault(require("./components/CalculatorPad"));
var instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
exports.App = function () {
    var _a = react_1.useState(""), op1 = _a[0], setOp1 = _a[1];
    var _b = react_1.useState(""), op2 = _b[0], setOp2 = _b[1];
    var _c = react_1.useState(""), binop = _c[0], setBinop = _c[1];
    var _d = react_1.useState(""), result = _d[0], setResult = _d[1];
    var props = {
        op1: op1, setOp1: setOp1, op2: op2, setOp2: setOp2, binop: binop, setBinop: setBinop, result: result, setResult: setResult
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.welcome }, " CROSS-PLATFORM REACT NATIVE CALCULATOR"),
        react_1.default.createElement(CalculatorDisplay_1.default, { op1: op1, op2: op2, binop: binop, result: result }),
        react_1.default.createElement(CalculatorPad_1.default, __assign({}, props))));
};
var styles = react_native_1.StyleSheet.create({
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
