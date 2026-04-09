import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players';
import { Divide } from 'lucide-react';


const fetchPlayer = async () => {
  const res = (await fetch("data.json")).json();
  return res;
}

function App() {
  const playerPromise = fetchPlayer()

  const [coins, setCoins ] = useState(100000)

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className='text-center py-3'><span className="loading loading-bars loading-xl"></span></div>}>
        <Players
          playerPromise={playerPromise}
          setCoins={setCoins}
          coins={coins}
        ></Players>
      </Suspense>
    </>
  )
}

export default App
