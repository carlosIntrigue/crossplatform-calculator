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
var CalculatorDisplay = /** @class */ (function (_super) {
    __extends(CalculatorDisplay, _super);
    function CalculatorDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorDisplay.prototype.render = function () {
        var _a = this.props, op1 = _a.op1, op2 = _a.op2, binop = _a.binop, result = _a.result;
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: styles.display },
                op1,
                binop,
                op2,
                " ",
                result.length ? "=" + result : "",
                " ")));
    };
    return CalculatorDisplay;
}(react_1.default.Component));
exports.default = CalculatorDisplay;
var styles = react_native_1.StyleSheet.create({
    display: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
