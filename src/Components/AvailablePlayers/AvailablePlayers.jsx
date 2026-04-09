import React, { useState } from 'react';
import Player from './Player';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const AvailablePlayers = ({ players, setCoins, coins }) => {
    const [btnType, setBtnType] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);
    
    return (
        <div className='p-2'>
            <div className='my-5 flex justify-between items-center px-1 md:px-4'>
                {
                    btnType === "available" ? <h2 className='text-l md:text-4xl font-bold'>Available Players</h2> : <h2 className='text-l md:text-4xl font-bold'>Selected Players({selectedPlayers.length}/{players.length})</h2>
                }
                <div className='flex  items-center '>
                    <button
                     onClick={()=>setBtnType('available')} 
                     className={`btn rounded-r-none rounded-l-lg ${btnType == "available"? `bg-[#E7FE29]`:``}`} >Available
                    </button>
                    <button
                        onClick={() => setBtnType('select')}
                        className={`btn rounded-l-none rounded-r-lg ${btnType == "select" ? `bg-[#E7FE29]` : ``} `}>Selected ({selectedPlayers.length})
                     </button>
                </div>
            </div>
            
            {
                btnType == "available"?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8'>
                        {
                            players.map(player => <Player
                                 key={player.id} 
                                 player={player} 
                                 setCoins={setCoins} 
                                 coins={coins}
                                selectedPlayers={selectedPlayers}
                                setSelectedPlayers={setSelectedPlayers}
                                ></Player>)
                        }
                    </div>:
                    <SelectedPlayers
                     selectedPlayers={selectedPlayers} 
                     setSelectedPlayers={setSelectedPlayers}
                        setCoins={setCoins}
                        coins={coins}
                    ></SelectedPlayers>
            }

        </div>
    );
};

export default AvailablePlayers;