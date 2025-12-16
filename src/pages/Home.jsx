import { useEffect } from 'react';
import { getPopularMovies } from '../api/api';

function Home() {

  useEffect(() => {
    console.log("trying to fetch..."); 
    
    //just did a simple check to see if the data comes through
    getPopularMovies()
      .then(data => console.log("data from the api", data))
      .catch(err => console.error("error", err));
  }, []);
};

export default Home