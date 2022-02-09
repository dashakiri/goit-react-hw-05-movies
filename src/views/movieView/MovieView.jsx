import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import {fetchOneMovie} from '../../services/fetchAPI';
import MovieDescription from "../../components/movieDescription/MovieDescription";
import MovieCredits from "../../components/movieCredits/MovieCredits";
import MovieRevies from "../../components/movieReview/MovieReviews";
import { Container } from "../homeView/HomeView.styled";
import { LargeImageContainer, LargeImage, Overlay } from "./MovieView.styled";

export default function MovieView() {
const {url} = useRouteMatch();
const [movie, setMovie] = useState({});
const {movieId} = useParams();

useEffect(() => {
    return fetchOneMovie(movieId).then(setMovie);
}, [movieId]);

const {genres = [], title, vote_average, overview, poster_path, backdrop_path, tagline, release_date, runtime} = movie;

const genreList = (genres) => {
    let genreNames = [];
    genres.map((genre) => (
        genreNames.push(genre.name)
    ))
    return genreNames.join(', ');
};

return (
<Container>
    <LargeImageContainer>
        <LargeImage src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title}/>
        <Overlay></Overlay>
    </LargeImageContainer>
    
    {movie && (<MovieDescription 
    title={title}
    vote_average={vote_average}
    overview={overview}
    genres={genreList(genres)}
    poster_path={poster_path}
    movieId={movieId}
    url={url}
    tagline={tagline}
    release_date={release_date}
    runtime={runtime}
    />)}

    <Route path={`${url}/cast`}>
        <MovieCredits movieId={movieId}/>
    </Route>

    <Route path={`${url}/reviews`}>
        <MovieRevies movieId={movieId}/>
    </Route>

</Container>
)
}