import React, { Component } from "react";
import { connect, ConnectedProps } from 'react-redux'

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { RootState } from 'store/reducers';

import ProposalListItem from "./ProposalListItem";

import "../css/common.scss";

const mapState = (state: RootState) => ({
  currentProtocol: state.protocol.currentProtocol
})

const mapDispatch = {
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

enum ButtonType {
  LATEST,
  POPULAR,
}

type Props = PropsFromRedux & {};
type State = {
  proposalList: Array<any>;
  selectedProposal: number;
  selectedButton: ButtonType;
};

const proposalListLatest = [
  {
    no: 30,
    avatar: null,
    name: "A",
    description:
      "Initial Thoughts and Questions for including Real World Assets in the Maker Protocol",
    time: "20 minutes ago",
    tag1: "Governance",
    tag2: "mod",
    tag3: "Real World assets",
    deviation: 23,
  },
  {
    no: 31,
    avatar: null,
    name: "KL",
    description: "[EURS] - Stasis Euro stablecoin",
    time: "1 hour ago",
    tag1: "Governance",
    tag2: "eurs",
    tag3: "collateral-app",
    deviation: 315,
  },
  {
    no: 32,
    avatar: "/assets/avatar/test.jpg",
    name: "LD",
    description:
      "[Signal Request] - Adjust the BAT Risk Premium and Debt Ceiling",
    time: "1 hour ago",
    tag1: "Governance",
    tag2: "eurs",
    tag3: "rates",
    deviation: 2,
  },
  {
    no: 33,
    avatar: null,
    name: "PO",
    description: "[EURS] - Stasis Euro Stablecoin",
    time: "1 hour ago",
    tag1: "Governance",
    tag2: "eurs",
    tag3: "collateral-app",
    deviation: 315,
  },
  {
    no: 34,
    avatar: null,
    name: "CL",
    description:
      "Initial Thoughts and Questions for including Real World Assets in the Maker Protocol",
    time: "20 minutes ago",
    tag1: "Governance",
    tag2: "mod",
    tag3: "Real World assets",
    deviation: 67,
  },
  {
    no: 35,
    avatar: null,
    name: "DF",
    description:
      "Initial Thoughts and Questions for including Real World Assets in the Maker Protocol",
    time: "30 minutes ago",
    tag1: "Governance",
    tag2: "mod",
    tag3: "Real World assets",
    deviation: 45,
  },

];

const proposalListPopular = [
  {
    no: 133,
    avatar: null,
    name: "KL",
    description: "[EURS] - Stasis Euro Stablecoin",
    time: "1 hour ago",
    tag1: "Governance",
    tag2: "eurs",
    tag3: "collateral-app",
    deviation: 315,
  },
  {
    no: 132,
    avatar: "/assets/avatar/test.jpg",
    name: "LD",
    description:
      "[Signal Request] - Adjust the BAT Risk Premium and Debt Ceiling",
    time: "1 hour ago",
    tag1: "Governance",
    tag2: "eurs",
    tag3: "rates",
    deviation: 2,
  },
  {
    no: 131,
    avatar: null,
    name: "KL",
    description: "[EURS] - Stasis Euro stablecoin",
    time: "1 hour ago",
    tag1: "Governance",
    tag2: "eurs",
    tag3: "collateral-app",
    deviation: 315,
  },
  {
    no: 130,
    avatar: null,
    name: "A",
    description:
      "Initial Thoughts and Questions for including Real World Assets in the Maker Protocol",
    time: "20 minutes ago",
    tag1: "Governance",
    tag2: "mod",
    tag3: "Real World assets",
    deviation: 23,
  },

  // {
  //   no: 34,
  //   avatar: null,
  //   name: "A",
  //   description:
  //     "Initial Thoughts and Questions for including Real World Assets in the Maker Protocol",
  //   time: "20 minutes ago",
  //   tag1: "Governance",
  //   tag2: "mod",
  //   tag3: "Real World assets",
  //   deviation: 23,
  // },
];

export class ProposalsPanel extends Component<Props, State> {
  readonly state: State = {
    proposalList: proposalListLatest,
    selectedProposal: 0,
    selectedButton: ButtonType.LATEST,
  };

  onClickedItem = (itemNo: number) => {
    console.log(`OnClickedItem ${itemNo}`);

    this.setState({
      selectedProposal: this.state.selectedProposal !== itemNo ? itemNo : 0,
    });
  };

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidUpdate(prevProps: Props) {
    const { currentProtocol } = this.props;
    const { proposalList } = this.state;
    if (currentProtocol !== '' && prevProps.currentProtocol !== currentProtocol) {
      proposalList.filter((item, index) => {
        item.no = this.getRandomInt(100) + 1;
        if(index % 2 === 0)
          item.time = `${this.getRandomInt(20) + 20} mins ago`;
        else
          item.time = `${this.getRandomInt(5) + 1} hours ago`;
        item.deviation = `${this.getRandomInt(99)}`;
      })
      this.setState({ proposalList: proposalList });
    }
  }

  onClickedButton = (type: ButtonType) => {
    type === ButtonType.LATEST
      ? this.setState({
        proposalList: proposalListLatest,
        selectedButton: type,
      })
      : this.setState({
        proposalList: proposalListPopular,
        selectedButton: type,
      });
  };

  render() {
    return (
      <div>
        {/* Latest/Popular button */}
        <div className="my-4">
          <div className="d-flex flex-row justify-content-between">
            <div className=" align-self-center">
              <ButtonGroup aria-label="outlined button group">
                <Button
                  className={`btn-group-left btn-group compv-font-size ${
                    this.state.selectedButton === ButtonType.LATEST
                      ? "compv-btn"
                      : ""
                    }`}
                  onClick={() => this.onClickedButton(ButtonType.LATEST)}
                >
                  Latest
                </Button>
                <Button
                  className={`btn-group-right btn-group compv-font-size ${
                    this.state.selectedButton === ButtonType.POPULAR
                      ? "compv-btn"
                      : ""
                    }`}
                  onClick={() => this.onClickedButton(ButtonType.POPULAR)}
                >
                  Popular
                </Button>
              </ButtonGroup>
            </div>

            <Button className="compv-btn-outline">Create a Proposal</Button>
          </div>
        </div>

        <div className="proposalList">
          {/* proposal list */}
          {this.state.proposalList.map((item, index) => {
            return (
              <ProposalListItem
                item={item}
                selected={this.state.selectedProposal}
                key={`voting_list_item_${index}`}
                onClick={this.onClickedItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connector(ProposalsPanel);
