import React, { useState } from 'react'
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

import {useSelector, useDispatch} from "react-redux"
import { setLogout } from '../redux/features/authSlice'

const Header = () => {
    const {user} = useSelector((state) => ({...state.auth}));
    const dispatch = useDispatch();
    
    const handleLogout = () =>{
        dispatch(setLogout())
    }
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Sweet Memories</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">


      <Nav.Link href="#home">{user?.result?._id && (
          <h2> logged: {user?.result?.name }{ user?.result?.lastName}</h2>
      )}</Nav.Link>

        <Nav.Link href="#home">Home</Nav.Link>

        {user?.result?._id && (
         <>
         <Nav.Link href="/addMemories">Add Memories</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Action</NavDropdown.Item>
          <NavDropdown.Item href="">Another action</NavDropdown.Item>
          <NavDropdown.Item href="">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
         </>   
        )}
        {user?.result?._id ?  (
         <Nav.Link href="/login" onClick={handleLogout}>Logout</Nav.Link>

        ):
         <Nav.Link href="/login">Login</Nav.Link>
        }
        
       

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header