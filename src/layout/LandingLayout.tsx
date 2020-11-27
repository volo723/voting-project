import React, { Component } from "react";

import Header from "components/navs/landing/Header";
import Footer from "components/navs/landing/Footer";

class LandingPageLayout extends Component {
  render() {
    return (
      <div className="landingDiv">
        <Header />
        <main className="pageContent">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default LandingPageLayout;
