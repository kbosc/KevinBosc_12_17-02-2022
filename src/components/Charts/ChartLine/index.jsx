/**
 * Average Session chart
 * Rendering component of line chart
 * @param {object} data - User's data given by parent
 * @returns Line chart with data of param
 */

import React, { useState, useEffect } from 'react';
import Loader from "../../Loader";
import Error from "../../Error";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

ChartLine.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};




export default function ChartLine({data}) {
  const [userData, setUserData] = useState({});
  const arrayDataModifiedForRecharts = []

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setUserData(data.data);
  }, [data]);
  
  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;


  if (data && userData.sessions) {
    const weekday = ["L", "M", "M", "J", "V", "S", "D" ]
    userData.sessions.forEach((item, index) => {
      
      arrayDataModifiedForRecharts.push({
        name: weekday[index],
        pv: item.sessionLength
      })
    });
  }

  function CustomTooltip({ payload, active }) {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-line">
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
      width={500}
      height={300}
      data={arrayDataModifiedForRecharts}
      margin={{
        top: 0,
        right: 10,
        left: 10,
        bottom: 20,
      }}
      >
      <XAxis 
      dataKey="name"
      stroke="rgba(255, 255, 255, 0.6)"
      axisLine={false}
      dy={10}
      tickLine={false}
      tick={{
        fill : 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
        fontWeight: 500,
      }}
      dx={0}
      interval="preserveStartEnd"
      />
      <YAxis 
      domain={["dataMin-30", "dataMax+40"]}
      hide={true}
      tickLine={false}
      axisLine={false}
      tickCount={0}
      padding={{ top: 0, bottom: -20 }}
      />
      <Tooltip
      cursor={{
        stroke: "rgba(0, 0, 0, 0.1)",
        strokeWidth: 79
      }}
        content={<CustomTooltip />} 
      />
      <Line 
      type="monotone" 
      dataKey="pv" 
      stroke="rgba(255, 255, 255, 0.6)"                  
      strokeWidth={2}                   
      dot={false}                    
      activeDot={{             
        stroke: "rgba(255,255,255, 0.6)",                
        strokeWidth: 10,              
        r: 4, 
      }}
      />
      </LineChart>
    </ResponsiveContainer>
  );
}