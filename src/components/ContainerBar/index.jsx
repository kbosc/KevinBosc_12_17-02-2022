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