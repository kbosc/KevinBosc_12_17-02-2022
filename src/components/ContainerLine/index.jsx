/**
 * Average Session chart
 * Rendering component container with label and line chart component
 * @param {object} data - User's data given by parent who fetched from external service
 * @returns Container with label and line chart component 
 */

import React from 'react';
import ChartLine from "../../components/Charts/ChartLine";

function ContainerLine({data}) {
    return (
        <div className='container-graph__left__bottom__line'>
            <ChartLine
            data={data}
            />
            <p className='graph-text-line'>Durée moyenne des sessions</p>
        </div>
    );
}

export default ContainerLine;