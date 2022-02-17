import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header(props) {
    return (
        <header>
            <ul>
                <li><span><Logo /> SportSee</span></li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </header>
    );
}