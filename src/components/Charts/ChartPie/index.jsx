import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function ChartPie(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie 
                    data={data02} 
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={250}
                    fill="#FF0000"
                    cornerRadius="50%"
                    />   
                {/* <Cell
                    fill="red"
                    cornerRadius="50%" /> */}
                {/* <Pie/> */}
            </PieChart>
        </ResponsiveContainer>
    //     <ResponsiveContainer width="100%" height="100%">
    //     <PieChart>
    //         <Pie
    //             data={this.props.goalScoreData}
    //             dataKey="value"
    //             innerRadius={70}
    //             outerRadius={80}
    //             startAngle={90}
    //             endAngle={450}
    //         >
    //             {this.props.goalScoreData.map((entry, index) => (
    //                 <Cell
    //                     key={`cell-${index}`}
    //                     fill={entry.fillColor}
    //                     cornerRadius="50%"
    //                 />
    //             ))}
    //         </Pie>
    //     </PieChart>
    // </ResponsiveContainer> 
    );
}

  
  const data02 = [
    { name: 'Group A', value: 2400 },

  ];