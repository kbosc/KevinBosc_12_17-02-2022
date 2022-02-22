import React from 'react';
import ContainerPie from "../../components/ContainerPie";
import ContainerRadar from "../../components/ContainerRadar";
import ContainerBar from "../../components/ContainerBar";
import ContainerLine from "../../components/ContainerLine";

export default function GraphTracker({dataActivity, dataAverage, dataPerformance, dataUser}) {

    return (
        <div className='container-graph__left'>
            <ContainerBar data={dataActivity} />
            <div className='container-graph__left__bottom'>
                <ContainerLine data={dataAverage} />
                <ContainerRadar data={dataPerformance} />
                <ContainerPie data={dataUser} />
            </div>
        </div>
    );
}
