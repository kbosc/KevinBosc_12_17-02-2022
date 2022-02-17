import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartLine(props) {
    return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
        //   width={500}
        //   height={300}
          data={data}
          margin={{
            top: 0,
            right: 12,
            left: 12,
            bottom: 24,
          }}
        >
        <XAxis dataKey="name"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
                fill : 'white',
                fontSize: 12,
                fontWeight: 500,
            }} 
        />
        <YAxis 
            // dataKey="sessionLength"
            // domain={[0, "dataMax + 60"]}
            hide={true}
        />
        <Tooltip
            wrapperStyle={{ backgroundColor: "white", 
                width: "40px", 
                height: "25px", 
            }} 
            labelStyle={{ color: "green" }}
            itemStyle={{ color: "black", 
                fontSize: "8px", 
                fontWeight: "500", 
                lineHeight: "24px" ,
            }}
            cursor={{
                stroke: "rgba(0, 0, 0, 0.1)",
                strokeWidth: 32,
            }} 
        />
        <Line type="monotone" 
            dataKey="pv" 
            stroke="rgba(255, 255, 255, 0.6)"
                                
            strokeWidth={2}
                                
            dot={false}
                                
            activeDot={{             
                stroke: "rgba(255,255,255, 0.6)",                
                strokeWidth: 10,              
                r: 5, 
            }}
        />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
    </ResponsiveContainer>

    );
}

const data = [
    {
      name: 'L',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'M',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'M',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'J',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'V',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'S',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'D',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];