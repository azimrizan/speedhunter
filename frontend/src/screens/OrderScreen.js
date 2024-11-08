import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getOrderDetails, payOrder,deliverOrder } from '../actions/orderActions';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET
} from '../constants/orderConstants';
import { useNavigate } from 'react-router-dom';


const OrderScreen = ({ match, history }) => {
  const { id } = useParams();
  const orderId = id;
  const [sdkReady, setSdkReady] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver
 
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {

    if (!userInfo) {
      navigate('/login')
    }

    const addRazorpayScript = async () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.head.appendChild(script);
    };

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
    }else if (!order.isPaid) {
      if (!window.Razorpay) {
        addRazorpayScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay,successDeliver, order]);

  const handleRazorpayPayment = async () => {
    try {
      const amountInPaise = Math.round(order.totalPrice * 100);

      // Make a POST request to your server to create a Razorpay order
      const response = await axios.get('/api/config/razorpay', {
        amount: amountInPaise, // Pass the amount in paise
        currency: 'INR',
      });

      const { order_id } = response.data;

      // Define Razorpay options
      const razorpayOptions = {
        key: 'rzp_test_MDH1i553KmuDsg', // Replace with your actual Razorpay API key
        order_id,
        amount: amountInPaise, // Use the amount in paise
        name: 'SPEEDHUNTER MOTORSPORT',
        description: 'Payment for products',
        handler: async (response) => {
          // Handle the success callback
          console.log('Payment successful:', response);
          dispatch(payOrder(orderId, response))
  
          const paymentResult = {
            id: response.razorpay_payment_id ,
            status: response.razorpay_status,
            update_time: new Date().toISOString(),
          };
          dispatch(payOrder(orderId, paymentResult));
        },
      };

      // Initialize Razorpay with the options
      const rzp = new window.Razorpay(razorpayOptions);
      rzp.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    }
  };

  // Handle successPay
  useEffect(() => {
    if (successPay) {
      // After successful payment, you can redirect or perform any other action here
      // If you want to redirect, use history.push('/success') or similar
      // You may also want to fetch the updated order details after payment
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, successPay]);
  
   const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }
  
  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
              <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                {order.shippingAddress.country},{' '}
                {order.shippingAddress.state},{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.phonenumber},{' '}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
      {loadingPay && <Loader />}
      {!sdkReady ? (
        <Loader />
      ) : (
        <Button
          type="button"
          className="btn btn-block"
          disabled={
            order.paymentMethod === 'CashOnDelivery' || !sdkReady
          } // Disable the button if payment method is cashondelivery or sdk is not ready
          onClick={handleRazorpayPayment}
        >
          {order.paymentMethod === 'CashOnDelivery'
            ? 'Your Order is Placed Successfully!'
            : 'Pay with Razorpay'}
        </Button>
      )}
    </ListGroup.Item>
    {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen