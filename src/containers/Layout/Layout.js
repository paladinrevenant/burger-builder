import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    isSideDrawerShown: false
  };

  setSideDrawerOpen = () => {
    this.setState({isSideDrawerShown: true});
  };

  setSideDrawerClosed = () => {
    this.setState({isSideDrawerShown: false});
  };

  toggleSideDrawer = () => {
    this.setState((state, props) => {
      return {isSideDrawerShown: !state.isSideDrawerShown};
    });
  }

  render() {
    return (
      <>
        <Toolbar drawerToggleClickHandler={this.toggleSideDrawer}/>
        <SideDrawer backdropClicked={this.setSideDrawerClosed} show={this.state.isSideDrawerShown}/>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;
