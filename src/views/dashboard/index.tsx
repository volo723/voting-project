import React, { Component } from "react";

import AppLayout from "layout/AppLayout";
import MessagePanel from "./message/Index";
import MutualPanel from "./mutual/Index";
import SelectorPanel from "./selector/index";

import "./css/common.scss";

interface DashboardPageProps {}

export class DashboardPage extends Component<DashboardPageProps> {
  render() {
    return (
      <AppLayout>
        <div className="main-panel mx-0 d-flex row">
          <div className="side-panel col-md-4 pl-0">
            <MessagePanel />
          </div>
          <div
            className="flex-grow-1 center-panel col-md-4 px-0"
            style={{ maxHeight: "100vh" }}
          >
            <MutualPanel />
          </div>
          <div className="side-panel col-md-4">
            <SelectorPanel />
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default DashboardPage;
