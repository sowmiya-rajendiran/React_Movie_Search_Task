import { useEffect, useState } from "react";
import { Link } from "react-router";
import favFill from "../assets/fav_with_fill.png";
import favEmpty from "../assets/fav_without_fill.png";

function MovieSearch({movie}){

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favourites")) || [];
        setIsFav(favs.some((m) => m.imdbID === movie.imdbID));
    }, [movie.imdbID]);

    // Add favourt list
     const toggleFavourite = () => {

            const favs = JSON.parse(localStorage.getItem("favourites")) || [];

            if (isFav) {
                const updated = favs.filter((m) => m.imdbID !== movie.imdbID);
                localStorage.setItem("favourites", JSON.stringify(updated));
                setIsFav(false);
            } 
            else {
                favs.push(movie);
                localStorage.setItem("favourites", JSON.stringify(favs));
                setIsFav(true);
            }
        };

    return (
        <>
            <div className="bg-white p-4 shadow-lg">
                <Link to={"/MovieDetails" + "?id=" + movie.imdbID}>
                    <img
                        className="h-[450px] w-[400px] object-cover m-auto"
                        src={movie.Poster}
                        alt={movie.Title}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/src/assets/No_Image_Available.jpg';
                        }}
                         
                    />
                    
                </Link>
                <div className="flex justify-between items-center">
                    <h1 className="text-[16px] font-bold mt-[15px]">{movie.Title}</h1>
                    <button onClick={toggleFavourite}>

                        <img
                            src={isFav ? favFill : favEmpty}
                            alt="Favourite"
                            className={`h-[20px] ${isFav ? "w-[25px]" : "w-[19px]"} mt-[15px] cursor-pointer`}
                        />

                    </button> 

                </div>
               
            </div>
            
        </>
    )

}

export default MovieSearch;