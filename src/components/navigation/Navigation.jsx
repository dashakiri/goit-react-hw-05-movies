import { NavLink } from "react-router-dom";

const Navigation = () => {
return <div>
    <NavLink
    exact
    to="/"    
    >
        Home
    </NavLink>

    <NavLink
    to="/movie"
    >
        Movie
    </NavLink>
</div>
};

export default Navigation;