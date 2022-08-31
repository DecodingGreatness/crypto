import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Menu } from "antd";

import { Navbar } from "./components";
import "./App.css";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
