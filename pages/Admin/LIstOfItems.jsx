import React from 'react'
import ItemRow from '../../components/ItemRow'
import AdminNavBar from './AdminNavBar'
import{Link} from "react-router-dom"
import { Container,Row,Col,Button,FormGroup,FormLabel,FormControl } from 'react-bootstrap'
function LIstOfItems({aylist}) {
  return (
    <>
        <AdminNavBar></AdminNavBar>
        <h1 style={{textAlign:"center"}}>الاصناف الموجوده</h1>

        
        
        {aylist.map((item)=>{


            return <ItemRow key={item.id} item={item}></ItemRow>
        })}

        <Link to="/Admin/NewItem"><Button style={{marginTop:"5%",marginLeft:"10%"}}>اضافه صنف جديد</Button></Link>
    </>
  )
}

export default LIstOfItems