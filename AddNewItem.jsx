import React from 'react'
import AdminNavBar from './AdminNavBar'
import {Nav , Navbar , NavDropdown } from 'react-bootstrap'
import{Link} from "react-router-dom"
import {Form,FormControl,FormGroup,FormLabel,Row,Col,Button, Container} from 'react-bootstrap'


function AddNewItem({ANI}) {
    const inputstyle={
        marginTop:"5%",
      
    }

    const lableStyle={
        marginTop:"3.5%",
      
    }

    return (<>
         <AdminNavBar></AdminNavBar>
         <Container fluid style={{padding:"1%"}}>


<Form>
<Row>
<Col>
<Row style={{textAlign:"right" , padding: "1%",  marginRight:'30%'}}>
<Form.Label><h5> الوحدة</h5></Form.Label>
    </Row>
<Row style={inputstyle}>
<Form.Control type="text" style={{width:'40%', marginLeft:'40%', borderRadius:'20px 20px' , marginBottom:'10%' , marginTop:'-5%'}} />
</Row> 

</Col>

<Col>
<Row style={{textAlign:"right", padding: "1%" , marginRight:'30%' }}>
<Form.Label ><h5> إسم الصنف</h5></Form.Label>
    </Row>
    <Row style={inputstyle}>
<Form.Control type="text" style={{width:'40%', marginLeft:'40%', borderRadius:'20px 20px' ,  marginBottom:'10%' , marginTop:'-5%'}}/>
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
<Row>
<Col>
<Row style={{textAlign:"right" , padding: "1%",  marginRight:'30%'}}>
<Form.Label><h5> تاريخ الصلاحيه</h5></Form.Label>
    </Row>
<Row style={inputstyle}>
<Form.Control type="text" style={{width:'40%', marginLeft:'40%', borderRadius:'20px 20px' , marginBottom:'10%' , marginTop:'-5%'}} />
</Row> 

</Col>

<Col>
<Row style={{textAlign:"right", padding: "1%" , marginRight:'30%' }}>
<Form.Label ><h5>  تاريخ الإدخال</h5></Form.Label>
    </Row>
    <Row style={inputstyle}>
<Form.Control type="text" style={{width:'40%', marginLeft:'40%', borderRadius:'20px 20px' ,  marginBottom:'10%' , marginTop:'-5%'}}/>
</Row> 
   
     </Col>


</Row>
<Button type='submit' variant="success"  style={{marginTop:"10%",marginLeft:"5%" ,  width:"10%" , height: "10%" }} > إضافه</Button>
</Form>
</Container>

         </>
         )
        }
        export default AddNewItem