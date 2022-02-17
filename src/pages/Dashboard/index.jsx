import React from 'react';
import Navbar from "../../components/Navbar";
import { ReactComponent as Calories } from "../../assets/calories.svg";
import { ReactComponent as Protein } from "../../assets/protein.svg";
import { ReactComponent as Carbs } from "../../assets/carbs.svg";
import { ReactComponent as Fat } from "../../assets/fat.svg";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import ChartBar from "../../components/Charts/ChartBar";
import ChartLine from "../../components/Charts/ChartLine";
import ChartPie from "../../components/Charts/ChartPie";
import ChartRadar from "../../components/Charts/ChartRadar";

export default function Home(props) {
    return (
        <main>
            <Navbar />
            <div className='container-main'>
                <div className='container-main__up'>
                    <h1>Bonjour <span>Thomas</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='container-graph'>
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
                            {/* <div className='container-graph__left__bottom__line'><ChartLine /></div> */}
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
                    <aside className='container-graph__right'>
                        <div>
                            <Calories />
                            <p>
                                <span className='measure'>1,930kCal</span>
                                <span>Calories</span>
                            </p>
                        </div>
                        <div>
                            <Protein />
                            <p>
                                <span className='measure'>1,930kCal</span>
                                <span>Calories</span>
                            </p>
                        </div>
                        <div>
                            <Carbs />
                            <p>
                                <span className='measure'>1,930kCal</span>
                                <span>Calories</span>
                            </p>
                        </div>
                        <div>
                            <Fat />
                            <p>
                                <span className='measure'>1,930kCal</span>
                                <span>Calories</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}