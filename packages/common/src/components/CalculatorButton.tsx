import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface props {
  radius:number,
  backgroundColor:string,
  onPress:Function,
  color:string,
  title:string

}

export default class CalcButton extends React.Component<props>  {

  static defaultProps = {
    onPress: function() { },
    title: "",
    color: "white",
    backgroundColor: "black",
    radius: 40,

    style: { },
  }


  render() {
    var r = this.props.radius;
    var w = this.props.radius * 2;
    var h = this.props.radius * 2;
    var bc = this.props.backgroundColor;

    return (
      <TouchableOpacity  onPress={(e)=>this.props.onPress()}
        style={[styles.container, { width: w, height: h, borderRadius: r, backgroundColor: bc }]} >
        <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", margin: 5},
  text: { fontSize: 30, fontWeight: "bold", },
});
