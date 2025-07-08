## Project Name
- 🎬 Movie Searching App
- A React-based movie search application using the OMDb API. Users can search movies by title, filter by type (movie, series, episode), view detailed information, and manage favourites.

## 🚀 Features
- 🔍 Search movies using the OMDb API
- 🧭 Pagination for search results
- 🎯 Filter results by type (movie, series, episode)
- 📄 Movie detail view on image click
- 💾 Add/remove favourites
- ⚡ Built with React Router and Axios

## 🧱 Technologies Used
- React JS (Functional Components)
- JavaScript
- Tailwind Css
- React Router
- Axios
- OMDb API
- useLoaderData Hook and useSearchParams 
- useState Hook

## 🛠️ How It Works
- User Searches a Movie
    - User types a movie title in the search bar.
    - On form submit, the URL is updated with query parameters using useSearchParams.
- Loader Fetches Data from OMDb API
    - A React Router loader reads the URL parameters.
    - It sends a request to the OMDb API using Axios with the API key.
    - Response data (search results, total results) is passed to the component using useLoaderData.
- Display Search Results
    - Movies are displayed in a grid layout.
    - If there are no results, a "No movies found" message is shown.
- Pagination
    - User can navigate between pages using “Previous” and “Next” buttons.
    - Pagination is handled by updating the page parameter in the URL, which reloads data via the loader.
- Filter by Type
    - A dropdown lets users filter results by type (movie, series, episode).
    - Selected filter updates the type in URL, triggering a re-fetch via loader.
- View Movie Details
    - Clicking on a movie image navigates to a new page (or modal) showing detailed information using its IMDb ID.
    - A separate loader fetches detailed data for the selected movie.
- Favourites Management
    - Users can add or remove movies from their favourites list.
    - Favourites are stored in localStorage and rendered on a separate “Favourites” page.


## My Code 
## HTML
- All Movies are rendered into the DOM through a single index.html file.

## Tailwind Css
- Tailwind CSS can be installed in a Vite project using the official setup steps.
- Used for styling the Movies Searching Application.

## React Hook 
- useState is used to manage the state of the fav movies.
- Uses useLoaderData() to display search results.
- Uses useSearchParams() to read and update query parameters (search term, page, filter).

## Deployed Link
- 