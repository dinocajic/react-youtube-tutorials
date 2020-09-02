import React from 'react';
import Nissan from './Components/Nissan';
import Toyota from './Components/Toyota';
import Car from './Components/Car';
import Sonic from './Components/Sonic';
import Mask from './Components/Mask';

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
    </div>
  );
}

export default App;
