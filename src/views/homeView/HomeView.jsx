import { useRouteMatch, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';
import PageHeading from "../../components/pageHeading/pageHeading";
import {fetchTrendingMovies} from "../../services/fetchAPI";
import { MovieList, Container, MovieItem, Poster, MovieTitle, VoteAverage, SpanVote, AddToFav } from './HomeView.styled';
import {AiOutlineStar} from "react-icons/ai";
import {HiOutlinePlus} from 'react-icons/hi'

export default function HomeView() {
    const {url} = useRouteMatch();
    const [movies, setMovies] = useState([]);

    const location = useLocation();

    useEffect(() => {fetchTrendingMovies().then(({results}) => setMovies(results))}, []);

    return (
    <Container>

    <PageHeading text={'Trending movies'}/>

    {movies && (
        <MovieList>
            {movies.map(({title, id, poster_path, vote_average, release_date}) =>             
            (<MovieItem key={id}
                to={{
                    pathname: `${url}movie/${id}`,
                    state: {
                        from: {
                            location,
                            label: 'Back to homepage'
                        }
                    }
                }}>
                <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="266" height="400"/>
                <VoteAverage><AiOutlineStar/><SpanVote>{vote_average}</SpanVote></VoteAverage>
                <MovieTitle>{title}</MovieTitle>
                <AddToFav>{release_date}</AddToFav>
            </MovieItem>))}
        </MovieList>
    )}
    </Container>)
}
