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
  ResponsiveContainer,
} from "recharts";


export default function CharBar(props) {
    return (
      <ResponsiveContainer width="100%" height={300}>
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
            orientation="right" 
            tickLine={false}
            axisLine={false}
            tickCount={3}
            tick={{ fontSize: 14, fill: '#74798c'}}
          />
          <YAxis 
            stroke="#82ca9d" 
            hide={true} 
          />
          <Tooltip 
            wrapperStyle={{ backgroundColor: "#E60000", width: "40px", height: "65px" }} 
            labelStyle={{ color: "green" }}
            itemStyle={{ color: "red", fontSize: "7px", fontWeight: "500", lineHeight: "24px" }}
            // content={<CustomTooltip />}
          />
          <Bar dataKey="weight" fill="#282D30" radius={[50, 50, 0, 0]} maxBarSize={12} barGap={0} barCategoryGap={0} />
          <Bar dataKey="Kcal" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={12} barGap={0} barCategoryGap={0} />
        </BarChart>
      </ResponsiveContainer>
    );
}

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p> {`${payload[0].value} kg`}</p>
//         <p> {`${payload[1].value} kCal`}</p>
//       </div>
//     );
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