import React, { Component } from "react";

import { connect, ConnectedProps } from 'react-redux'

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import VotingListItem from "./VotingListItem";

import { RootState } from 'store/reducers';
import { selectProtocol } from 'store/protocol/actions';

import "../css/common.scss";


const mapState = (state: RootState) => ({
  currentProtocol: state.protocol.currentProtocol
})

const mapDispatch = {
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

enum ButtonType {
  DONE,
  OPEN,
}

type Props = PropsFromRedux & {};
type State = {
  votingList: Array<any>;
  selectedVote: number;
  selectedButton: ButtonType;
};

const testVotingListDone = [
  {
    no: 30,
    waddr: "0x2D407d...45C",
    type: "Proposer",
    volumn: "3,380",
    percent: 38.74,
    againstVolumn: "5,342.533",
    againstPercet: 64.3,
    deviation: 125,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 31,
    waddr: "0x2D407d...45C",
    type: "Proposer",
    volumn: "3,380",
    percent: 38.74,
    againstVolumn: "5,342.533",
    againstPercet: 64.3,
    deviation: 125,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 32,
    waddr: "0x2D407d...45C",
    type: "Proposer",
    volumn: "3,380",
    percent: 38.74,
    againstVolumn: "5,342.533",
    againstPercet: 64.3,
    deviation: 125,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 33,
    waddr: "0x5f407d...45C",
    type: "Proposer",
    volumn: "5,380",
    percent: 48.74,
    againstVolumn: "5,342.533",
    againstPercet: 68.3,
    deviation: 225,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 34,
    waddr: "0x2D407d...45C",
    type: "Proposer",
    volumn: "3,380",
    percent: 38.74,
    againstVolumn: "5,342.533",
    againstPercet: 64.3,
    deviation: 125,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 35,
    waddr: "0x2D407d...45C",
    type: "Proposer",
    volumn: "1,380",
    percent: 28.74,
    againstVolumn: "5,642.533",
    againstPercet: 64.3,
    deviation: 185,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  }
];

const testVotingListOpen = [
  {
    no: 132,
    waddr: "0x7E407d...45C",
    type: "Proposer",
    volumn: "1,380",
    percent: 18.55,
    againstVolumn: "342.533",
    againstPercet: 34.3,
    deviation: 25,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 130,
    waddr: "0xCC07d...4DD",
    type: "Proposer",
    volumn: "13,380",
    percent: 68.35,
    againstVolumn: "2,342.166",
    againstPercet: 74.5,
    deviation: 120,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
  {
    no: 131,
    waddr: "0x2D407d...45C",
    type: "Proposer",
    volumn: "3,380",
    percent: 38.74,
    againstVolumn: "5,342.533",
    againstPercet: 64.3,
    deviation: 125,
    detail: [
      {
        mark: "YIP",
        addrVal: "0x0000...0000",
        addrType: "Executer",
        date: "~ 2020.07.30 04:12",
        dateDetail: "Votes Start: 105573849",
      },
      {
        mark: "IPFS",
        addrVal: "7231 / 2000",
        addrType: "Quorum / Required",
        date: "~ 2020.07.30 22:12",
        dateDetail: "Votes End: 105573861",
      },
    ],
  },
];

class VotingPanel extends Component<Props, State> {
  readonly state: State = {
    votingList: testVotingListDone,
    selectedVote: 0,
    selectedButton: ButtonType.DONE,
  };

  onClickedItem = (itemNo: number) => {
    console.log(`OnClickedItem ${itemNo}`);

    this.setState({
      selectedVote: this.state.selectedVote !== itemNo ? itemNo : 0,
    });
  };

  onClickedButton = (type: ButtonType) => {
    type === ButtonType.DONE
      ? this.setState({ votingList: testVotingListDone, selectedButton: type })
      : this.setState({ votingList: testVotingListOpen, selectedButton: type });
  };

  getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidUpdate(prevProps: Props) {
    const { currentProtocol } = this.props;
    const { votingList } = this.state;
    if (currentProtocol !== '' && prevProps.currentProtocol !== currentProtocol) {
      let baseNumber = this.getRandomInt(8) + 1;
      votingList.filter((item, index) => {
        item.no = baseNumber * 10 + index;
        item.waddr = `0x${this.getRandomInt(4)}B${this.getRandomInt(9)}${this.getRandomInt(5)}D...${this.getRandomInt(6)}E${this.getRandomInt(9)}`;
        item.volumn = `3,${this.getRandomInt(9)}${this.getRandomInt(9)}${this.getRandomInt(9)}`;
        item.percent = `${this.getRandomInt(99)}.${this.getRandomInt(9)}`;
        item.againstVolumn = `5,${this.getRandomInt(9)}${this.getRandomInt(9)}${this.getRandomInt(9)}.${this.getRandomInt(999)}%`;
        item.againstPercet = `${this.getRandomInt(99)}.${this.getRandomInt(9)}`;
        item.deviation = this.getRandomInt(100);
      })
      this.setState({ votingList: votingList });
    }
  }

  render() {
    return (
      <div>
        {/* Wallet Address */}
        <div className="card card-grey">
          <div className="card-body py-2">
            <div className="d-flex flex-row justify-content-between">
              <div className="compv-font-size">Wallet</div>
              <div className="compv-font-size d-flex flex-row">
                <div>0x47C9...8C4b</div>
                <div className="dot-green align-self-center ml-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Done/Open button */}
        <div className="my-4">
          <div className="d-flex flex-row justify-content-between">
            <div className=" align-self-center">
              <ButtonGroup aria-label="outlined button group">
                <Button
                  id="btnDone"
                  className={`btn-group-left btn-group compv-font-size ${
                    this.state.selectedButton === ButtonType.DONE
                      ? "compv-btn"
                      : ""
                    }`}
                  onClick={() => this.onClickedButton(ButtonType.DONE)}
                >
                  Done
                </Button>
                <Button
                  id="btnOpen"
                  className={`btn-group-right btn-group compv-font-size ${
                    this.state.selectedButton === ButtonType.OPEN
                      ? "compv-btn"
                      : ""
                    }`}
                  onClick={() => this.onClickedButton(ButtonType.OPEN)}
                >
                  Open
                </Button>
              </ButtonGroup>
            </div>

            <Button className="compv-btn-outline">Create a vote</Button>
          </div>
        </div>

        <div className="votingList">
          {/* voting list */}
          {this.state.votingList.map((item, index) => {
            return (
              <VotingListItem
                item={item}
                selected={this.state.selectedVote}
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

export default connector(VotingPanel);
