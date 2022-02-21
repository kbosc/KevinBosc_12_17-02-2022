import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <ul>
                <li><span><Logo /> SportSee</span></li>
                <li><Link to="/">Accueil</Link></li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </header>
    );
}