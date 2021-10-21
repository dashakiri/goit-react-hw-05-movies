import { useHistory, useLocation } from "react-router-dom";
import { Button } from "../searchForm/searchForm.styled";
import { Container, TextDescrContaier, Image, TextWrap } from "./MovieDescription.styled";
import { StyledLink } from "../navigation/Navigation.styled";

export default function MovieDescription({title, vote_average, overview, genres, backdrop_path, url}) {
    const history = useHistory();
    const location = useLocation();
        
    const onGoBack = () => {
        history.push(location?.state?.from?.location ?? '/')
    };
    
    return (
    <Container>
        <Button type="button" onClick={onGoBack}>
        {location?.state?.from?.label ?? 'Go back'}    
        </Button>
        <TextDescrContaier>
           <Image src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}/>
            <TextWrap>
            <h2>{title}</h2>
            <p>User Score: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3> 
            <p>{genres}</p> 
            </TextWrap>
        </TextDescrContaier> 
        <div>           
            <StyledLink to={{
                pathname: `${url}/cast`,
                from: {
                    location
                }
            }}>Cast</StyledLink>
            <StyledLink to={{
                pathname: `${url}/reviews`,
                from: {
                    location
                }
            }}>Reviews</StyledLink> 
        </div>
    </Container>
       
    )
};