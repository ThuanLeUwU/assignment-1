import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
   Modal,
   Collapse,
   Jumbotron,
   ModalBody,
   ModalHeader,
   Nav,
   Navbar,
   NavbarBrand,
   NavbarToggler,
   NavItem,
   Button,
   Form,
   FormGroup,
   Label,
   Input
} from "reactstrap";


import LoginComponent from "./LoginComponent";

import Popup from "reactjs-popup";
import StaticExample from "./ModalLogin";
import ModalExample from "./ModalLogin";

class Header extends Component {
   constructor(props) {
      super(props);
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
         isNavOpen: false,
         isModalOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggModal = this.toggModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);

   }

   toggleNav() {
      this.setState({
         isNavOpen: !this.state.isNavOpen
      });
   }

   //Login
   toggModal() {
      this.setState({
         isModalOpen: !this.state.isModalOpen
      })
   }

   handleLogin(event) {
      this.toggleModal();
      alert("Username: " + this.username.value + " Password: " + this.password.value
         + " Remember: " + this.remember.checked);
      event.preventDefault();
   }

   render() {
      return (
         <React.Fragment>
            <Navbar dark expand="md " fixed='top' className='nav'>
               <NavbarToggler onClick={this.toggleNav} />
               <NavbarBrand className="mr-auto" href="/">
                  <NavLink to='/'><img src="uwu.gif" height="40" /> </NavLink>
               </NavbarBrand>
               <Collapse isOpen={this.state.isNavOpen} navbar >
                  <Nav navbar className='ml-auto'>
                     <NavItem>
                        <NavLink className="nav-link" to="/home">
                           <span className="fa fa-home fa-lg"></span> Home
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                           <span className="fa fa-info fa-lg"></span> About Us
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink className="nav-link" to="/menu">
                           <span className="fa fa-list fa-lg"></span> Menu
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                           <span className="fa fa-address-card fa-lg"></span>{" "}
                           Feedback
                        </NavLink>
                     </NavItem>
                     {/* <LoginComponent/> */}
                  </Nav>
                  <Nav className='ml-auto' navbar>
                     <NavItem>
                        {/* <Button outline onClick={this.toggleModal}>
                           <span className="fa fa-sign-in fa-lg">Login
                           </span>
                           <StaticExample/>
                           </Button> */}
                        {/* <LoginComponent/> */}
                        <ModalExample/>
                        {/* <Popup modal trigger={<button><span className="fa fa-sign-in fa-lg"></span>Login</button>}>
                           Modal Content
                        </Popup> */}
                     </NavItem>
                  </Nav>
                  {/* <LoginComponent/> */}
               </Collapse>
            </Navbar>
            {/* <LoginComponent/> */}
            <Jumbotron>
               <div className="container ">
                  <div className="row row-header">
                     <div className="col-12 col-sm-6">
                     </div>
                  </div>
               </div>
            </Jumbotron>
         </React.Fragment>
      );
   }
}
export default Header;
