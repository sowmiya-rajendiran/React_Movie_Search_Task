import MovieDetails from "./components/MovieDetail";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import movieLoader from "./loaders/movieLoader";
import movieDetailsLoader from "./loaders/movieDetailsLoader";
import Favourties from "./components/Favourties";

let routes = [
    {
        path : '/',
        element : <Home />,
        loader : movieLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    },
    {
        path : '/MovieDetails',
        element : <MovieDetails />,
        loader : movieDetailsLoader,
        hydrateFallbackElement: <div>Loading...</div>,
    },
    {
        path : '/Favourties',
        element : <Favourties />
    }
]

let router = createBrowserRouter(routes , {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
})

function App(){
    return(
        <RouterProvider
            router = {router}
            future={{
                v7_startTransition: true,
            }}
        />
    )
}

export default App;
