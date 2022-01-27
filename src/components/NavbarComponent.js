import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from "reactstrap";
  import { useState } from "react";
  import '../App.css'

export const NavbarComponent = (props) =>{
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
    return(
        <div className={`gpa-header ${props.class}`} >
        <Navbar
          dark
          expand="sm"
          className="headerfirst d-flex justify-content-between align-items-center"
        >
          <div className="d-flex justify-content-between align-items-center div-custom">
            <NavbarBrand href="/" >
              <img className="brand-image" alt="logoGPA" src={props.logo} />
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">PSGPA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    handleShow();
                  }}
                >
                  Sistemas
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div>
            <div className="UserLogged">
              { props.userName && ( 
              <NavbarText>
                {props.userName}
                {" | "}
                <button id="link-exit" onClick={() => props.handleLogout()}>
                  sair
                </button>
              </NavbarText>
               )} 
            </div>
          </div>
        </Navbar>
        </div>
    )
}