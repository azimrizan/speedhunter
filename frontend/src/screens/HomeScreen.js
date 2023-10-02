import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import SearchBox from '../components/SearchBox'
import { Routes, Route, useNavigate,useParams } from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const productList=useSelector(state => state.productList)
  const { loading, error,products }=productList
  const { keyword } = useParams();
  
useEffect((() =>{
  dispatch(listProducts(keyword))
}), [dispatch,keyword]) 



  return (
    <>
      
        
      <SearchBox/> 

      <HomeCarousel />

      
     
    <h1>LATEST PRODUCTS</h1>
    {loading ? (
      <Loader/>
    
     ) : error ? (
     <Message variant='danger'>{error}</Message>
     ) : (
     <Row>
        {products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
            </Col>
        ))}

    </Row>)}
    

    </>
  )
}

export default HomeScreen