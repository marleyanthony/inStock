import React from "react";
import "./styles/app.css";
import Warehouses from "./components/Warehouses";
import InventoryItems from "./components/InventoryItems";
import Header from "./components/Header";
import axios from 'axios';

import "./styles/app.css";

class App extends React.Component {
  state = {
    warehouses: [],
    inventories: [],
  };

  componentDidMount() {
    this.getInvItems();
    this.getWarehouses();
  }

  getInvItems() {
    axios
      .get('http://localhost:8080/inventory')
      .then((res) => {
        console.log(res.data);
        this.setState(
          { inventories: res.data }
        )
      })
  }

  getWarehouses() {
    axios
      .get('http://localhost:8080/warehouse')
      .then((res) => {
        console.log(res.data);
        this.setState(
          { warehouses: res.data }
        )
      })
  }

  render() {
    return (
      <div className="background">
        <Header />
        <Warehouses warehouses={this.state.warehouses} />
        <InventoryItems inventories={this.state.inventories} />
      </div>
    );
  }
}

export default App;
