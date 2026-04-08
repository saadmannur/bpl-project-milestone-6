import { Suspense } from 'react';
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

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div className='text-center py-3'><span className="loading loading-bars loading-xl"></span></div>}>
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
