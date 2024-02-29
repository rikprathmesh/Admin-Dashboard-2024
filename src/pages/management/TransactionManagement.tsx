import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Prathmesh Rikame",
    address: "Chembur",
    city: "Mumbai",
    state: "Maharashtra",
    country: "Indeia",
    pinCode: 400071,
    status: "Processing",
    subtotal: 4000,
    discoount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "1",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    status,
    subtotal,
    discoount,
    shippingCharges,
    tax,
    total,
    _id,
  } = order;

  const updateHandler = () => {
    setOrder(prev => (
      {...prev, status: prev.status === "Processing" ? "Shipped" : "Delivered"}
    ))
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section style={{padding: '2rem'}}>
          <h2>Order Items</h2>
          {order.orderItems.map((item) => (
            <ProductCard
              name={item.name}
              photo={item.photo}
              _id={item._id}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charge: {shippingCharges}</p>
          <p>tax: {tax}</p>
          <p>Discount: {discoount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
