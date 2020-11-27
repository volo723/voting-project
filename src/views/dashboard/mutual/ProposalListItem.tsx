import React, { Component } from "react";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

type Props = {
  item: any;
  selected: number;
  onClick: (itemNo: number) => void;
};
type State = { item: any };

export default class ProposalListItem extends Component<Props, State> {
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
        <ListItem button className="px-0" onClick={this.onClick}>
          <div className="compv-font-size ml-0 mr-3">
            <div className="list-avatar d-flex justify-content-center">
              {this.props.item.avatar !== null ? (
                <Avatar
                  src={this.props.item.avatar}
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <div className="align-self-center avatar-name-text">
                  {this.props.item.name}
                </div>
              )}
            </div>
          </div>

          <div className="w-100 px-0 d-flex">
            <div className="compv-font-size flex-grow-1 mr-3">
              <div>{this.props.item.description}</div>
              <div className="compv-font-size-small d-flex row pl-3">
                <div className="align-self-center ">{this.props.item.time}</div>
                <div className="">
                  <Chip
                    label={this.props.item.tag1}
                    avatar={
                      <Avatar variant="square" className="chip-icon-yellow">
                        <div></div>
                      </Avatar>
                    }
                  />
                </div>

                <div className="">
                  <Chip
                    label={this.props.item.tag2}
                    avatar={
                      <Avatar variant="square" className="chip-icon-gray">
                        <div></div>
                      </Avatar>
                    }
                  />
                </div>
                <div className="">
                  <Chip
                    label={this.props.item.tag3}
                    avatar={
                      <Avatar variant="square" className="chip-icon-gray">
                        <div></div>
                      </Avatar>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="compv-font-size d-flex justify-content-end">
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
      </div>
    );
  }
}
