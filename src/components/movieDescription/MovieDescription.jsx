import { useHistory, useLocation } from "react-router-dom";
import { Container, TextDescrContaier, Image, TextWrap, Button, Tagline, Description, DescriptionTitle, CastContainer, StyledLink } from "./MovieDescription.styled";
import {MovieTitleContainer, MovieTitle, SubTitle} from '../../views/movieView/MovieView.styled';
import { VoteAverage } from "../../components/movieDescription/MovieDescription.styled";
import {AiOutlineStar} from "react-icons/ai";
import { SpanVote } from "../../views/homeView/HomeView.styled";


export default function MovieDescription({title, vote_average, overview, genres, poster_path, url, tagline, release_date, runtime}) {
    const history = useHistory();
    const location = useLocation();
        
    const onGoBack = () => {
        history.push(location?.state?.from?.location ?? '/')
    };
    
    return (
    <Container>
        <MovieTitleContainer>
            <SubTitle>movies</SubTitle>
            <MovieTitle>{title}</MovieTitle>
        </MovieTitleContainer>
        <TextDescrContaier>
           <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
            <TextWrap>
            <Tagline>{tagline}</Tagline>
            <Description>{overview}</Description>
            <VoteAverage className="vote-average"><AiOutlineStar/><SpanVote>{vote_average}</SpanVote></VoteAverage>
            <DescriptionTitle>Release date</DescriptionTitle>
            <Description>{release_date}</Description>
            <DescriptionTitle>Run time</DescriptionTitle>
            <Description>{runtime} min</Description>
            <DescriptionTitle>Genres</DescriptionTitle> 
            <Description>{genres}</Description>
            </TextWrap>
        </TextDescrContaier> 
            <CastContainer>     
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
            </CastContainer>
        
        <Button className="vote-average" type="button" onClick={onGoBack}>
        {location?.state?.from?.label ?? 'Go back'}    
        </Button>
    </Container>
       
    )
};