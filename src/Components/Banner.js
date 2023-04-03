import React, {useState, useEffect} from 'react'
import "./Banner.css"
import axios from "./Axios"
import requests from "./Requests"

export const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie (
            request.data.results [
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
        }
        fetchData();
    }, []);

  

    console.log(movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 clssName="banner__title">
                    {movie?. title || movie?. name || movie?. original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                <h1 className="banner__description">
                {truncate(movie?.overview, 200)}</h1>
                </div>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}