import React, { useState, useEffect } from "react";
import "./App.css";

console.log(import.meta.env.VITE_OMDB_API_KEY)

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
    
    const [movie, setMovie] = useState(null); //I'm using State to hold movie data
    const [loading, setLoading] = useState(true); // I'm using State to track loading

    // I Refactored getMovie function
    const getMovie = async (searchTerm = "Clueless") => {
        setLoading(true); // I Set loading to true while fetching
        try {
            console.log(`Fetching data for movie: ${searchTerm}`);
            const response = await fetch(
                //In line 21 import.meta.env.VITE_OMDB_API_KEY) is where am hidding my API key.
                `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
            );
            const data = await response.json();
            console.log(data); // This Log the API response data
            setMovie(data);
        } catch (e) {
            console.error('Error fetching movie data:', e);
        } finally {
            setLoading(false); // This Set loading to false after fetching
        }
    };

    //I'm Using useEffect to fetch the initial movie on mount
    useEffect(() => {
        getMovie(); //I'm Fetch initial movie data when the component mounts
    }, []); // This Empty dependency array meaning this effect runs once on mount

    return (
        <div className="App">
            <Form moviesearch={getMovie} /> {/* Pass the getMovie function */}
            {loading ? <h1>Loading...</h1> : <MovieDisplay movie={movie} />} {/* Conditional rendering based on loading state */}
        </div>
    );
}

export default App;