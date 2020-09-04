import React from 'react';
import Nissan from './Components/Nissan';
import Toyota from './Components/Toyota';
import Car from './Components/Car';
import Sonic from './Components/Sonic';
import Mask from './Components/Mask';
import BestJimCarreyMovies from './Components/BestJimCarreyMovies';
import Movie from './Components/Movie';

function App() {
  return (
    <div>
      <h1>Favorite Cars</h1>

      <Nissan />
      <Toyota />
      <Car year="1990" make="Nissan" model="240sx" />
      <Car year="2012" make="Mitsubishi" model="EVO" />
      <Car year="1970" make="Datsun" model="240z" />

      <h1>Favorite Movies</h1>
      <Sonic />
      <Mask />
      <BestJimCarreyMovies movie="Ace Ventura" />
      <BestJimCarreyMovies movie="Dumb and Dumber" />
      <Movie title="The Truman Show" actor="Jim Carrey" />
      <Movie title="The Fast and the Furious" actor="Paul Walker" />
    </div>
  );
}

export default App;
