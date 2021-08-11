import React from 'react'
import BarChart from './utils/BarChart'
import './Main.css'
import Header from '../components/template/header/Header'


export default props =>

   <React.Fragment>
       <Header {...props}/>
       
       <main className="content">
            <div >
                {props.children}
            </div>
            <div>
                <BarChart/>
            </div>
       </main>
   </React.Fragment>