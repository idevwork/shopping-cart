import actionTypes from './actionTypes'

export const applyPromoCode = promoCode => ({
  type: actionTypes.APPLY_PROMO_CODE,
  promoCode
})

export const checkoutProductsRequest = baskets => ({
  type: actionTypes.CHECKOUT_PRODUCTS_REQUEST,
  baskets
})

export const checkoutProductsReset = () => ({
  type: actionTypes.CHECKOUT_PRODUCTS_RESET
})

export const selectProducts = (item, mode) => ({
  type: actionTypes.SELECT_PRODUCTS,
  item,
  mode
})

export const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST
})
