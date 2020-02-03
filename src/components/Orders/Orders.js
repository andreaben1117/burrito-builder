import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';

class Orders extends Component {
  render() {
    const orderEls = this.props.orders.map(order => {
      return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    });

    return (
      <section>
        {orderEls.length ? orderEls : <p>No orders yet!</p>}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps, null)(Orders);
