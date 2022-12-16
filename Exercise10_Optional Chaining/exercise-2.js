const order = {
  custmer: "user1",
  address: {
    city: "Palermo",
    country: undefined
  }
};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }


if (order?.customer?.address?.city === undefined) {
  console.log('City is required');
}