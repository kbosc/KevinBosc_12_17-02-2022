import React from 'react';
import ChartLine from "../../components/Charts/ChartLine";

function ContainerLine({data}) {
    return (
        <div className='container-graph__left__bottom__line'>
            <ChartLine
            data={data}
            />
            <p>Durée moyenne des sessions</p>
        </div>
    );
}

export default ContainerLine;