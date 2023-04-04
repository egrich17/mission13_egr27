import { useEffect, useState } from 'react';
import {Movie} from '../Types/movie';
import styles from './Movie.module.css';

function MovieList () {

    const [movieData, setMovieData] = useState<Movie[]>([]);

    useEffect (() => {
    const fetchMovie = async () => {
        const rsp = await fetch('https://localhost:4000/movie');
        const temp = await rsp.json();
        setMovieData(temp);
    };
    fetchMovie();
}, [])

    return (
        <>
            <div className='row'>
                <h1 className={styles.h1}>Joel's Movie Collection</h1>
            </div>
            <table className='table table-bordered'>
                <thead>
                    <tr className={styles.tr}>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Rating</th>
                        <th>Edited</th>
                        <th>LentTo</th>
                        <th>Notes</th>
                    </tr>
                </thead>

                <tbody>{movieData.map((m) => (
                    <tr key={m.movieId}>
                        <td>{m.category}</td>
                        <td>{m.title}</td>
                        <td>{m.year}</td>
                        <td>{m.director}</td>
                        <td>{m.rating}</td>
                        <td>{m.edited}</td>
                        <td>{m.lentTo}</td>
                        <td>{m.notes}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )
}

export default MovieList;