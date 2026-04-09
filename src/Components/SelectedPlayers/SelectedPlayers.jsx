import React from 'react';
import RenderSelectedPlayer from './RenderSelectedPlayer';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coins, setCoins }) => {
    // console.log(selectedPlayers);
    return (
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
    );
};

export default SelectedPlayers;