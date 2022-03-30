import React from 'react'
import WareHouse from '../../components/WareHouse'
import AdminNavBar from './AdminNavBar'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'


function WareHousesDashboard({WH}) {

  return (<>
       <AdminNavBar></AdminNavBar>

       <h1 style={{textAlign:"center"}}>المخازن المتاحه</h1>

       {WH.map((item)=>{


        return <WareHouse key={item.id} item={item}></WareHouse>
       })}

       <Link to="/Admin/NewWarehouse"><Button style={{marginTop:"5%",marginLeft:"10%"}}>اضافه مخزن جديد</Button></Link>
  </>
  
  )
}

export default WareHousesDashboard