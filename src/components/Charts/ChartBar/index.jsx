import React, { useState, useEffect } from 'react';
import Loader from "../../Loader";
import Error from "../../Error";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function ChartBar({ data }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setUserData(data.data);
  }, [data]);
  
  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;
  
  // const arrayDataModifiedForRecharts = []

  // userData.sessions.forEach((item, index) => {
  //     arrayDataModifiedForRecharts.push({
  //       name: index + 1,
  //       weight: item.kilogram,
  //       Kcal: item.calories,
  //     })
  //   });
  
  //   console.log(userData.sessions);

  // const dataMock = [
  //       {
  //         name: '1',
  //         weight: 69,
  //         Kcal: 300,
  //       },
  //       {
  //         name: '2',
  //         weight: 71,
  //         Kcal: 250,
  //       },
  //       {
  //         name: '3',
  //         weight: 69,
  //         Kcal: 300,
  //       },
  //       {
  //         name: '4',
  //         weight: 71,
  //         Kcal: 250,
  //       },
  // ]

  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p> {`${payload[0].value} kg`}</p>
          <p> {`${payload[1].value} kCal`}</p>
        </div>
      );
    }
    return null;
  };
  
  const formatXAxis = (tickItem) => {
    return tickItem + 1;
  };
  

  return (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={userData.sessions}
          margin={{
            top: 50,
            right: 50,
            left: 50,
            bottom: 30,
          }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#dedede" />
          <XAxis
            tickFormatter={formatXAxis}
            tick={{ fill: "#9b9eac", fontSize: 14 }}
            tickLine={false}
            stroke="#dedede"
            padding={{ left: -47, right: -47 }}
            dy={8} 
          />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin-2", "dataMax+2"]}
            // domain={["auto", "auto"]}
            axisLine={false}
            tickLine={false}
            tickSize="50"
          />
          <Tooltip
            // position={{ y: 20 }}
            cursor={{
              fill: "#C4C4C4",
              fillOpacity: "0.5",
            }}
            content={<CustomTooltip />}
          />

          <Bar yAxisId="right" dataKey="kilogram" fill="black" radius={[50, 50, 0, 0]} maxBarSize={12} />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={12} />
        </BarChart>
      </ResponsiveContainer>
    // <ResponsiveContainer width="100%" height={300}>
    //   <BarChart
    //     width={500}
    //     height={300}
    //     data={arrayDataModifiedForRecharts}
    //     margin={{
    //       top: 50,
    //       right: 0,
    //       left: 0,
    //       bottom: 25
    //     }}
    //   >
    //     <CartesianGrid 
    //       strokeDasharray="3 3"
    //       vertical={false}  
    //     />
    //     <XAxis 
    //       dataKey="name"
    //       tickLine={false}
    //       tick={{ fontSize: 14 }}
    //       dy={10} 
    //     />
    //     <YAxis yAxisId="left" orientation="left" hide={true} />
    //     <YAxis
    //     yAxisId="right"
    //       // dataKey="weight"
    //       orientation="right"
    //       domain={["dataMin-2", "dataMin+2"]}
    //       tickLine={false}
    //       axisLine={false}
    //       tickCount={3}
    //       tick={{ fontSize: 14, fill: '#74798c'}}
    //     />
    //     <YAxis 
    //       stroke="#82ca9d" 
    //       hide={true} 
    //     />
    //     <Tooltip 
    //       content={<CustomTooltip />}
    //     />
    //     <Bar yAxisId="right" dataKey="weight" fill="#282D30" radius={[50, 50, 0, 0]} maxBarSize={12} barGap={0} barCategoryGap={0} />
    //     <Bar yAxisId="left" dataKey="Kcal" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={12} barGap={0} barCategoryGap={0} />
    //   </BarChart>
    // </ResponsiveContainer>
  );
}