export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
    .then(response => response.json())
}

export const postOrder = (order) => {
  fetch("http://localhost:3001/api/v1/orders", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: order.name,
      ingredients: order.ingredients
    })
  })
    .then(response => response.json())
}