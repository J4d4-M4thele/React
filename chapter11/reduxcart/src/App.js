import { connect } from "react-redux";
import Cart from "./Cart";

function mapStateToProps(state) {
  //keeps track of product and cost state
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (productName, productPrice) => dispatch({
      //action type
      type: "addProduct",
      //payload
      productData: {
        productName: productName,
        productPrice: productPrice
      }
    }),

    onDeleteProduct: (productData) => dispatch({
      //action type
      type: "deleteProduct",
      //payload
      productData: productData
    })
  }
}
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
export default connectedComponent;