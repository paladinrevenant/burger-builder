import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { CombinedContextProvider } from "./contexts/backdropOrderCombinedContext";

class App extends Component {
  state = {
    backdropIsShown: false,
    orderIsShown: false
  }

  showBackdrop = () => { this.setState({backdropIsShown: true}); }
  hideBackdrop = () => { this.setState({backdropIsShown: false}); }
  showOrder = () => { this.setState({orderIsShown: true}); }
  hideOrder = () => { this.setState({orderIsShown: false}); }

  render() {
    return (
      <div>
        <CombinedContextProvider
          backdropValue={{
            isShown: this.state.backdropIsShown,
            show: this.showBackdrop,
            hide: this.hideBackdrop
          }}
          orderValue={{
            isShown: this.state.orderIsShown,
            show: this.showOrder,
            hide: this.hideOrder
          }}
        >
          <Layout>
            <BurgerBuilder />
          </Layout>
        </CombinedContextProvider>
      </div>
    );
  }
}

export default App;
