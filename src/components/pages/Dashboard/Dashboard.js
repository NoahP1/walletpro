import React, { Component } from "react";

import "./Dashboard.scss";
import ProductAddTab from "./ProductAddTab";
import ProductListTab from "../Dashboard/ProductListTab";
import AccountTab from "../Dashboard/AccountTab";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      showAlert: false
    };
  }

  update = value => {
    this.setState({
      activeTab: value.activeTab,
      showAlert: value.showAlert
    });
  };

  handleSelect = key => {
    this.setState({
      activeTab: key
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <Tabs defaultActiveKey="add" transition={false} onSelect={this.handleSelect} activeKey={this.state.activeTab}>
          <Tab eventKey="add" title="Add Product">
            <ProductAddTab data={this.update} />
          </Tab>
          <Tab eventKey="products" title="List Products">
            <ProductListTab showAlert={this.state.showAlert} data={this.update} />
          </Tab>
          <Tab eventKey="account" title="Account">
            <AccountTab />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Dashboard;
