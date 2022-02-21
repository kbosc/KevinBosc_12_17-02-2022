import React, { useState, useEffect } from 'react';
import Loader from "../Loader";
import Error from "../Error";
import ChartRadar from "../../components/Charts/ChartRadar";

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
