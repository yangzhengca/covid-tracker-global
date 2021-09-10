import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'
import styles from './ChartCa.module.css'

const ChartCa = ({ data, country }) => {
    const [ dailyData, setDailyData ] = useState([]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setDailyData( await fetchDailyData() ) 
    //     } 

    //     fetchAPI()
    // },[])

    useEffect(() => {

        setDailyData(data) 

    },[setDailyData])

    // console.log(dailyData)
    const lineChart = (
        dailyData.length ? (<Line 
            data={{
                labels: dailyData.map(({ date_active }) => date_active),
                datasets:[{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
        />) : null        
    )

    // const barChart = (
    //     confirmed ? 
    //         <Bar 
    //             data={{
    //                 labels:['Infected', 'Deaths'],
    //                 datasets: [{
    //                     label: 'People',
    //                     backgroundColor:[
    //                         'rgba(0,0,255,0.5)',
                            
    //                         'rgba(255,0,0,0.5)',
    //                     ],
    //                     data: [ confirmed.value, deaths.value ]
    //                 }]
    //             }}
    //             options={{
    //                 legend: { display: false },
    //                 title: { display: true, text:`Current state in ${country}`}
    //             }}    
    //         /> 
            
    //     : null
    // )

    return (
        <div className={styles.container}>
            {/* {country ? barChart : lineChart} */}
            { lineChart }
        </div>
    )
}

export default ChartCa
