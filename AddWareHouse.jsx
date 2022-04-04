import React from 'react'
import AdminNavBar from './AdminNavBar'
import {Nav , Navbar , NavDropdown } from 'react-bootstrap'
import{Link} from "react-router-dom"
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button, Container} from 'react-bootstrap'

function AddWareHouse({WH}) {
    const inputstyle={
        marginTop:"5%",
      
    }

    const lableStyle={
        marginTop:"3.5%",
      
    }

    return (<>
         <AdminNavBar></AdminNavBar>
         <h1 style={{textAlign:"center",marginTop:"5%"}}>مخزن جديد</h1>

<Container fluid style={{padding:"1%"}}>


    <Form>
    <Row>
    <Col>
    <Row style={inputstyle }>
    <Form.Control type="text" style={{width:'40%', marginLeft:'50%', borderRadius:'20px 20px'}} />
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="text" style={{width:'40%', marginLeft:'50%', borderRadius:'20px 20px'}}/>
    </Row> 
    <Row style={inputstyle}>
    <Form.Select style={{width:'40%', marginLeft:'50%', borderRadius:'20px 20px'}} aria-label="Default select example">
        <option>اختر من الاقسام المتاحه</option>
        <option value="1">قسم قيزياء</option>
        <option value="2">قسم حاسب الي</option>
        <option value="3">قسم كيمياء</option>
        <option value="4">قسم نبات</option>
        <option value="5">قسم حيوان</option>
        <option value="6">قسم علوم بحار</option>
    </Form.Select>
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="text" style={{width:'40%', marginLeft:'50%', borderRadius:'20px 20px'}} />
    </Row> 
    <Row style={inputstyle}>
    <Form.Control type="date" name='date' style={{width:'40%', marginLeft:'50%', borderRadius:'20px 20px'}}/>
    </Row> 
    </Col>

    <Col>
    <Row style={{textAlign:"right", padding: "2%" , marginRight:"60%", marginTop:'5%'}}>
    <Form.Label ><h5>اسم المخزن</h5></Form.Label>
        </Row>
        <Row style={{textAlign:"right", padding: "2%"  , marginRight:"60%" }}>
    <Form.Label><h5>موقع المخزن</h5></Form.Label>
        </Row>
        <Row style={{textAlign:"right", padding: "2%"  , marginRight:"60%" }}>
    <Form.Label><h5>القسم التابع له المخزن</h5></Form.Label>
        </Row> 
        <Row style={{textAlign:"right", padding: "2%"  , marginRight:"60%" , marginTop:'1%'}}>
    <Form.Label><h5>مدير المخزن</h5></Form.Label>
        </Row> 
        <Row style={{textAlign:"right", padding: "2%"  , marginRight:"60%" , marginTop:'1%' }}>
    <Form.Label><h5>تاريخ الانشاء</h5></Form.Label>
        </Row>  
            
        
         </Col>
    

    </Row>

    <Row style={{justifyContent:"centre",width:"100%"}}>
    <Col ></Col>
    <Col style={{textAllign:"centre"}}> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{textAlign:"center"}} >
      <Form.Label ><h3   style={{textAlign:"center",marginTop:"5%"}}>الوصف</h3></Form.Label>
      <Form.Control as="textarea" rows={7} />
    </Form.Group></Col>
    <Col > </Col>
   
    </Row>
    </Form>
</Container>

         </>
         )
        }
        export default AddWareHouse