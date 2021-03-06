import { useEffect, useState } from "react";
import {fetchMovieReviews} from '../../services/fetchAPI';
import { Review } from "./MovieReview.styled";

export default function MovieRevies({movieId}) {
    const [review, setReview] = useState([]);
    const [error, setError] = useState('');

    const {results = []} = review;

    useEffect(() => {
        return fetchMovieReviews(movieId).then(setReview).catch((error) => setError);
    }, [movieId]);

    return (
    <div>
        {error && (<p>There are no reviews for this movie.</p>)}

        <ul>
        {results.map(({author, id, content}) => {
            return <Review key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
            </Review>
        })}
        </ul>

    </div>        
    )
}