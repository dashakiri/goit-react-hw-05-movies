import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/fetchAPI";

export default function MovieCredits({movieId}) {
    const [credits, setCredits] = useState([]);
   
    const {cast = []} = credits;
           
    useEffect(() => {
        return fetchMovieCredits(movieId).then(setCredits);
    }, [movieId]);

    console.log(cast)

    return (
       <ul>
        {cast.map(({name, character, profile_path, id}) => {
            return <li key={id}>
                <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="100" height="125"/>
                <p>{name}</p>
                <p>{character}</p>
            </li>
        })};
    </ul>)
}