import React from 'react'
import { Navbar ,Container,NavbarBrand,NavLink,Nav ,NavDropdown} from 'react-bootstrap'
import logo from './Group 18.svg'
import logo1 from './add (1).png'
import logo2 from './warehouse.png'
import logo3 from './add.png'
import logo4 from './refresh-page-option.png'
import{Link} from "react-router-dom"
function AdminNavBar() {

    const navbar = {backgroundColor: '#006CF9'};
    const navstyle={
    color:"white"
                    }   

                    const dropnavbar = {backgroundColor: '#006CF9',
                    paddingTop:"3%",
                    color:"white"
                    
                
                };

  return (
    <Navbar style={navbar}>
    <Container>
    <Navbar.Brand ><img src={logo}  /></Navbar.Brand>
    <Nav className="justify-content-end" >

    <NavDropdown title="تعديل" id="nav-dropdown" style={dropnavbar}>
        <Link to=""><NavDropdown.Item style={dropnavbar} eventKey="4.1">مستخدم</NavDropdown.Item></Link>
        <Link to=""> <NavDropdown.Item style={dropnavbar} eventKey="4.2">مخزن</NavDropdown.Item></Link>
        <Link to=""><NavDropdown.Item style={dropnavbar} eventKey="4.3">عنصر</NavDropdown.Item></Link>
      </NavDropdown> <NavLink><img src={logo4}  /></NavLink>
    
   <NavDropdown title="اضافه" id="nav-dropdown" style={dropnavbar}>
        <Link to=""><NavDropdown.Item style={dropnavbar} eventKey="4.1">مستخدم</NavDropdown.Item></Link>
        <Link to=""> <NavDropdown.Item style={dropnavbar} eventKey="4.2">مخزن</NavDropdown.Item></Link>
        <Link to=""><NavDropdown.Item style={dropnavbar} eventKey="4.3">عنصر</NavDropdown.Item></Link>
      </NavDropdown> <NavLink><img src={logo3}  /></NavLink>
      
    <Link to='/WareHouses'>
    
    <Nav.Link style={navstyle}  href="#WareHouses"  >  المخازن المتاحه <img src={logo2}  /></Nav.Link>
     </Link>
   
     <Link to='/itemslist'>
    
     <Nav.Link style={navstyle} href="#itemslist" > اضافه صنف  <img src={logo1}  /></Nav.Link>
     </Link>
   
     
    </Nav>
    </Container>
  </Navbar>
  )
}

export default AdminNavBar