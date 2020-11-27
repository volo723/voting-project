import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const close = require("../../../../../../../assets/clear-button.svg") as string;

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
};

type State = {
  time: number;
};

function Header({
  title,
  subtitle,
  toggleChat,
  showCloseButton,
  titleAvatar,
}: Props) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let endTime = localStorage.getItem("endTime");
    const endTime1 = endTime === null ? +new Date() : +endTime;

    const difference = endTime1 - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval) => {
    //@ts-ignore
    if (!timeLeft[interval]) {
      return;
    }

    let unit = interval;

    if (interval === "minutes") unit = "min";
    else if (interval === "seconds") unit = "sec";

    timerComponents.push(
      <span>
        {
          //@ts-ignore
          timeLeft[interval]
        }{" "}
        {unit}{" "}
      </span>
    );
  });

  return (
    <div className="rcw-header">
      {showCloseButton && (
        <button className="rcw-close-button" onClick={toggleChat}>
          <img src={close} className="rcw-close" alt="close" />
        </button>
      )}
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8 chat-title">
          <h4 className="rcw-title">
            {titleAvatar && (
              <img src={titleAvatar} className="avatar" alt="profile" />
            )}
            {title}
          </h4>
        </div>
      </div>

      {/* <span>{subtitle}</span> */}
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8 chat-title">
          <span>
            Next winner:{" "}
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
