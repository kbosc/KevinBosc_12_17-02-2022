/**
 * @function - Creating dashboard using external service for fetch 
 * @param {number} id - ID of the user given by the URL
 * @author Kevin Bosc <bosc.kev@gmail.com>
 */
import { useParams } from "react-router-dom";
import GetData from "../../services/GetData";
import MacroTracker from '../../components/MacroTracker';
import GraphTracker from '../../components/GraphTracker';
import Welcome from '../../components/Welcome';
import Error from "../../components/Error";
import Loader from "../../components/Loader";

export default function Dashboard() {
    const { id } = useParams();
    const userData = GetData(id, "user");
    const activityData = GetData(id, "activity");
    const averageData = GetData(id, "average");
    const performanceData = GetData(id, "performance");


    if (userData.isLoading) return <Loader />;
    if (userData.error) return <Error />;

    return (
        <main>
            <div className='container-main'>
                <Welcome data={userData} />
                <div className='container-graph'>
                    <GraphTracker 
                        dataActivity={activityData} 
                        dataAverage={averageData}
                        dataPerformance={performanceData}
                        dataUser={userData} 
                    />
                    <MacroTracker data={userData} />
                </div>
            </div>
        </main>
    );
}