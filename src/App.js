import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import BackdropContext from "./contexts/backdropContext";
import OrderContext from "./contexts/orderContext";

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
        <BackdropContext.Provider value={{
          isShown: this.state.backdropIsShown,
          show: this.showBackdrop,
          hide: this.hideBackdrop
        }}>
          <OrderContext.Provider value={{
            isShown: this.state.orderIsShown,
            show: this.showOrder,
            hide: this.hideOrder
          }}>
            <Layout>
              <BurgerBuilder />
            </Layout>
          </OrderContext.Provider>
        </BackdropContext.Provider>
      </div>
    );
  }
}

export default App;
