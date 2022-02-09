import { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import SearchForm from "../../components/searchForm/SearchForm";
import { fetchMoviesByQuery } from "../../services/fetchAPI";
import {AiOutlineStar} from "react-icons/ai";
import { MovieList, Container, MovieItem, Poster, MovieTitle, VoteAverage, SpanVote, AddToFav } from '../homeView/HomeView.styled';

export default function MoviewSearchView() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState([]);
    const {url} = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
 
    useEffect(() => {
        if(query) {
           fetchMoviesByQuery(query).then(({results}) => setResult(results)).catch(error => setError); 
        } 
    }, [query]);

    useEffect(() => {
        if(location.search) {
            const searchQuery = new URLSearchParams(location.search).get('query');
            setQuery(searchQuery);
        }
    }, [location])

    const writeQueryToLocationSearch = (query) => {
        history.push({...location, search: `query=${query}`});
    }

    return (
        <Container>
            <SearchForm handleSubmit={writeQueryToLocationSearch}/>

            {result.length === 0 && location.search && error && (
                <p> 404 Not Found</p>
            )}

            {result && (
                <MovieList>
                {result.map(({title, id, poster_path, release_date, vote_average}) =>             
                (<MovieItem key={id}
                     to={{
                        pathname: `${url}/${id}`,
                        state: {
                            from: {location,
                            label: 'Back to search'
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
        </Container>
    )
}
