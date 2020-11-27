import React, { Component } from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "components/tab/TabPanel";

import VotingPanel from "./Voting";
import ProposalsPanel from "./Proposals";

import Divider from "@material-ui/core/Divider";

import "../css/common.scss";

type MutualPanelProps = {};

type State = {
  tabValue: number;
};

export class MutualPanel extends Component<MutualPanelProps, State> {
  readonly state: State = {
    tabValue: 0,
  };

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({ tabValue: newValue });
  };

  render() {
    return (
      <div>
        <div className="title">Nexus Mutual</div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-row">
              <img
                className="mark-icon align-self-center"
                src="assets/icons/exclamation-mark.png"
                alt=""
              />
              <div className="card-body">
                {
                  "Nexus Mutual uses the power of Ethereum so people can share risk together without the need for an insurance company. Secure risk and potential bugs in smart contract code. Be covered for events like The DAO hack or Parity multi-sig wallet issues."
                }
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <Tabs
              value={this.state.tabValue}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="inherit"
            >
              <Tab label="Voting" />
              <Tab label="Proposals" />
            </Tabs>
            <Divider />

            <div className="flex-grid-1">
              <TabPanel value={this.state.tabValue} index={0}>
                <VotingPanel />
              </TabPanel>
              <TabPanel value={this.state.tabValue} index={1}>
                <ProposalsPanel />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MutualPanel;
