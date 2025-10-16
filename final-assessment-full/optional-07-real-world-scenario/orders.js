function calculateTotal(orders) {
  return orders.reduce((total, order) => total + order.price * order.quantity, 0);
}

export default calculateTotal;
