import React from 'react';
import RenderSelectedPlayer from './RenderSelectedPlayer';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
    // console.log(selectedPlayers);
    return (
        <div>
            {
                selectedPlayers.length == 0 ?
                    <div className='text-center border border-gray-200 shadow p-25 rounded-2xl text-gray-400'>
                        <h2 className='text-2xl mb-4 font-semibold'>No Player Selected Yet</h2>
                        <p>Go to Available tap to select players</p>
                    </div>
                 :
                    <div className=' grid grid-rows-1 gap-10'>
                        {
                            selectedPlayers.map(selectedPlayer => <RenderSelectedPlayer
                                key={selectedPlayer.id}
                                selectedPlayer={selectedPlayer}
                                selectedPlayers={selectedPlayers}
                                setSelectedPlayers={setSelectedPlayers}

                                coins={coins}
                                setCoins={setCoins}
                            ></RenderSelectedPlayer>)
                        }
                    </div>
            }
        </div>
    );
};

export default SelectedPlayers;