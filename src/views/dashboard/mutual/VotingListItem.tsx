import React, { Component } from "react";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Button from "@material-ui/core/Button";

type Props = {
  item: any;
  selected: number;
  onClick: (itemNo: number) => void;
};
type State = { item: any };

export default class VotingListItem extends Component<Props, State> {
  readonly state: State = { item: this.props.item };

  onClick = () => {
    this.props.onClick(this.props.item.no);
  };

  onClickedUpDown = (offset: number) => {
    let item = this.state.item;
    const newValue = item.deviation + offset;
    item.deviation = newValue > 0 ? newValue : 0;
    this.setState({ item: item });
  };

  render() {
    return (
      <div>
        <Divider />
        <ListItem button className="px-0">
          {this.props.selected === this.props.item.no ? (
            <ExpandMoreIcon onClick={this.onClick} />
          ) : (
            <NavigateNextIcon onClick={this.onClick} />
          )}

          <div
            className="compv-font-size ml-2 mr-4 voting-list-no-col"
            onClick={this.onClick}
          >
            {this.props.item.no}
          </div>

          <div className="row w-100 px-0">
            <div className="compv-font-size col" onClick={this.onClick}>
              <div>{this.props.item.waddr}</div>
              <div className="compv-font-size-small">Proposer</div>
            </div>
            <div className="compv-font-size col" onClick={this.onClick}>
              <div>{this.props.item.volumn}</div>
              <div className="compv-font-size-small">
                {`Votes For ${this.props.item.percent}%`}
              </div>
            </div>
            <div
              className="compv-font-size col voting-col-min-width"
              onClick={this.onClick}
            >
              <div>{this.props.item.againstVolumn}</div>
              <div className="compv-font-size-small">
                {`Votes Against ${this.props.item.againstPercet}%`}
              </div>
            </div>
            <div className="compv-font-size col d-flex justify-content-end">
              <Button className="compv-btn-outline">
                <ExpandMoreIcon
                  className="icon-style"
                  onClick={() => this.onClickedUpDown(-1)}
                />
                <div className="mx-1">{this.state.item.deviation}</div>
                <ExpandLessIcon
                  className="icon-style"
                  onClick={() => this.onClickedUpDown(1)}
                />
              </Button>
            </div>
          </div>
        </ListItem>

        {/* detail */}
        {this.props.selected === this.props.item.no &&
          this.props.item.detail.map((item: any, index: number) => (
            <ListItem button className="px-0" key={index}>
              {/* <div className="" style={{ width: "80px" }}>
                {" "}
              </div> */}
              <div style={{ visibility: "hidden" }}>
                <NavigateNextIcon />
              </div>

              <div className="compv-font-size ml-2 mr-4 voting-list-no-col">
                <div className="main-color">{item.mark}</div>
                <div className="compv-font-size-small">Link</div>
              </div>

              <div className="row w-100 px-0">
                <div className="compv-font-size col">
                  <div>{item.addrVal}</div>
                  <div className="compv-font-size-small">{item.addrType}</div>
                </div>
                <div className="compv-font-size col"></div>
                <div className="compv-font-size col voting-col-min-width">
                  <div>{item.date}</div>
                  <div className="compv-font-size-small">{item.dateDetail}</div>
                </div>
                <div className="compv-font-size col"></div>
              </div>
            </ListItem>
          ))}
      </div>
    );
  }
}
