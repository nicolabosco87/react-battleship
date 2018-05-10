import * as React from "react";
import { Component } from "react";
import * as ReactDOM from 'react-dom';

class App extends Component {
  private bay: string = "Yaexz";




  render() {
    return <div><h1>{this.bay}</h1></div>;
  }
}

const container = document.getElementById('app');
const application = <App></App>;

ReactDOM.render(application, container);