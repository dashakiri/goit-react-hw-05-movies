import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import {fetchOneMovie} from '../../services/fetchAPI';
import MovieDescription from "../../components/movieDescription/MovieDescription";
import MovieCredits from "../../components/movieCredits/MovieCredits";
import MovieRevies from "../../components/movieReview/MovieReviews";

export default function MovieView() {
const {url} = useRouteMatch();
const [movie, setMovie] = useState({});
const {movieId} = useParams();

useEffect(() => {
return fetchOneMovie(movieId).then(setMovie);
}, [movieId]);

const {genres = [], title, vote_average, overview, backdrop_path} = movie;

const genreList = (genres) => {
    let genreNames = [];
    genres.map((genre) => (
        genreNames.push(genre.name)
    ))
    return genreNames.join(', ');
};

return (
<div>
    {movie && (<MovieDescription 
    title={title}
    vote_average={vote_average}
    overview={overview}
    genres={genreList(genres)}
    backdrop_path={backdrop_path}
    movieId={movieId}
    url={url}
    />)}

    <Route path={`${url}/cast`}>
        <MovieCredits movieId={movieId}/>
    </Route>

    <Route path={`${url}/reviews`}>
        <MovieRevies movieId={movieId}/>
    </Route>

</div>
)
}