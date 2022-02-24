/**
 * Rendering component VerticalLayout
 */

import React from 'react';
import { ReactComponent as Yogi } from "../../assets/yogi.svg";
import { ReactComponent as Swim } from "../../assets/swim.svg";
import { ReactComponent as Bike } from "../../assets/bike.svg";
import { ReactComponent as Weight } from "../../assets/weight.svg";

export default function VerticalLayout() {
    return (
        <nav>
            <ul>
                <li><Yogi /></li>
                <li><Swim /></li>
                <li><Bike /></li>
                <li><Weight /></li>
            </ul>
            <p>Copiryght, SportSee 2020</p>
        </nav>
    );
}