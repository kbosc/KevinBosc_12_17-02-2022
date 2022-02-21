import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

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