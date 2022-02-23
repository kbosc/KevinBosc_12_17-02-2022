/**
 * Score chart
 * Rendering component of pie chart
 * @param {object} data - User's data given by parent
 * @returns Pie chart with data of param
 */

import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

ChartPie.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.object,
  }).isRequired,
};

export default function ChartPie({data}) {
    const score = [
        { name: "toDo", value: 100 - data?.todayScore * 100 },
        { name: "completed", value: data?.todayScore * 100 },
    ];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
        <Pie
        dataKey="value"
        data={score}
        fill="#FF0000"
        innerRadius={68}
        outerRadius={80}
        startAngle={80}
        endAngle={480}
        >
        {score.map((entry, index) => (
          <Cell key={`cell-${index}`} cornerRadius="50%" fill={index === 0 ? "none" : "#FF0000"} />
        ))}
        </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}