import React from "react";
import {Overview} from "./components/Overview"
import {TopBar} from "./components/TopBar"
import { Transaction } from "./components/Transaction";
import { TableTop } from "./components/TableTop";
import { Table } from "./components/Table";
import { SideBar } from "./components/SideBar";

function App() {
  return <div>
    <SideBar />
    <div className="border-b border-black-150 sm:pl-64 bg-white-500">
      <TopBar />
    </div>
    <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
      <Overview />
      <div className="grid gap-6">
        <Transaction />
        <Table/>
      </div>
    </div>

  </div>
}

export default App;