import React, { useState, useEffect } from 'react';
import Loader from "../../Loader";
import Error from "../../Error";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';




export default function ChartLine({data}) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setUserData(data.data);
  }, [data]);
  
  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;

  const arrayDataModifiedForRecharts = []

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
        // return <p className="custom-tooltip-line">{payload[0].value} min</p>;
      }
      return null;
    }

    // function onPieEnter(e){
    // 	console.log(e);
    //   if(e){
    //     let toolTipWrapper = document.getElementsByClassName("recharts-tooltip-wrapper")[0];
    //     toolTipWrapper.style.transition = 'transform 400ms ease 0s';
    //     toolTipWrapper.style.transform = "translate("+ (e.chartX + 10) +"px, "+ (e.chartY + 10) +"px)";
    //   }
    // }

    return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
        data={arrayDataModifiedForRecharts}
        margin={{
          top: 0,
          right: 10,
          left: 10,
          bottom: 20,
        }}
        // onMouseMove={onPieEnter}
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
        // wrapperStyle={{ 
        // backgroundColor: "white", 
        // width: "5px", 
        // height: "2px", 
        // }} 
        // labelStyle={{ color: "transparent" }}
        // itemStyle={{ color: "black", 
        //     // fontSize: "18px", 
        //     // fontWeight: "500", 
        //     // lineHeight: "24px",
        // }}
        // // content={`${userData.sessionLength} min`}
        cursor={{
            stroke: "rgba(0, 0, 0, 0.1)",
            strokeWidth: 79
        }}
        content={CustomTooltip}
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