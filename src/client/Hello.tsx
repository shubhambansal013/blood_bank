import * as React from "react";
import { Component } from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends Component<HelloProps, undefined> {
  render() {
    return (<h1>Hello from {this.props.compiler} and {this.props.framework} !</h1>);
  }
}