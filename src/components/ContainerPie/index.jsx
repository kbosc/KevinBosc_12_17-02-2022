import React, { useState, useEffect } from 'react';
import Loader from "../Loader";
import Error from "../Error";
import ChartPie from "../../components/Charts/ChartPie";

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
                <span>{userData?.todayScore * 100}%</span>
                de votre objectif
            </p>
        </div>
    );
}