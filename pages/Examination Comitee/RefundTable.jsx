import React from 'react'
import TableTemp from '../../components/TableTemp'
import NavBar from './NavBar'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import{Link} from "react-router-dom"
import {useParams} from "react-router-dom"


function RefundTable({tdata}) {

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
  return (
   <>

    <NavBar></NavBar>

    
        <h1 style={{textAlign:"center"}}>{prams.id} طلب ارتجاع رقم  </h1>

        <Container style={style}>
  <Row className="justify-content-end">
  <Col sm m lg="9"><h5>:اسم صاحب العهدة</h5></Col>
    <Col sm m lg="auto">
      <h5>:اسم الجهة</h5>
    </Col>
   
  </Row>
  <Row className="justify-content-end">
  <Col sm m lg="9">
  
    
    </Col>
    <Col sm m lg="auto" style={{float:'right'}}>
      <h5 >:تاريخ الطلب</h5>
    </Col>
   
    <Row className="justify-content-end">
    <Col sm m lg="auto">
      <h5>:مخزن</h5>
    </Col>
    
  </Row>
  </Row>
  

  
</Container>

        <Table striped bordered hover size="lg" style={tablestyle} >
  <thead>
    <tr class=" d-flex flex-row-reverse  ">
      <th class="p-2 col px-1 ">رقم الصنف</th>
      <th class="p-2 col px-1">اسم الصنف</th>
      <th class="p-2 col px-1" >الوحده</th>
      <th class="p-2 col px-1">تاريخ الصنف</th>
      <th class="p-2 col px-1">الكميه</th>
      <th class="p-2 col px-1">الكميه المقدره</th>
      <th class="p-2 col px-1">حاله الصنف</th>
      <th class="p-2 col px-1">القيمه المقدره</th>
      <th class="p-2 col px-1">راي لجنه الفحص</th>
      
    </tr>
  </thead>

  <tbody>
    
  {tdata.map((item)=>{

return <TableTemp Key={item.id} item={item}></TableTemp>
})}
  </tbody>
 
</Table>

   </>
  )
}

export default RefundTable