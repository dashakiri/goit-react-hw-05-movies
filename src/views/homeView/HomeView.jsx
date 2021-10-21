import { useRouteMatch, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';
import PageHeading from "../../components/pageHeading/pageHeading";
import {fetchTrendingMovies} from "../../services/fetchAPI";
import { MovieList, Container } from './HomeView.styled';
import { StyledLink } from '../../components/navigation/Navigation.styled';

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
            {movies.map(({title, id, backdrop_path}) =>             
            (<li key={id}>
                <StyledLink to={{
                    pathname: `${url}movie/${id}`,
                    state: {
                        from: {
                            location,
                            label: 'Back to homepage'
                        }
                    }
                }}>
                    <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} width="300" height="170"/>
                    {title}</StyledLink>
            </li>))}
        </MovieList>
    )}
    </Container>)
}
