import React, { Fragment, Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




 class Header extends Component {
   
   render() {
    const {algorithms, visibleAlgorithms} = this.props
    console.log('header', this.props)
    return (
      <Fragment>
            <Navbar  bg="dark" variant="dark">
              <NavbarBrand> smart Count </NavbarBrand>
              <Nav navbar>
                <NavItem>
                  Total Algorithms: {algorithms.length}
                </NavItem>
                <NavItem>
                  Total Algorithms being displayed: {visibleAlgorithms.length}
                </NavItem>
              </Nav>
            </Navbar>
      </Fragment>
    )
  }
}

export default Header