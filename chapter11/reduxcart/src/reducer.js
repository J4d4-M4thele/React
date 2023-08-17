function cartReducer(state, action) {
    //initial state of application
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }
    switch (action.type) {
        //action(add)
        case "addProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    //displays product name and price
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
            //acion(delete)
        case "deleteProduct":
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                //displays updated price and products
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state;
    }
}
export default cartReducer;