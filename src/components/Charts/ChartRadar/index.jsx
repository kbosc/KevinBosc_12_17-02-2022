import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function ChartRadar(props) {
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis 
                    dataKey="subject"
                    stroke="white"
                    tickLine={false}
                    tick={{
                        dy: 3,
                        fontSize: 12,
                        fontWeight: 500,
                    }}
                 />
                <Radar 
                    name="Mike" 
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

const data = [
    {
      subject: 'Intensité',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Vitesse',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Force',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Endurance',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Energie',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Cardio',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];