


function MovieDisplay({ movie }) {
    const loaded = function() {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
            </>
        );
    };

    const loading = function() {
        return <h1>No Movie to Display</h1>;
    };

    console.log('Rendering MovieDisplay with movie:', movie); // Log when the component renders

    return movie ? loaded() : loading();
}

export default MovieDisplay;