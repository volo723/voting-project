import React, { Component } from "react";

import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export class TabPanel extends Component<TabPanelProps> {
  render() {
    const { children, value, index, ...other } = this.props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box py={2}>
            {children}
          </Box>
        )}
      </div>
    );
  }
}

export default TabPanel;
