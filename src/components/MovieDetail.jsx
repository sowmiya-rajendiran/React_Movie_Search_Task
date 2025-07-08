import { useLoaderData } from "react-router";

function MovieDetails(){
    const movie = useLoaderData();
    return(
        <>
        <div className="py-[30px] sm:px-[30px] px-[20px] bg-white m-auto my-[70px]  shadow-md xl:mx-[150px] mx-[20px]">
            <div className="md:flex justify-between gap-[20px]">
                <div className="md:w-1/2 w-full">
                    <img
                        className="h-[500px] w-full object-contain m-auto"
                        src={movie.Poster}
                        alt={movie.Title}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/src/assets/No_Image_Available.jpg';
                        }}
                    />
                </div>
                
                <div className="md:w-1/2 w-full">
                    <h1 className="text-[18px] font-semibold mb-[15px] md:mt-[80px] mt-[20px]">Title : {movie.Title}</h1>
                    <p className="text-[16px] font-semibold mb-[15px]">Released Year : {movie.Released}</p>
                    <p className="text-[16px] font-semibold mb-[15px]">Type of Flim : {movie.Genre}</p>
                    <p className="text-[16px] font-semibold mb-[15px]">Summary : {movie.Plot}</p>
                    <p className="text-[16px] font-semibold mb-[15px]"> Rating : {movie.imdbRating}</p>
                    <p className="text-[16px] font-semibold">BoxOffice : {movie.BoxOffice}</p>
                </div>
            </div>
        </div>
        </>
    )

}
export default MovieDetails;