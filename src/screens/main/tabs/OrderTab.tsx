import { BlockTitle, Link, Tab, Toolbar } from "framework7-react";
import React from "react";

export const OrderTab = () => {
  return (
    <Tab id="tab-2" className="page-content">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BlockTitle>Ваши заказы</BlockTitle>
      </div>
      <Toolbar top tabbar>
        <Link tabLink="#tabb-1" tabLinkActive>
          Активные
        </Link>
        <Link tabLink="#tabb-2">Завершенные</Link>
        <Link tabLink="#tabb-3">Отмененные</Link>
      </Toolbar>
      <Tab id="tabb-1" className="page-content" tabActive>
        3234
      </Tab>
      <Tab id="tabb-2" className="page-content">
        234325235235
      </Tab>
      <Tab id="tabb-3" className="page-content">
        12
      </Tab>
    </Tab>
  );
};
