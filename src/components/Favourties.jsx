import { useEffect, useState } from "react";

function Favourties(){

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(favs);
    }, []);

    const removeFromFavourites = (imdbID) => {
        const updated = favourites.filter((m) => m.imdbID !== imdbID);
        localStorage.setItem("favourites", JSON.stringify(updated));
        setFavourites(updated);
    };

    return(
        <>
            <div className="py-[30px] md:px-[100px] px-[25px]">

                 <h1 className="text-[22px] font-semibold pt-[25px] pb-[40px]">Favourties List</h1>

                {favourites.length === 0 ? (
                    <p className="text-gray-600 text-lg text-center mt-[100px]">No favourites added.</p>
                ) : (
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {favourites.map((movie) => (

                            <div key={movie.imdbID} className="p-4 rounded shadow bg-white">

                                <img src={movie.Poster} 
                                    alt={movie.Title} 
                                    className="w-full h-[300px] object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/src/assets/No_Image_Available.jpg';
                                    }} />

                                <h3 className="text-[16px] font-bold mt-2">{movie.Title}</h3>

                                <button
                                    onClick={() => removeFromFavourites(movie.imdbID)}
                                    className="mt-3 px-4 py-2 bg-red-600 text-white text-sm rounded cursor-pointer"
                                >
                                    Remove
                                </button>

                            </div>
                        ))}
                    </div> )}



            </div>
           

        </>
    )
}

export default Favourties;

