import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <h1> Choisissez votre utilisateur </h1>
      <ul>
        <li>
          <Link to="/user/12">Utilisateur n°12 (Karl)</Link>
        </li>
        <li>
          <Link to="/user/18">Utilisateur n°18 (Cécilia)</Link>
        </li>
      </ul>
    </div>
  );
}