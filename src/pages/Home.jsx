const Home = () => { 
    return (
      <div>{loading ? <Loader /> : <MovieList movies={trendingMovies} />}</div>
    );
}

export default Home;