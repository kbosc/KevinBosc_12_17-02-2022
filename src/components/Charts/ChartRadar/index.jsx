/**
 * Performance chart
 * Rendering component of radar chart
 * @param {object} data - User's data given by parent
 * @returns Radar chart with data of param
 */

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

ChartRadar.propTypes = {
  data: PropTypes.object
};

export default function ChartRadar({data}) {
  const arrayDataModifiedForRecharts = []
  
  if (data && data.data) {
    data.data.reverse();
    
    data.data.forEach((item) => {
      arrayDataModifiedForRecharts.push({
        subject: data.kind[item.kind],
        A: item.value
      })
    });
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={arrayDataModifiedForRecharts}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis 
        dataKey="subject"
        stroke="white"
        tickLine={false}
        tick={{
            fontSize: 10,
            fontWeight: 500,
        }}
        />
        <Radar 
          dataKey="A"
          fill="#ff0101"
          fillOpacity={0.7}
          stroke="transparent" 
        />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}