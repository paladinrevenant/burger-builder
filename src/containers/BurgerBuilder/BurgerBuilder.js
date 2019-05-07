import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { CombinedContextConsumer } from "../../contexts/backdropOrderCombinedContext";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type] -= 1;
      this.setState({totalPrice: newPrice, ingredients: newIngredients});
      this.updatePurchaseState(newIngredients);
    }
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});
  };

  purchaseConfirmHandler = () => {
    alert("Thank you for confirming your order.");
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }

    return (
      <>
        <CombinedContextConsumer>
          {({backdropCtx, orderCtx}) => (
            <Modal show={orderCtx.isShown}>
              <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                confirmHandler={this.purchaseConfirmHandler}
                cancelhandler={() => {backdropCtx.hide(); orderCtx.hide();}}
              />
            </Modal>
          )}
        </CombinedContextConsumer>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable} />
      </>
    );
  }
}

export default BurgerBuilder;
