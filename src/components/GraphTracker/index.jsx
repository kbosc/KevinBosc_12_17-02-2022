import React from 'react';
import { ReactComponent as Dot } from "../../assets/dot.svg";
import ChartBar from "../../components/Charts/ChartBar";
import ChartLine from "../../components/Charts/ChartLine";
import ChartPie from "../../components/Charts/ChartPie";
import ChartRadar from "../../components/Charts/ChartRadar";

export default function GraphTracker(props) {
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
                                <ChartBar />
                            </div>
                        </div>
                        <div className='container-graph__left__bottom'>
                            <div className='container-graph__left__bottom__line'>
                                <ChartLine />
                                <p>Durée moyenne des sessions</p>
                            </div>
                            <div className='container-graph__left__bottom__radar'>
                                <ChartRadar />
                            </div>
                            <div className='container-graph__left__bottom__pie'>
                                <ChartPie />
                                <p className='container-graph__left__bottom__pie__title'>Score</p>
                                <p className='container-graph__left__bottom__pie__goal'>
                                    <span>12%</span>
                                    de votre objectif
                                </p>
                            </div>
                        </div>
                    </div>
    );
}
