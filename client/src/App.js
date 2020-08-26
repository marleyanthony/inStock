import React from "react";
import Warehouses from "./components/Warehouses";
import InventoryItems from './components/InventoryItems'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Warehouses />
        <InventoryItems />
      </div>
    );
  }
}

export default App;
