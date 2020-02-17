import React, { Component } from "react";
import "../scss/BTCValue.scss";

const getBTCValue = require("btc-value");

export class BTCValue extends Component {
  state = {
    BTCValue: 0
  };
  componentDidMount() {
    getBTCValue().then(value => {
      this.setState({
        BTCValue: value
      });
    });
  }
  render() {
    return (
      <div className="btc-value">BTC:&nbsp;${this.state.BTCValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
    );
  }
}

export default BTCValue;
