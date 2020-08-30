import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Warehouses from "./components/Warehouses";
import WarehouseDetails from "./components/WarehouseDetails";
import InventoryItems from "./components/InventoryItems";

class App extends React.Component {
  state = {
    warehouses: [],
    inventories: [],
  };

  componentDidMount() {
    this.getWarehouses();
    this.getInvItems();
    console.log("component mounted");
  }

  // componentDidUpdate(prevProps) {
  //   console.log("component updated");
  // }

  getInvItems() {
    axios.get("http://localhost:8080/inventory").then((res) => {
      // console.log("get inventories:", res.data);
      this.setState({ inventories: res.data });
    });
  }

  getWarehouses() {
    axios.get("http://localhost:8080/warehouse").then((res) => {
      // console.log("get warehouses:", res.data);
      this.setState({ warehouses: res.data });
    });
  }

  render() {
    return (
      <Switch>
        <Route
          path="/warehouse"
          render={(renderProps) => {
            return (
              <Warehouses {...renderProps} warehouses={this.state.warehouses} />
            );
          }}
          exact
        />
        <Route
          path="/warehouse/:name"
          render={(renderProps) => {
            return <WarehouseDetails {...renderProps} />;
          }}
        />
        <Route
          path="/inventory"
          render={(renderProps) => {
            return (
              <InventoryItems
                {...renderProps}
                inventories={this.state.inventories}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default App;
