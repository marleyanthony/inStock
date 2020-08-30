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
    currentWarehouse: {},
  };

  componentDidMount() {
    this.getWarehouses();
    this.getInvItems();
    console.log("component mounted");
    // console.log("component did mount:", this.state);
  }

  // shouldComponentUpdate(nextProps) {
  //   // if (!nextProps.match.params.name) {
  //   //   console.log("no params - please update");
  //   //   return true;
  //   // }
  //   console.log("nextProps:", nextProps);
  //   console.log("this.props:", this.props);
  //   if (this.props.match.params.name !== nextProps.match.params.name) {
  //     console.log("component should update");
  //     return true;
  //   } else {
  //     console.log("component should not update");
  //     return false;
  //   }
  // }

  componentDidUpdate(prevProps) {
    console.log("prevProps:", prevProps);
    console.log("this.props:", this.props);
    if (this.props.match.params.name !== prevProps.match.params.name) {
      // if new page (this.props?) has /name, get singleWarehouse
    }
    console.log("component updated");
    // console.log("prevProps:", prevProps);
    // console.log("prevState:", prevState);
  }

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

  // getSingleWarehouse = (name) => {
  //   axios
  //     .get(`http://localhost:8080/warehouse/${name}`)
  //     .then((response) => {
  //       // console.log(response.data);
  //       this.setState({
  //         currentWarehouse: response.data,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

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
            console.log("app renderProps:", renderProps);
            return (
              <WarehouseDetails
                {...renderProps}
                // getSingleWarehouse={this.getSingleWarehouse}
                // currentWarehouse={this.state.currentWarehouse}
              />
            );
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
