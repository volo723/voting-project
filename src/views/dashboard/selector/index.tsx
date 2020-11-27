import React, { Component } from "react";

import { Button, Tab, Tabs } from "@material-ui/core";
import TabPanel from "components/tab/TabPanel";
import ProtocolTable from "./ProtocolTable";
import GovernanceTable from "./GovernanceTable";
import Divider from "@material-ui/core/Divider";

import "../css/common.scss";

enum ButtonType {
  ALL,
  // LENDING,
  // DEXES,
  DERIVATIVES,
  PAYMENTS,
  ASSETS,
}

interface SelectorPanelProps { }

type State = {
  tabValue: number;
  selectedButton: ButtonType;
};

export class SelectorPanel extends Component<SelectorPanelProps, State> {
  readonly state: State = {
    tabValue: 0,
    selectedButton: ButtonType.ALL,
  };

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ tabValue: newValue });
  };

  onClickedButton = (type: ButtonType) => {
    this.setState({ selectedButton: type });
  };

  render() {
    return (
      <div>
        <div className="title">Protocol Selector</div>
        <div className="card">
          <div className="card-body">
            <div id="buttongroup">
              <Button
                className={`${
                  this.state.selectedButton === ButtonType.ALL
                    ? "protocol-btn"
                    : "protocol-btn-outline"
                  } compv-font-size mb-1`}
                onClick={() => this.onClickedButton(ButtonType.ALL)}
              >
                All
              </Button>
              {/* <Button
                className={`${
                  this.state.selectedButton === ButtonType.LENDING
                    ? "protocol-btn"
                    : "protocol-btn-outline"
                } compv-font-size ml-2 mb-1`}
                onClick={() => this.onClickedButton(ButtonType.LENDING)}
              >
                Lending
              </Button>
              <Button
                className={`${
                  this.state.selectedButton === ButtonType.DEXES
                    ? "protocol-btn"
                    : "protocol-btn-outline"
                } compv-font-size ml-2 mb-1`}
                onClick={() => this.onClickedButton(ButtonType.DEXES)}
              >
                Dexes
              </Button> */}
              <Button
                className={`${
                  this.state.selectedButton === ButtonType.DERIVATIVES
                    ? "protocol-btn"
                    : "protocol-btn-outline"
                  } compv-font-size ml-2 mb-1`}
                onClick={() => this.onClickedButton(ButtonType.DERIVATIVES)}
              >
                Derivatives
              </Button>
              <Button
                className={`${
                  this.state.selectedButton === ButtonType.PAYMENTS
                    ? "protocol-btn"
                    : "protocol-btn-outline"
                  } compv-font-size ml-2 mb-1`}
                onClick={() => this.onClickedButton(ButtonType.PAYMENTS)}
              >
                Payments
              </Button>
              <Button
                className={`${
                  this.state.selectedButton === ButtonType.ASSETS
                    ? "protocol-btn"
                    : "protocol-btn-outline"
                  } compv-font-size ml-2 mb-1`}
                onClick={() => this.onClickedButton(ButtonType.ASSETS)}
              >
                Assets
              </Button>
            </div>

            <Tabs
              value={this.state.tabValue}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="inherit"
            >
              <Tab label="Protocol" />
              <Tab label="Governance" />
            </Tabs>
            <Divider />

            <TabPanel value={this.state.tabValue} index={0}>
              <ProtocolTable />
            </TabPanel>
            <TabPanel value={this.state.tabValue} index={1}>
              <GovernanceTable />
            </TabPanel>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectorPanel;
