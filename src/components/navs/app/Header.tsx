import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  NavbarText,
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
      <Navbar
        className="header"
        dark
        expand="md"
        style={{ zIndex: 1, backgroundColor: "black" }}
      >
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
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>WALLET</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>LEADERBOARD</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>DELEGATE</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>HELP</NavLink>
            </NavItem>
          </Nav>

          <NavbarText>
            <img src="assets/images/user.svg" alt="" />
          </NavbarText>
        </Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}

export default Header;
