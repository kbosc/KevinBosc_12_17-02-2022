import React, { useState, useEffect } from 'react';
import Loader from "../Loader";
import Error from "../Error";
import PropTypes from "prop-types";

Welcome.propTypes = {
    data: PropTypes.shape({
      isLoading: PropTypes.bool,
      error: PropTypes.bool,
      data: PropTypes.object,
    }).isRequired,
  };

export default function Welcome({ data }) {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        if (data.isLoading) return;
        if (data.error) return;
        return setUserData(data.data);
    }, [data]);

    if (data.isLoading) return <Loader />;
    if (data.error) return <Error />;

    return (
        <div className='container-main__up'>
            <h1>Bonjour <span>{userData?.userInfos?.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}