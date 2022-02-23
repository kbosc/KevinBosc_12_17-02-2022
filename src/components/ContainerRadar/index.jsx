/**
 * Performance chart
 * Rendering component container with label and radar chart component
 * @param {object} data - User's data given by parent who fetched from external service
 * @returns Container with label and radar chart component 
 */
import React, { useState, useEffect } from 'react';
import Loader from "../Loader";
import Error from "../Error";
import ChartRadar from "../../components/Charts/ChartRadar";
import PropTypes from "prop-types";

ContainerRadar.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function ContainerRadar({data}) {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        if (data.isLoading) return;
        if (data.error) return;
        return setUserData(data.data);
    }, [data]);

    if (data.isLoading) return <Loader />;
    if (data.error) return <Error />;

    return (
        <div className='container-graph__left__bottom__radar'>
            <ChartRadar data={userData} />
        </div>
    );
}
