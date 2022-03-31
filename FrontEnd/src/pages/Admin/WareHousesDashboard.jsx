import React from 'react'
import WareHouse from '../../components/WareHouse'
import AdminNavBar from './AdminNavBar'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
import SearchPage from '../../components/SearchPage'

function WareHousesDashboard({WH}) {

  return (<>
       <AdminNavBar></AdminNavBar>

       <h1 style={{textAlign:"center",marginTop:"5%"}}>المخازن المتاحه</h1>

       <Container> 
        <Row>
        <Col style={{float:"right", marginTop:"6%"}}><SearchPage ></SearchPage></Col>
        </Row>
        </Container>

       {WH.map((item)=>{


        return <WareHouse key={item.id} item={item}></WareHouse>
       })}

       
  </>
  
  )
}

export default WareHousesDashboard