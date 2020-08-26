import React from 'react'
// import logo from '../assets/logo/logo';

function header() {
  return (
    <section className="header">
      <div className="header__logo-container">
        <img className="header__logo" src="./assets/logo/logo" alt="logo" />
      </div>
      <div className="header__wh-inv-container">
        <button className="header__wh-btn btn">Warehouses</button>
        <button className="header__inv-btn btn">Inventory</button>
      </div>
    </section>
  )
}

export default header
