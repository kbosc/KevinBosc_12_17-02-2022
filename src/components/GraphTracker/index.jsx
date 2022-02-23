/**
 * Rendering component GraphTracker
 * @param {object} dataActivity - User's data given by parent who fetched from external service
 * @param {object} dataAverage - User's data given by parent who fetched from external service
 * @param {object} dataPerformance - User's data given by parent who fetched from external service
 * @param {object} dataUser - User's data given by parent who fetched from external service
 */

import React from 'react';
import ContainerPie from "../../components/ContainerPie";
import ContainerRadar from "../../components/ContainerRadar";
import ContainerBar from "../../components/ContainerBar";
import ContainerLine from "../../components/ContainerLine";
import PropTypes from "prop-types";

GraphTracker.propTypes = {
    dataActivity: PropTypes.object,
    dataAverage: PropTypes.object,
    dataPerformance: PropTypes.object,
    dataUser: PropTypes.object,
};

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
