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
var CalcButton = /** @class */ (function (_super) {
    __extends(CalcButton, _super);
    function CalcButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalcButton.prototype.render = function () {
        var _this = this;
        var r = this.props.radius;
        var w = this.props.radius * 2;
        var h = this.props.radius * 2;
        var bc = this.props.backgroundColor;
        return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: function (e) { return _this.props.onPress(); }, style: [styles.container, { width: w, height: h, borderRadius: r, backgroundColor: bc }] },
            react_1.default.createElement(react_native_1.Text, { style: [styles.text, { color: this.props.color }] }, this.props.title)));
    };
    CalcButton.defaultProps = {
        onPress: function () { },
        title: "",
        color: "white",
        backgroundColor: "black",
        radius: 40,
        style: {},
    };
    return CalcButton;
}(react_1.default.Component));
exports.default = CalcButton;
var styles = react_native_1.StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center", margin: 5 },
    text: { fontSize: 30, fontWeight: "bold", },
});
