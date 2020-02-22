import React from "react";

import "../../scss/Dashboard.scss";
import AddProductTab from "./ProductAddTab";
import ProductListTab from "../Dashboard/ProductListTab";
import AccountTab from "../Dashboard/AccountTab";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Tabs defaultActiveKey="add" transition={false}>
        <Tab eventKey="add" title="Add Product">
          <AddProductTab />
        </Tab>
        <Tab eventKey="products" title="List Products">
          <ProductListTab />
        </Tab>
        <Tab eventKey="account" title="Account">
          <AccountTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Dashboard;
