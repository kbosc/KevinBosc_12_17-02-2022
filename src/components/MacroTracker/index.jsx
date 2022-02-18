import React from 'react';
import { ReactComponent as Calories } from "../../assets/calories.svg";
import { ReactComponent as Protein } from "../../assets/protein.svg";
import { ReactComponent as Carbs } from "../../assets/carbs.svg";
import { ReactComponent as Fat } from "../../assets/fat.svg";
// import { ReactComponent as Dot } from "../../assets/dot.svg";

export default function MacroTracker(props) {
    return (
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
    );
}
