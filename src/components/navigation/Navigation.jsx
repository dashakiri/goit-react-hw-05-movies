import { Header, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
return <Header>
    <StyledNavLink
    exact
    to="/"    
    >
        Home
    </StyledNavLink>

    <StyledNavLink
    to="/movie"
    >
        Movie
    </StyledNavLink>
</Header>
};

export default Navigation;