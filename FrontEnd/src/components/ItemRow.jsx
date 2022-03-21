import React from 'react'
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import{Link} from "react-router-dom"
function ItemRow({item}) {

    const style={
        backgroundColor:"white",
        color:"black",
        borderRadius: "10px",
        marginTop:"5%",
        padding:"1%",
        border: '5px solid #448AE5', 
    }
  return (
    <Container style={style}>
    <Row className="justify-content-end">
    
    <Col >
    
    
    <Link to={`/ExamineMain/item/${item.id}/${item.Name}`}><Button type="submit" style={{float:'left',backgroundColor:"#448AE5",color:'black'
    }}>تعديل</Button></Link>
    
    </Col>
    
    <Col sm m lg="auto">
    <h5> {item.date} :التاريخ</h5>
    </Col>
    
    
    <Col sm m lg="auto">
    <h5 > اسم الصنف : {item.Name} </h5>
    
    
    </Col>
    
    <Col sm m lg="auto">
    <h5>  {item.id}: رقم الصنف</h5>
    </Col>
    
    
    
    </Row>
    
    
    </Container>
  )
}

export default ItemRow