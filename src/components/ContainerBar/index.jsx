/**
 * Activity chart
 * Rendering component container with label and bar chart component 
 * @param {object} data - User's data given by parent who fetched from external service
 * @returns Container with label and bar chart component 
 */

import React from 'react';
import { ReactComponent as Dot } from "../../assets/dot.svg";
import ChartBar from "../../components/Charts/ChartBar";

export default function ContainerBar({data}) {
    return (
        <div className='container-graph__left__up'>
            <div className='container-graph__left__up__text'>
                <p>Activité quotidienne</p>
                <div>
                    <p>
                        <Dot />
                        Poids (kg)
                    </p>
                    <p>
                        <Dot fill='red'/>
                        Calories brûlées (kCal)
                    </p>
                </div>
            </div>
            <div className='container-graph__left__up__graph'>
                <ChartBar data={data} />
            </div>
        </div>
    );
}