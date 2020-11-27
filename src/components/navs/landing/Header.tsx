import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarText,
  Button,
} from "reactstrap";

import "./Header.css";

interface headerState {
  isOpen: boolean;
}

class Header extends React.Component<{}, headerState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar className="header" dark expand="md">
        {/* <Container> */}
        <NavbarBrand className="logo-style" tag={Link} to="/">
          {" "}
          <img className="logo" src="assets/images/logo.png" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          style={{ zIndex: 1, backgroundColor: "black" }}
        >
          <div className="w-100 text-right">
            <NavbarText tag={Link} to="/dashboard">
              <Button className="appButton">Open App</Button>
            </NavbarText>
          </div>
        </Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}

export default Header;
