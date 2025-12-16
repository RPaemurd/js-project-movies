const API_TOKEN = import.meta.env.VITE_API_TOKEN; //created a variabel token, the key is in an .env file for security reasons
const BASE_URL = "https://api.themoviedb.org/3";

/* we recived a so called "Bearer Token" intead of a simple API-key, so since its a Bearer Token it
is not supposed to be in the URL, instead it sends as a Header with the fetch */

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}` 
  }
};

export const getPopularMovies = async () => {
  try {
    // We send with 'options' as a second argumnet to fetch
    const response = await fetch(`${BASE_URL}/movie/popular?language=en-US&page=1`, options);
    
    if (!response.ok) {
      throw new Error('Something went wrong woth fetching movies');
    }

    const data = await response.json();

    /* console.log("Get movies", data); */

    return data.results; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//Fetches detailed information for a specific movie by its ID
export const getMovieDetails = async (id) => {
  try { // We inject the 'id' dynamically into the URL string
        // 'options' contains our Authorization header (the Bearer Token)
    const response = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, options);


    if (!response.ok) {
        throw new Error(`Error fetching movie details: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Moviedetails " + id + ":", data);
    
    // Return the single movie object to the component
    return data;  
  } 
    catch (error) {
    console.error("Failed to load movie details:", error);

    throw error;
  }
};
