import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { PodcastsPage } from './PodcastsPage';
import MovieList from './movie/MovieList';

// app is the parent
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="podcasts" element={<PodcastsPage />} />
          <Route path="movies" element={<MovieList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
