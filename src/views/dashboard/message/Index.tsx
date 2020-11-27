import React, { Component } from "react";

// import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import {
  Widget,
  addResponseMessage,
  // toggleWidget,
} from "../../../components/chat-widget/index";

import "react-chat-widget/lib/styles.css";
import "../css/common.scss";

import avatar from "../../../assets/msg-avatar.png";

type Props = {};
type State = {};

export default class MessagePanel extends Component<Props, State> {
  componentDidMount() {
    const isCreated = localStorage.getItem("isCreated");

    if (isCreated !== "yes") {
      addResponseMessage("oof enjoy the vid though");
      addResponseMessage("I mean");
      addResponseMessage("A girl = viral");
      addResponseMessage("True that");

      localStorage.setItem("isCreated", "yes");
    }

    // toggleWidget();
  }

  handleNewUserMessage = (newMessage: any) => {
    console.log(`New Message incoming! ${newMessage}`);
  };

  render() {
    return (
      <div className="h-100">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={avatar}
          title="Jackpot $1 000 000"
          subtitle="Next winner: 0 days 3h, 58 min, 0 sec"
        />
      </div>
    );
  }
}
