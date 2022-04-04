import React from 'react'
import AdminNavBar from './AdminNavBar'
import {Form, Nav , Navbar , NavDropdown } from 'react-bootstrap'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import {useParams} from "react-router-dom"

function EditUser({}) {
    const prams = useParams()

    const tablestyle={

        float:"centre",
        width:"80%",
        margin:"5%",

    }

    const style={
        
        color:"black",
        borderRadius: "10px",
        marginTop:"5%",
        padding:"1%"
        

    }
    return (<>
         <AdminNavBar></AdminNavBar>

         <Container fluid style={{padding: "5%" , margin:'1%'}}>
 <Form>
 <Row>
    <Col>
    <Row >
    <Form.Control type="text" placeholder="الاسم كامل"  />
    </Row> 
    <Row >
    <Form.Control type="text" placeholder="الرقم القومي" />
    </Row> 
    <Row >
    <Form.Control type="text" placeholder="العنوان" />
    </Row> 
    <Row >
    <Form.Control type="email" placeholder="الايمايل" />
    </Row> 

    </Col>

    <Col>
  
    <Row >
    <Form.Control type="text" placeholder=" اسم المستخدم "  />
    </Row> 
    
    <Row >
    <Form.Control type="password" placeholder=" كلمه السر "  />
    </Row> 
    <Row >
    <Form.Control type="password" placeholder=" تأكيد كلمة السر "  />
    </Row> 
    <Form.Select aria-label="Default select example">
        <option>نوع المستخدم</option>
        <option value="1"> أمين مخزن للقسم</option>
        <option value="1"> أمين مخزن كليه</option>
        <option value="1"> أدمن  </option>
        <option value="1"> عميد  </option>
        <option value="1"> رئيس لجنة فحص  </option>
       
    </Form.Select>
    <Col> <Button type="submit" style={{width:"20%",float:'right',padding:'2%', marginTop:'2%'}}>تعديل</Button>
</Col>
            
        
         </Col>
    

    </Row>
 </Form>
  

  
</Container>

       
       
         
         </>
         )
        }
        export default EditUser
        