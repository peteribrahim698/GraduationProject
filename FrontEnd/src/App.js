import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import {useState} from "react"
import NavBar from "./pages/Examination Comitee/NavBar"
import Report from "./pages/Examination Comitee/Report"
import RefundsDashboard from "./pages/Examination Comitee/RefundsDashboard"
import TestData from "./data/TestData"
import TableTemp from "./components/TableTemp"
import TableData from "./data/TableData"
import RefundTable from "./pages/Examination Comitee/RefundTable"
import Item from "./pages/Examination Comitee/Item"


function App(){

    const[Data ,setData] =useState(TestData)
    const[td ,settd] =useState(TableData)
   

    return (

        
        <Router>
        <Routes>
        <Route path="/" element={
            <NavBar></NavBar>
        }>
        </Route>
        <Route path="/Report" element={
            <><NavBar></NavBar>
            <Report></Report></>
            

        }></Route>


        <Route path="/RefundsDashboard" element={
         <> <RefundsDashboard Refund={Data}></RefundsDashboard></>
            

        }></Route>


        <Route path="/RefundTable/:id" element={
         <> <RefundTable tdata={td}></RefundTable></>
            

        }></Route>

        <Route path="/item/:id/:name" element={
         <> <Item></Item> </>
            
        }></Route>

        
        

        
        </Routes>

        
        </Router>

      
        
        
    )
}

export default App