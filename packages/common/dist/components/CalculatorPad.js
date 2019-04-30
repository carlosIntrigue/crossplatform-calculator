"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CalculatorButton_1 = __importDefault(require("./CalculatorButton"));
var CalculatorPad = /** @class */ (function (_super) {
    __extends(CalculatorPad, _super);
    function CalculatorPad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setOp = function (val) {
            var _a = _this.props, op1 = _a.op1, op2 = _a.op2, setOp1 = _a.setOp1, setOp2 = _a.setOp2, binop = _a.binop;
            if (binop.length === 0) {
                setOp1(op1 + val);
            }
            else if (op2.length === 0) {
                setOp2(op2 + val);
            }
        };
        _this.clear = function () {
            var _a = _this.props, setOp1 = _a.setOp1, setOp2 = _a.setOp2, setBinop = _a.setBinop, setResult = _a.setResult;
            setOp1("");
            setOp2("");
            setBinop("");
            setResult("");
        };
        return _this;
    }
    CalculatorPad.prototype.render = function () {
        var _this = this;
        var _a = this.props, op1 = _a.op1, op2 = _a.op2, setOp1 = _a.setOp1, setOp2 = _a.setOp2;
        var a = function (val) {
            var _a = _this.props, op1 = _a.op1, op2 = _a.op2, setOp1 = _a.setOp1, setOp2 = _a.setOp2, binop = _a.binop, result = _a.result;
            if (result.length)
                return;
            if (binop.length === 0) {
                var temp = op1 + val;
                if (!isNaN(parseInt(temp)))
                    setOp1(op1 + val);
            }
            else {
                if (!isNaN(parseInt(op2 + val)))
                    setOp2(op2 + val);
            }
        };
        var b = function (val) {
            var _a = _this.props, op1 = _a.op1, binop = _a.binop, setBinop = _a.setBinop, result = _a.result;
            if (result.length)
                return;
            if (op1.length) {
                setBinop(val);
            }
        };
        var d = function () {
            var _a = _this.props, op1 = _a.op1, op2 = _a.op2, binop = _a.binop, setResult = _a.setResult, setBinop = _a.setBinop;
            if (!isNaN(parseInt(op1)) && !isNaN(parseInt(op2)) && (binop !== "")) {
                var p1 = parseFloat(op1), p2 = parseFloat(op2);
                var res = void 0;
                switch (binop) {
                    case '+':
                        res = p1 + p2;
                        break;
                    case '-':
                        res = p1 - p2;
                        break;
                    case '*':
                        res = p1 * p2;
                        break;
                    default:
                        res = 0;
                        break;
                }
                setResult(res + '');
            }
        };
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.View, { style: styles.buttonRow },
                react_1.default.createElement(CalculatorButton_1.default, { title: "1", onPress: function () { return a("1"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "2", onPress: function () { return a("2"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "3", onPress: function () { return a("3"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "+", onPress: function () { return b("+"); } })),
            react_1.default.createElement(react_native_1.View, { style: styles.buttonRow },
                react_1.default.createElement(CalculatorButton_1.default, { title: "4", onPress: function () { return a("4"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "5", onPress: function () { return a("5"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "6", onPress: function () { return a("6"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "-", onPress: function () { return b("-"); } })),
            react_1.default.createElement(react_native_1.View, { style: styles.buttonRow },
                react_1.default.createElement(CalculatorButton_1.default, { title: "7", onPress: function () { return a("7"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "8", onPress: function () { return a("8"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "9", onPress: function () { return a("9"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "*", onPress: function () { return b("*"); } })),
            react_1.default.createElement(react_native_1.View, { style: styles.buttonRow },
                react_1.default.createElement(CalculatorButton_1.default, { title: ".", onPress: function () { return a("."); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "0", onPress: function () { return a("0"); } }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "C", onPress: this.clear }),
                react_1.default.createElement(CalculatorButton_1.default, { title: "=", onPress: function () { return d(); } }))));
    };
    return CalculatorPad;
}(react_1.default.Component));
exports.default = CalculatorPad;
var styles = react_native_1.StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center", margin: 5, },
    buttonRow: { flexDirection: "row", justifyContent: "space-between", },
});
