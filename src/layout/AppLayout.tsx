import React, { Component } from "react";

import Header from "components/navs/app/Header";
// import Footer from "components/navs/app/Footer";

class AppLayout extends Component {
  render() {
    return (
      <div className="appDiv">
        <Header />
        <main className="pageContent">{this.props.children}</main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default AppLayout;
