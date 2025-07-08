import MovieSearch from "./MovieSearch";
import { Form, useLoaderData, useNavigate } from "react-router";


function Home(){

    const { movies, search,totalResults, page , type } = useLoaderData();
    let navigate = useNavigate();
    
    const totalPages = Math.ceil(totalResults / 10);
    const showTotalResult = totalResults.toLocaleString();

    const goToPage = (newPage) => {
        navigate(`/?search=${search}&page=${newPage}`);
    };

    const handleFavourite = () =>{
        navigate('/Favourties');
    }

    return(
        <>
            <div className="py-[30px] lg:px-[100px] sm:px-[50px] px-[20px] bg-white sticky top-0 md:flex  justify-between items-center">
                <h1 className="lg:text-[30px] text-[20px] font-bold md:mb-0 mb-[25px] md:text-left text-center">🎬 Movie Search</h1>
                <div>
                    <Form method="get">

                        <select
                                name="type"
                                defaultValue={type}
                                className="border-2 border-black py-2 px-3 rounded-[4px] md:mb-0 mb-[25px] md:ml-0 ml-[120px]"
                            >
                                <option value="">All</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                                <option value="episode">Episode</option>
                        </select>

                        <input
                            type="text"
                            name="search"
                            placeholder="Search movies..."
                            defaultValue={search}
                            className="border-2 border-r-0 border-black py-[8px] px-5 focus:outline-none rounded-l-[4px] ml-[10px]"
                        />
                        

                        <button type="submit"
                            className='text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-r-[4px] cursor-pointer hover:bg-gray-600'
                        >Search</button>

                    </Form>
                </div>

            </div>

            <div className="py-[30px] lg:px-[100px] sm:px-[50px] px-[20px]">
                <div className="md:flex justify-between items-center">
                    {movies.length === 0 ? 
                        (
                            <p className="text-[17px] font-semibold md:mb-0 mb-[25px] md:text-left text-center"> No Search Results</p>
                        ) : (
                            <p className="text-[17px] font-semibold md:mb-0 mb-[25px] md:text-left text-center">Total Search Results {showTotalResult} Items</p>
                        )
                    }

                    <div className="md:text-right text-center">
                        <button 
                            className="text-white bg-black py-[10px] px-5 text-[16px] text-center rounded-[4px] cursor-pointer" 
                            onClick = {handleFavourite}>
                                View Favourties List
                        </button>
                    </div>

                </div>
                
                {movies.length === 0 ? (
                    <div className="text-center text-gray-600 text-lg mt-40 font-semibold">
                        No movies found 
                    </div>

                    ) : (
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-[30px] ">
                            {movies.map((items)=>(
                                <MovieSearch key={items.imdbID} movie={items}/>
                            ))}
                        </div>
                    )
                }

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                        <button
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                            disabled={page === 1}
                            onClick={() => goToPage(page - 1)}
                        >
                            Previous
                        </button>

                        <span className="text-gray-600 font-medium">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                            disabled={page === totalPages}
                            onClick={() => goToPage(page + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </>
    )

}

export default Home;