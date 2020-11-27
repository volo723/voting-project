import React, { Component } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "./CustomAvatar.scss";

type Props = {};
type State = { value: number };

export default class CustomAvatar extends Component<Props, State> {
  readonly state: State = {
    value: 12,
  };

  onClickedUpDown = (offset: number) => {
    const newValue = this.state.value + offset;
    this.setState({ value: newValue > 0 ? newValue : 0 });
  };

  render() {
    return (
      <div className="mr-3" style={{ width: "78px", height: "72px" }}>
        <div className="row mx-0 avatar-area">
          <div className="col-6 mx-0 px-0 d-flex justify-content-center">
            <div className="align-self-center">{this.state.value}</div>
          </div>
          <div className="col-6 mx-0 px-0">
            <div className=" d-flex justify-content-center avatar-right-up">
              <ExpandLessIcon
                className="icon-style"
                onClick={() => this.onClickedUpDown(1)}
              />
            </div>
            <div className=" d-flex justify-content-center avatar-right-down">
              <ExpandMoreIcon
                className="icon-style"
                onClick={() => this.onClickedUpDown(-1)}
              />
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center">Delegate</div> */}
      </div>
    );
  }
}
