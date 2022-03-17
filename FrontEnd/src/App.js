import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {useState} from "react"
import { Container,Row,Col,Button } from 'react-bootstrap'
import{Link} from "react-router-dom"
import NavBar from "./pages/Examination Comitee/NavBar"
import Report from "./pages/Examination Comitee/Report"
import RefundsDashboard from "./pages/Examination Comitee/RefundsDashboard"
import TestData from "./data/TestData"
import TableTemp from "./components/TableTemp"
import TableData from "./data/TableData"
import RefundTable from "./pages/Examination Comitee/RefundTable"
import Item from "./pages/Examination Comitee/Item"
import MainControl from "./pages/Examination Comitee/MainControl"
import AdminNavBar from "./pages/Admin/AdminNavBar"

function App(){
    
    const[Data ,setData] =useState(TestData)
    const[td ,settd] =useState(TableData)
   
   

    return (

        
        <>
     
        
      <Router>
          <Routes>
              <Route path="/" element={
                  <MainControl></MainControl>
              }></Route>
            
              //this is examineComitee routes

              <Route path="/ExamineMain" element={
            <NavBar></NavBar>
        }></Route>

        <Route path="/ExamineMain/Report" element={
            <><NavBar></NavBar>
            <Report></Report></>
            

        }></Route>

        <Route path="/ExamineMain/RefundsDashboard" element={
         <> <RefundsDashboard Refund={Data}></RefundsDashboard></>
            

        }></Route>


        <Route path="/ExamineMain/RefundTable/:id" element={
         <> <RefundTable tdata={td}></RefundTable></>
        
        }></Route>
        <Route path="/ExamineMain/item/:id/:name" element={
         <> <Item></Item> </>
            
        }></Route>

        
                                                        //this is Admin routes
             
        <Route path="/AdminNav" element={
         <> <AdminNavBar></AdminNavBar> </>
            
        }></Route>
          </Routes>
      </Router>
    

        </>
        
      
       
       
      
        
        
    )
}

export default App