import React, { Component } from "react";
import {connect} from 'react-redux';
import fetchData from '../actions/fetchData';
import BarChart from "./BarChart";
class App extends Component {
  render() {
    const dispatch =this.props.dispatch;
    return (
      <>
    <button onClick={fetchData}>Fetch Data</button>
    <BarChart />;
    </>
    )
  }
}

export default connect()(App);
