// import {BarChart, Bar, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis} from 'recharts';
// import CustomTooltipDailyActivity from 'components/Charts/CustomTooltip/CustomTooltipDailyActivity/CustomTooltipDailyActivity';
// import PropTypes from 'prop-types';
// import React, {Component} from 'react';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
//   Legend
} from "recharts";


export default function CharBar(props) {
    return (
        <div width="100%" height="90%">
            <BarChart className="bar-chart"
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 50,
                    right: 0,
                    left: 0,
                    bottom: 25
                }}
                >
                <CartesianGrid strokeDasharray="3 3"
                    vertical={false}  
                />
                <XAxis 
                    dataKey="name"
                    tickLine={false}
                    tick={{ fontSize: 14 }}
                    dy={10} 
                />
                <YAxis 
                    // dataKey="kilogram" 
                    // yAxisId="left" 
                    // stroke="#8884d8" 
                    // interval="number"
                    // allowDecimals={false}
                    // domain={[this.props.mininumYaxisKg, this.props.maximumYaxisKg]}
                    orientation="right" 
                    tickLine={false}
                    axisLine={false}
                    tickCount={3}
                    tick={{ fontSize: 14, fill: '#74798c'}}
                />
                <YAxis 
                        // dataKey="calories" 
                        // yAxisId="right" 
                        // orientation="right" 
                        stroke="#82ca9d" 
                        hide={true} 
                        // domain={[this.props.minimumYaxisKcal, this.props.maximumYaxisKcal]}
                    />
                <Tooltip  />
                {/* <Legend /> */}
                <Bar dataKey="weight" fill="#282D30" />
                <Bar dataKey="Kcal" fill="#E60000" />
            </BarChart>
        </div>
    );
}

// function getIntroOfPage(label) {
//     if (label === '1') {
//       return 'Page A is about mens clothing';
//     } if (label === '2') {
//       return 'Page B is about womens dress';
//     } if (label === '3') {
//       return 'Page C is about womens bag';
//     } if (label === '4') {
//       return 'Page D is about household goods';
//     } if (label === '5') {
//       return 'Page E is about food';
//     } if (label === '6') {
//       return 'Page F is about baby food';
//     }
//   }
// function CustomTooltip({ payload, label, active }) {
//     if (active) {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`${label} : ${payload[0].value}`}</p>
//           <p className="intro">{getIntroOfPage(label)}</p>
//           <p className="desc">Anything you want can be displayed here.</p>
//         </div>
//       );
//     }
  
//     return null;
//   }

const data = [
    {
      name: '1',
      weight: 4000,
      Kcal: 2400,
      amt: 2400,
    },
    {
      name: '2',
      weight: 3000,
      Kcal: 1398,
      amt: 2210,
    },
    {
      name: '3',
      weight: 2000,
      Kcal: 9800,
      amt: 2290,
    },
    {
      name: '4',
      weight: 2780,
      Kcal: 3908,
      amt: 2000,
    },
    {
      name: '5',
      weight: 1890,
      Kcal: 4800,
      amt: 2181,
    },
    {
      name: '6',
      weight: 2390,
      Kcal: 3800,
      amt: 2500,
    },
    {
      name: '7',
      weight: 3490,
      Kcal: 4300,
      amt: 2100,
    },
    {
      name: '8',
      weight: 3490,
      Kcal: 4300,
      amt: 2100,
    },
    {
      name: '9',
      weight: 3490,
      Kcal: 4300,
      amt: 2100,
    },
    {
      name: '10',
      weight: 3490,
      Kcal: 4300,
      amt: 2100,
    },
  ];