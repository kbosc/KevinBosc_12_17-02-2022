import React, { useState, useEffect } from 'react';
import Loader from "../Loader";
import Error from "../Error";
import { ReactComponent as Calories } from "../../assets/calories.svg";
import { ReactComponent as Protein } from "../../assets/protein.svg";
import { ReactComponent as Carbs } from "../../assets/carbs.svg";
import { ReactComponent as Fat } from "../../assets/fat.svg";
// import { ReactComponent as Dot } from "../../assets/dot.svg";

export default function MacroTracker({data}) {
    const [userData, setUserData] = useState({});
    
    useEffect(() => {
        if (data.isLoading) return;
        if (data.error) return;
        return setUserData(data.data);
    }, [data]);

    if (data.isLoading) return <Loader />;
    if (data.error) return <Error />;
    
    return (
        <aside className='container-graph__right'>
                        <div>
                            <Calories />
                            <p>
                                <span className='measure'>{userData?.keyData?.calorieCount}kCal</span>
                                <span>Calories</span>
                            </p>
                        </div>
                        <div>
                            <Protein />
                            <p>
                                <span className='measure'>{userData?.keyData?.proteinCount}g</span>
                                <span>Proteines</span>
                            </p>
                        </div>
                        <div>
                            <Carbs />
                            <p>
                                <span className='measure'>{userData?.keyData?.carbohydrateCount}g</span>
                                <span>Glucides</span>
                            </p>
                        </div>
                        <div>
                            <Fat />
                            <p>
                                <span className='measure'>{userData?.keyData?.lipidCount}g</span>
                                <span>Lipides</span>
                            </p>
                        </div>
                    </aside>
    );
}
