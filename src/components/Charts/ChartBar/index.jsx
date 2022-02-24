/**
 * Activity chart
 * Rendering component of bar chart
 * @param {object} data - User's data given by parent
 * @returns Bar chart with data of param
 */

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
import PropTypes from "prop-types";

ChartBar.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};


export default function ChartBar({ data }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setUserData(data.data);
  }, [data]);
  
  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;

  /**
   * @param {bool} active
   * @param {Array} payload
  */
  const CustomTooltip = ({ active, payload }) => {
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
  
  /**
   * 
   * @param {number} tickItem 
   */
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
      axisLine={false}
      tickLine={false}
      tickSize="50"
      />
      <Tooltip
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
  );
}