import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Products from './Products'
import Checkout from './Checkout'
import { fetchProductsRequest } from '../redux/actions'
import { getCartItemsCount } from '../selectors'
import '../styles/pages/ShoppingCart.scss'

class ShoppingCart extends React.Component {
  render() {
    const { cartItemsCount } = this.props

    return (
      <Router>
        <Switch>
          <Route path="/checkout">
            <Checkout cartItemsCount={cartItemsCount} />
          </Route>
          <Route path="/">
            <Products cartItemsCount={cartItemsCount} />
          </Route>
        </Switch>
      </Router>
    )
  }

  componentDidMount() {
    this.props.fetchProductsRequest()
  }
}

const mapStateToProps = state => ({
  cartItemsCount: getCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchProductsRequest
    },
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
