import React from 'react';
import { ReactComponent as Dot } from "../../assets/dot.svg";
import ChartBar from "../../components/Charts/ChartBar";
import ChartLine from "../../components/Charts/ChartLine";
import ContainerPie from "../../components/ContainerPie";
import ContainerRadar from "../../components/ContainerRadar";
import ChartRadar from "../../components/Charts/ChartRadar";

export default function GraphTracker({dataActivity, dataAverage, dataPerformance, dataUser}) {
    // const [activity, setActivity] = useState({});
    // const [average, setAverage] = useState({});
    // const [performance, setPerformance] = useState({});
    // const [user, setUser] = useState({});
    
    // useEffect(() => {
    //     if (dataUser.isLoading) return;
    //     if (dataUser.error) return;
    //     return setUser(user.data);
    // }, [dataUser]);

    // if (dataUser.isLoading) return <Loader />;
    // if (dataUser.error) return <Error />;

    // console.log(user);

    return (
        <div className='container-graph__left'>
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
                                <ChartBar data={dataActivity} />
                            </div>
                        </div>
                        <div className='container-graph__left__bottom'>
                            <div className='container-graph__left__bottom__line'>
                                <ChartLine />
                                <p>Durée moyenne des sessions</p>
                            </div>
                            <ContainerRadar data={dataPerformance} />
                            <ContainerPie data={dataUser} />
                        </div>
                    </div>
    );
}
