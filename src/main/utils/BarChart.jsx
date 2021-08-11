import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return(
        <div>
            <Bar
            
            data={{
                labels:['jan','fev','mar','abr','mai','jun'],
                datasets:[
                    {
                        label:'# Chamados',
                        data: [12,19,3,5,2,3],
                        backgroundColor: 'blue'
                    },
                ],


            }}

            height={2}
            width={5}
            

            
            
            />
        </div>
    )
}
   
export default BarChart






