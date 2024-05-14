import React from "react";
import {Overview} from "./components/Overview"
import {TopBar} from "./components/TopBar"
import { Transaction } from "./components/Transaction";
import { TableTop } from "./components/TableTop";

function App() {
  return <div>
    <TopBar />
    <Overview />
    <Transaction />
    <TableTop />

  </div>
}

export default App;