import React from "react";
import {Overview} from "./components/Overview"
import {TopBar} from "./components/TopBar"
import { Transaction } from "./components/Transaction";
import { TableTop } from "./components/TableTop";
import { Table } from "./components/Table";

function App() {
  return <div>
    <TopBar />
    <Overview />
    <Transaction />
    {/* <TableTop /> */}
    <Table/>

  </div>
}

export default App;