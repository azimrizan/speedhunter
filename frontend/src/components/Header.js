import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import logo from 'file:///D:/speedhunter/fathisfashion/frontend/logo.jpg'; // Replace './logo.jpg' with the correct path relative to your Header component

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <div>
      <Navbar expand="lg"  variant="black" collapseOnSelect>
        <Container className="justify-content-center">
          <LinkContainer to='/'>
          <Navbar.Brand className="mx-auto" >
            <img
              src={logo}
              alt="Fashion Logo"
              style={{ height: '130px',  width:'350px'}}
            />

          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
  
            <Nav className="ms-auto">
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i>CART</Nav.Link></LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
              <LinkContainer to='/login'>    
              <Nav.Link><i className='fas fa-user'></i>SIGN IN</Nav.Link></LinkContainer> )}
              
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
