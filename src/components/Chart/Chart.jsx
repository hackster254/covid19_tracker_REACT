//create basic functional componelnt
import React, {useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

import { Line, Bar} from 'react-chartjs-2';
import styles  from './Chart.module.css';


const Charts = ({ data, country }) => {
    //specify state and provide intital value as empty
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI= async () => {
            //const dailyData  = await fetchDailyData();

            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);


        fetchAPI();
    }, []);

    const lineChart = (
         
        //make it dynamic and object second{}
        // if daily data is available return linechart
            dailyData.length 
                ? (
                    <Line
                        data = {{
                            labels: dailyData.map(({date }) => date ),
                            datasets: [{
                                data: dailyData.map(({ confirmed }) => confirmed),
                                label: 'infected',
                                borderColor: '#3333ff',
                                fill: true,
                            }, {
                                    data: dailyData.map(({ deaths }) => deaths),
                                    label: 'Deaths',
                                    backgroundColor: 'rgba(255,0,0,0.5)',
                                    borderColor: 'red',
                                    fill: true,
                                },],
                        }}
                    />) : null
        );
        

        console.log(data.confirmed, data.recovered, data.deaths);

     
    const barChart = (
        data.confirmed
        ?( 
            <Bar 
                 data={{

                    labels: [' Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,255,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]

                 }}
                 options= {{
                     legend: { display: false},
                     title: { display: true, text: `Current state in ${country}`},
                 }}
            
            />
        ) : null

    );
    
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;