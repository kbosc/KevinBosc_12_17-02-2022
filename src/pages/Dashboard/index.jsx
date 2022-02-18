import React from 'react';
import Navbar from "../../components/Navbar";
// import { ReactComponent as Calories } from "../../assets/calories.svg";
// import { ReactComponent as Protein } from "../../assets/protein.svg";
// import { ReactComponent as Carbs } from "../../assets/carbs.svg";
// import { ReactComponent as Fat } from "../../assets/fat.svg";
// import { ReactComponent as Dot } from "../../assets/dot.svg";
// import ChartBar from "../../components/Charts/ChartBar";
// import ChartLine from "../../components/Charts/ChartLine";
// import ChartPie from "../../components/Charts/ChartPie";
// import ChartRadar from "../../components/Charts/ChartRadar";
import MacroTracker from '../../components/MacroTracker';
import GraphTracker from '../../components/GraphTracker';
import Welcome from '../../components/Welcome';

export default function Home(props) {
    return (
        <main>
            <Navbar />
            <div className='container-main'>
                <Welcome />
                <div className='container-graph'>
                    <GraphTracker />
                    <MacroTracker />
                </div>
            </div>
        </main>
    );
}