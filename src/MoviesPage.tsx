import { useState } from 'react';
import data from './MovieData.json';
import React from 'react';
import { Page } from './Page';
import styles from './Movies.module.css';

// build an array from the json file
const MDS = data.MovieDataSample;

// build a structure to print out a table
function MovieList() {
  // use state so that we can add movies
  const [listOMovies] = useState(MDS);

  return (
    <Page>
      <div>
        <br></br>
        <h1 className={styles.h1}>Joel's Movies</h1>
      </div>

      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr className={styles.tr}>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Page>
  );
}

export default MovieList;
