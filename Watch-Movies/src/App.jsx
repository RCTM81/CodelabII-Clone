
import './App.css'

const movies = [
  { title: 'Barbie', image: '/barbie (1).jpg', genre: 'Comedy' },
  { title: 'Hidden Figures', image: '/hidden-figures.jpg', genre: 'Drama' },
  { title: 'Hook', image: '/hook.jpg', genre: 'Comedy' },
  { title: 'La La Land', image: '/la-la-land.jpg', genre: 'Romance' },
  { title: 'Palm Springs', image: '/palm-springs.jpg', genre: 'Comedy' },
  { title: 'Who Framed Roger Rabbit', image: '/who-framed-roger-rabbit.jpg', genre: 'Comedy' }
]

function MovieCard({ movie, index }) {
  return (
    <article className={`movie-card movie-${index + 1}`}>
      <img src={movie.image} alt={`${movie.title} movie poster`} />

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.genre} movie. Discover this film and enjoy watching it.</p>
        <button className="watch-button">WATCH NOW</button>
      </div>
    </article>
  )
}

function App() {
  return (
    <>
      <header className="header">
        <h1>watch.it</h1>

        <nav className="navigation">
          <a href="#movies">Action</a>
          <a href="#movies">Comedy</a>
          <a href="#movies">Romance</a>
          <a href="#movies">Drama</a>
        </nav>

        <button className="search-button">SEARCH</button>
      </header>

      <main id="movies" className="movie-container">
        {movies.map((movie, index) => (
          <MovieCard key={movie.title} movie={movie} index={index} />
        ))}
      </main>
    </>
  )
}

export default App

