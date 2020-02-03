import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { getOrders } from '../../apiCalls';
import { setOrders } from '../../actions';
import { bindActionCreators } from 'redux';

class Orders extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    const orderEls = this.props.orders.map((order, index) => {
      console.log(order)
      return (
        <div className="order" key={index}>
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
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

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
