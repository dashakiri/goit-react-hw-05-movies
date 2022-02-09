import { Container } from "../../views/homeView/HomeView.styled";
import { NavLinks, StyledNavLink, StyledLogo } from "./Navigation.styled";
import { SiThemoviedatabase } from 'react-icons/si';

const Navigation = () => {
return <Container>
    <NavLinks>

    <StyledLogo
    exact
    to="/"    
    >
    <SiThemoviedatabase/>   
    </StyledLogo>

    <div>
    <StyledNavLink
    exact
    to="/"    
    >
        home
    </StyledNavLink>

    <StyledNavLink
    to="/movie"
    >
        movie
    </StyledNavLink>
    </div>
    </NavLinks>
</Container>
};

export default Navigation;