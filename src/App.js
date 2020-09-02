import React from 'react';
import Nissan from './Components/Nissan';
import Toyota from './Components/Toyota';
import Car from './Components/Car';

function App() {
  return (
    <div>
      <h1>Favorite Cars</h1>

      <Nissan />
      <Toyota />
      <Car year="1990" make="Nissan" model="240sx" />
      <Car year="2012" make="Mitsubishi" model="EVO" />
      <Car year="1970" make="Datsun" model="240z" />
    </div>
  );
}

export default App;
