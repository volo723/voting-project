import React from "react";

import { QuickButtonType } from "../../../../../../../../store/types";
import "./styles.scss";

type Props = {
  button: QuickButtonType;
  onQuickButtonClicked: (event: any, value: string | number) => any;
};

function QuickButton({ button, onQuickButtonClicked }: Props) {
  return (
    <button
      className="quick-button"
      onClick={(event) => onQuickButtonClicked(event, button.value)}
    >
      {button.label}
    </button>
  );
}

export default QuickButton;
