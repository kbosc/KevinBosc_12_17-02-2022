/**
 * Score chart
 * Rendering component container with label and line score component
 * @param {object} data -  User's data given by parent who fetched from external service
 * @returns Container with label and pie chart component 
 */

import React, { useState, useEffect } from 'react';
import Loader from "../Loader";
import Error from "../Error";
import ChartPie from "../../components/Charts/ChartPie";
import PropTypes from "prop-types";

ContainerPie.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function ContainerPie({data}) {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        if (data.isLoading) return;
        if (data.error) return;
        return setUserData(data.data);
    }, [data]);

    if (data.isLoading) return <Loader />;
    if (data.error) return <Error />;

    return (
        <div className='container-graph__left__bottom__pie'>
            <ChartPie data={userData}/>
            <p className='container-graph__left__bottom__pie__title'>Score</p>
            <p className='container-graph__left__bottom__pie__goal'>
                <span>{userData?.todayScore * 100 }%</span>
                de votre objectif
            </p>
        </div>
    );
}