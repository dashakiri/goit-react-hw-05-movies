import { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import SearchForm from "../../components/searchForm/SearchForm";
import { fetchMoviesByQuery } from "../../services/fetchAPI";
import { Container, MovieList } from "../homeView/HomeView.styled";
import { StyledLink } from "../../components/navigation/Navigation.styled";

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
                {result.map(({title, id, backdrop_path}) =>             
                (<li key={id}>
                    <StyledLink to={{
                        pathname: `${url}/${id}`,
                        state: {
                            from: {location,
                            label: 'Back to search'
                            }
                        }  
                        }}>
                        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title} width="300" height="170"/>
                        {title}</StyledLink>
                </li>))}
            </MovieList>
            )}
        </Container>
    )

}

// !!!!! state machine