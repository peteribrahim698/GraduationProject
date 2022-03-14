import React from 'react'
import DashboardItem from '../../components/DashboardItem'
import NavBar from './NavBar'
function RefundsDashboard({Refund}) {
  return (
    <>
    <NavBar></NavBar>
        <h1 style={{textAlign:"center"}}>طلبات الاسترداد</h1>

        
        
        {Refund.map((item)=>{


            return <DashboardItem Key={item.id} item={item}></DashboardItem>
        })}
    </>
  )
}

export default RefundsDashboard