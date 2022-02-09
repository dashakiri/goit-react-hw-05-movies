import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/fetchAPI";
import { ActorList, Actor, ActorImage, ActorTitle } from "./MovieCredits.styled";

export default function MovieCredits({movieId}) {
    const [credits, setCredits] = useState([]);
   
    const {cast = []} = credits;
           
    useEffect(() => {
        return fetchMovieCredits(movieId).then(setCredits);
    }, [movieId]);

    console.log(cast)

    return (
       <ActorList>
        {cast.map(({name, character, profile_path, id}) => {
            return <Actor key={id}>
                <ActorImage src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="100" height="125"/>
                <ActorTitle>{name}</ActorTitle>
                <ActorTitle>{character}</ActorTitle>
            </Actor>
        })};
    </ActorList>)
}